# 🎯 Quiz Application - Admin Panel

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![AI Powered](https://img.shields.io/badge/AI-Gemini%202.0-orange.svg)

**Intelligent admin dashboard for managing quiz questions with AI-powered generation**

[Live Demo](https://quiz-app-admin-2grs.onrender.com) • [Features](#features) • [Tech Stack](#tech-stack) • [Installation](#installation)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

---

## 🎓 Overview

The Quiz Admin Panel is a powerful, feature-rich content management system designed for educators and administrators to create, manage, and organize quiz questions. With cutting-edge AI integration powered by Google's Gemini 2.0, administrators can generate high-quality questions automatically, significantly reducing content creation time while maintaining quality standards.

### Key Highlights

- 🤖 **AI-Powered Question Generation** - Leverage Google Gemini 2.0 to generate questions automatically
- 📊 **Comprehensive Dashboard** - Real-time statistics and analytics
- ✏️ **CRUD Operations** - Complete question and set management
- 🔄 **Bulk Operations** - Select and delete multiple items efficiently
- 🎯 **Smart Duplicate Detection** - Prevents duplicate questions automatically
- 📱 **Responsive Design** - Bootstrap 5-powered modern interface
- 🔐 **Secure Authentication** - Session-based admin authentication

---

## ✨ Features

### Question Management

#### Manual Question Creation
- ✅ Create questions with multiple-choice options (2-4 options)
- ✅ Flexible option separator support (comma or ||)
- ✅ Real-time form validation
- ✅ Set assignment for question organization
- ✅ Inline set creation while adding questions

#### AI-Powered Question Generation 🤖
- ✅ Generate multiple questions from keywords
- ✅ Automatic duplicate detection and regeneration
- ✅ Real-time progress tracking (1/5, 2/5, etc.)
- ✅ Questions saved directly to database
- ✅ Smart question formatting with validation
- ✅ Supports 1-50 questions per generation

#### Question Organization
- ✅ Filter questions by set or show all
- ✅ View questions from active sets only
- ✅ Pagination (10/25/50/100 per page)
- ✅ Search and filter capabilities
- ✅ Bulk selection and deletion

### Quiz Set Management

#### Set Operations
- ✅ Create and manage quiz sets
- ✅ Activate/deactivate sets
- ✅ Minimum 5 questions required for activation
- ✅ Visual active set indicator
- ✅ Edit set names
- ✅ Bulk delete sets
- ✅ Automatic question count validation

#### Set Features
- ✅ Only one set can be active at a time
- ✅ Active set displayed with special badge
- ✅ Questions linked to sets via dropdown
- ✅ Set deletion cascades to questions

### User Management

#### Real-Time Monitoring
- 🔴 **Live Updates** - User activity syncs instantly via WebSocket
- 📊 **Session Tracking** - View all quiz attempts with timestamps
- 🔢 **Attempt Numbers** - Track total attempts per user (#1, #2, #3...)
- ⏰ **Date/Time Display** - Precise timestamp for each quiz session
- 📈 **Score Tracking** - View scores for completed quizzes
- 🚫 **Attempt Limits** - Monitor 3 attempts per 24 hours
- ⏳ **Countdown Timers** - Live countdown until attempt reset

#### User Table Features
- ✅ Bulk selection and deletion
- ✅ Real-time status updates (Available/Blocked)
- ✅ Historical data preservation (all attempts saved)
- ✅ Pagination (10/25/50/100 per page)
- ✅ Email and name display
- ✅ Action buttons for management

### User Interface

#### Dashboard Features
- 📊 Real-time question statistics
- 📈 Set-wise question distribution
- 🎨 Modern, clean Bootstrap 5 design
- 📱 Fully responsive layout
- 🔍 Advanced search and filtering
- ⚡ Fast, smooth animations

#### AI Mode Modal
- 🤖 Two-tab interface (Generate | Generated Questions)
- 📝 Keywords input with fixed-height textarea
- 🎯 Set selection with inline creation
- 🔢 Number of questions selector (1-50)
- 📊 Real-time progress counter (5/5 display)
- 🗑️ Clear button to reset view
- ✏️ Edit and delete generated questions before saving

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **HTML5** | - | Page structure and semantic markup |
| **Bootstrap** | 5.3.x | Responsive UI framework |
| **JavaScript (ES6+)** | - | Client-side logic and interactions |
| **SweetAlert2** | 11.x | Beautiful, responsive alerts |
| **Font Awesome** | 6.x | Icon library |
| **SessionManager** | Custom | Client-side session management |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | ≥16.0.0 | JavaScript runtime |
| **Express** | 5.1.0 | Web framework |
| **MongoDB** | 8.17.0 | Database |
| **Mongoose** | 8.17.0 | MongoDB ODM |
| **Socket.IO** | Latest | Real-time bidirectional communication |
| **Google Generative AI** | 0.21.0 | AI question generation |
| **Axios** | 1.7.9 | HTTP client |

### AI Integration

| Service | Model | Purpose |
|---------|-------|---------|
| **Google Gemini API** | gemini-2.0-flash | Question generation |
| **API Version** | v1 | Stable API endpoint |
| **Rate Limit** | Free tier | Cost-effective integration |

---

## 🏗️ Architecture

```
quiz-app-admin/
├── frontend/                 # Static frontend application
│   ├── assets/              # Static resources
│   │   ├── css/
│   │   │   ├── portal.css               # Main styles
│   │   │   └── style.css                # Custom styles
│   │   ├── js/
│   │   │   ├── main.js                  # Core JavaScript
│   │   │   ├── app.js                   # Application logic
│   │   │   └── sessionManager.js        # Session handling
│   │   ├── images/                      # Image assets
│   │   └── plugins/         # Third-party libraries
│   │       ├── bootstrap/               # Bootstrap 5
│   │       ├── fontawesome/             # Icons
│   │       └── popper.min.js            # Tooltip positioning
│   ├── index.html           # Login page
│   ├── dashboard.html       # Analytics dashboard
│   └── allQuestions.html    # Main question management
│
├── backend/                  # Node.js backend
│   ├── routes/              # API endpoints
│   │   ├── authRoute.js                 # Admin authentication
│   │   ├── questionRoute.js             # Question CRUD + AI
│   │   └── setsRoute.js                 # Set management
│   ├── models/              # Mongoose schemas
│   │   ├── authModel.js                 # Admin user model
│   │   ├── questionModel.js             # Question schema
│   │   └── setsModel.js                 # Quiz set schema
│   ├── server.js            # Express server
│   ├── .env                 # Environment configuration
│   └── package.json         # Dependencies
│
└── README.md               # This file
```

---

## 🚀 Live Application

**Admin Panel:** [https://quiz-app-admin-2grs.onrender.com](https://quiz-app-admin-2grs.onrender.com)

Access the live admin dashboard to:
- Manage quiz questions
- Generate AI-powered questions
- Monitor user activity in real-time
- Create and manage quiz sets

---

## 📦 Installation

### Prerequisites

- **Node.js** v16.0.0 or higher
- **MongoDB** v4.4 or higher
- **npm** or **yarn**

### Quick Start

#### 1. Clone Repository

```bash
git clone https://github.com/alias1506/quiz-app-admin.git
cd quiz-app-admin/backend
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Configure Environment

Create `backend/.env`:

```env
# Server Configuration
PORT=5001
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/Quiz

# Google Gemini API (for AI question generation)
GEMINI_API_KEY=your_gemini_api_key_here
```

#### 4. Start Application

```bash
npm start
```

Access admin panel at: `http://localhost:5001`

---

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Backend server port | No | 5001 |
| `MONGO_URI` | MongoDB connection URL | Yes | - |
| `GEMINI_API_KEY` | Google Gemini API key | Yes (for AI) | - |
| `NODE_ENV` | Environment mode | No | development |

### AI Features

Powered by **Google Gemini 2.0 Flash** model with:
- Fast response time
- High-quality question generation
- Automatic duplicate detection
- JSON output formatting

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Google Gemini AI team for the powerful API
- Bootstrap team for the UI framework
- MongoDB team for the database solution
- All open-source contributors

---

## 📞 Support

For issues or questions:
- Open an issue in the repository
- Check the documentation
- Review troubleshooting section

---

## 🗺️ Roadmap

### Upcoming Features

- [ ] Question import from CSV/Excel
- [ ] Question export functionality
- [ ] Advanced filtering and search
- [ ] Question difficulty levels
- [ ] Question categories/tags
- [ ] Bulk edit operations
- [ ] Question preview mode
- [ ] Analytics dashboard
- [ ] Multi-admin support
- [ ] Activity logs

---

<div align="center">

**Powered by AI • Built with Modern Technologies**

[⬆ Back to Top](#-quiz-application---admin-panel)

</div>
