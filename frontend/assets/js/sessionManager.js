// Session Management System
class SessionManager {
  constructor() {
    this.sessionKey = "userSession";
    this.maxSessionAge = 24 * 60 * 60 * 1000; // 24 hours in ms
  }

  // Create a new session
  createSession(userId) {
    const sessionData = {
      userId: userId,
      loginTime: Date.now(),
      isAuthenticated: true,
      sessionId: this.generateSessionId(),
      lastActivity: Date.now(),
    };
    try {
      sessionStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
    } catch (error) {
      console.error("Error creating session - storage may be disabled:", error);
    }
    return sessionData;
  }

  // Generate unique session ID
  generateSessionId() {
    return `session_${Math.random().toString(36).substr(2, 9)}_${Date.now()}`;
  }

  // Check if session exists and is valid
  checkSession() {
    try {
      const session = sessionStorage.getItem(this.sessionKey);
      if (!session) return { valid: false, reason: "No session found" };

      const sessionData = JSON.parse(session);
      if (!sessionData.isAuthenticated)
        return { valid: false, reason: "Session not authenticated" };

      const currentTime = Date.now();
      if (currentTime - sessionData.loginTime > this.maxSessionAge) {
        this.clearSession();
        return { valid: false, reason: "Session expired" };
      }

      // Update last activity each check
      this.updateLastActivity();
      return { valid: true, sessionData };
    } catch (error) {
      console.error("Error checking session - storage may be disabled:", error);
      return { valid: false, reason: "Storage access error" };
    }
  }

  // Update last activity timestamp
  updateLastActivity() {
    try {
      const session = sessionStorage.getItem(this.sessionKey);
      if (session) {
        const sessionData = JSON.parse(session);
        sessionData.lastActivity = Date.now();
        sessionStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
      }
    } catch (error) {
      console.error("Error updating last activity - storage may be disabled:", error);
    }
  }

  // Get current session data
  getSession() {
    try {
      const session = sessionStorage.getItem(this.sessionKey);
      if (session) {
        return JSON.parse(session);
      }
      return null;
    } catch (error) {
      console.error("Error getting session - storage may be disabled:", error);
      return null;
    }
  }

  // Clear session
  clearSession() {
    try {
      sessionStorage.removeItem(this.sessionKey);
    } catch (error) {
      console.error("Error clearing session - storage may be disabled:", error);
    }
  }

  // Logout user
  logout() {
    this.clearSession();
    window.location.href = "index.html";
  }

  // Redirect to login page
  redirectToLogin() {
    window.location.href = "index.html";
  }

  // Check if current page is login page
  isLoginPage() {
    const currentPage = window.location.pathname;
    return (
      currentPage.includes("index.html") ||
      currentPage.endsWith("/") ||
      currentPage === ""
    );
  }

  // Initialize session checking for protected pages
  initProtectedPage() {
    if (this.isLoginPage()) return;

    const sessionCheck = this.checkSession();
    if (!sessionCheck.valid) {
      console.log("Session invalid:", sessionCheck.reason);
      this.redirectToLogin();
      return false;
    }

    // Set up periodic session validation (every 5 minutes)
    setInterval(() => {
      const sessionCheck = this.checkSession();
      if (!sessionCheck.valid) {
        alert("Your session has expired. Please login again.");
        this.logout();
      }
    }, 5 * 60 * 1000); // 5 minutes

    return true;
  }

  // Get user info from session
  getUserInfo() {
    const sessionData = this.getSession();
    return sessionData
      ? {
          userId: sessionData.userId,
          loginTime: new Date(sessionData.loginTime),
          sessionId: sessionData.sessionId,
          lastActivity: new Date(sessionData.lastActivity),
        }
      : null;
  }

  // Immediate session check (runs before DOM loads)
  immediateCheck() {
    if (this.isLoginPage()) return;

    const sessionCheck = this.checkSession();
    if (!sessionCheck.valid) {
      console.log("Session invalid:", sessionCheck.reason);
      this.redirectToLogin();
      return false;
    }
    return true;
  }
}

// Create global session manager instance
const sessionManager = new SessionManager();

// IMMEDIATE SESSION CHECK - Runs before DOM loads
(function () {
  sessionManager.immediateCheck();
})();

// Auto-initialize session checking when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  sessionManager.initProtectedPage();
});

// Update activity on user interactions
document.addEventListener("click", () => sessionManager.updateLastActivity());
document.addEventListener("keypress", () =>
  sessionManager.updateLastActivity()
);
document.addEventListener("scroll", () => sessionManager.updateLastActivity());
