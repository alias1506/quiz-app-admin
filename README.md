# 🎛️ Quiz Application - Admin Panel

Professional admin panel for managing quiz questions, sets, and users with AI-powered question generation and advanced analytics.

## ✨ Features

### Question Management
- **CRUD Operations** - Create, Read, Update, Delete questions
- **Bulk Operations** - Multi-select and bulk delete questions
- **Set Organization** - Group questions into quiz sets
- **Active Set Management** - Activate/deactivate quiz sets
- **Search & Filter** - Filter by set, active status
- **Pagination** - Customizable rows per page (10, 25, 50, 100)

### AI-Powered Generation
- **Groq AI Integration** - Free, ultra-fast question generation
- **Llama 3.3 70B** - High-quality, contextual questions
- **Batch Generation** - Generate 1-50 questions at once
- **Smart Formatting** - Auto-format mathematical and chemical notation
- **Review & Edit** - Edit generated questions before saving

### User Analytics
- **Dashboard** - View all registered users
- **Attempt Tracking** - See quiz attempts and scores
- **User Management** - Delete users, view details
- **Bulk Delete** - Multi-select user deletion
- **Pagination** - Customizable rows per page

### Advanced Features
- **Scientific Notation** - Auto-format powers (x²) and formulas (H₂O)
- **Session Management** - Secure admin authentication
- **Real-time Updates** - Instant UI updates after operations
- **Responsive Design** - Works on all devices
- **Loading Animations** - Professional spinners and loaders

---

## 🏗️ Tech Stack

### Frontend
- **Vanilla HTML/CSS/JavaScript** - No framework dependencies
- **Bootstrap 5** - Modern UI components
- **SweetAlert2** - Beautiful notifications
- **Font Awesome** - Icon library
- **Custom CSS** - Animations and styling

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **Groq SDK** - AI question generation
- **Session-based Auth** - Cookie management
- **CORS** - Cross-origin support

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (free tier)
- Groq API key (free, no credit card required)

### 1. Install Dependencies

```bash
cd quiz-app-admin
npm install
```

### 2. Configure Environment

Create `backend/.env`:

```env
# MongoDB Connection
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?appName=Cluster

# Groq API Key (FREE)
GROQ_API_KEY=your_groq_api_key_here

# Server Port
PORT=5001

# Environment
NODE_ENV=development
```

**Get Groq API Key (Free):**
1. Go to https://console.groq.com/keys
2. Sign up (GitHub/Google login available)
3. Click "Create API Key"
4. Copy key (starts with `gsk_`)
5. **No credit card required** - completely free!

**Get MongoDB URI:**
1. Use same database as main quiz app
2. Or create new cluster at https://cloud.mongodb.com
3. Click "Connect" → "Connect your application"
4. Copy connection string

### 3. Create Admin User

Sign up in the main quiz app with:
- **Email:** `admin@gmail.com`
- **Name:** `admin`

This user will be automatically detected as admin.

### 4. Run Development Server

```bash
npm run dev
```

Admin panel opens at: `http://localhost:5001`

Login with admin credentials created in step 3.

---

## 📋 Environment Variables Reference

| Variable | Example | Description |
|----------|---------|-------------|
| `MONGO_URI` | `mongodb+srv://...` | MongoDB connection string (same as main app) |
| `GROQ_API_KEY` | `gsk_abc123...` | Groq AI API key (free, no credit card) |
| `PORT` | `5001` | Admin server port (different from main app) |
| `NODE_ENV` | `development` or `production` | Environment mode |

---

## 🤖 AI Question Generation

### Groq AI Features

✅ **Completely FREE** - No credit card required, forever free  
✅ **30 requests/min** - Very generous rate limits  
✅ **14,400 requests/day** - 600x more than Google Gemini  
✅ **Ultra-fast** - Responses in <1 second  
✅ **High quality** - Llama 3.3 70B model (70 billion parameters)  
✅ **No quotas** - No monthly limits  

### Supported Models

- **llama-3.3-70b-versatile** (default) - Best for structured output
- llama-3.1-8b-instant - Faster, smaller model
- mixtral-8x7b-32768 - Good alternative

### How to Generate Questions

1. Navigate to **"All Questions"** page
2. Click **"🤖 AI Mode"** button
3. Enter **keywords** (e.g., "javascript, variables, functions")
4. Select **quiz set** (or create new one)
5. Specify **number of questions** (1-50)
6. Click **"⚡ Generate Questions"**
7. Review generated questions in the **"Generated Questions"** tab
8. Edit if needed (click edit icon)
9. Click **"💾 Save All to Database"**

### Example Prompts

| Keywords | Expected Output |
|----------|----------------|
| `javascript, arrays, loops` | 5 JavaScript questions about arrays and loops |
| `chemistry, periodic table` | Questions about chemical elements |
| `history, world war 2` | Historical questions about WW2 |
| `mathematics, algebra` | Algebra questions with proper notation |

---

## 📊 Features Breakdown

### Questions Page

**All Questions Tab:**
- ✅ View all questions with pagination
- ✅ Filter by set or active sets only
- ✅ Bulk delete (checkbox selection)
- ✅ Edit/delete individual questions
- ✅ Active set indicator (★ badge)
- ✅ Scientific notation auto-formatting
- ✅ Customizable rows per page (10, 25, 50, 100)

**Generated Questions Tab:**
- ✅ Preview AI-generated questions
- ✅ Edit before saving
- ✅ Delete individual questions
- ✅ Save all to database at once
- ✅ Clear view (keeps DB intact)

### Dashboard Page

- ✅ View all registered users
- ✅ See quiz attempts and scores
- ✅ Delete individual users
- ✅ Bulk delete users
- ✅ Pagination controls
- ✅ Real-time user count

### Set Management

- ✅ Create new quiz sets
- ✅ Edit set names
- ✅ Delete sets (with confirmation)
- ✅ Activate/deactivate sets
- ✅ View question count per set
- ✅ Bulk delete sets
- ✅ Active set prevention (must have 6+ questions)

---

## 🎨 UI Features

### Pagination
- **Position:** Bottom-left dropdown, bottom-right navigation
- **Options:** 10, 25, 50, 100 entries per page
- **Default:** 50 entries
- **Indicator:** "Showing X to Y of Z entries"

### Loading States
- **Full-page loader** - For multi-delete operations
- **Modal loader** - For set operations
- **Inline spinners** - For AI generation
- **Smooth animations** - Professional feel

### Notifications
- **SweetAlert2 modals** - Beautiful, customizable
- **Success messages** - Green, auto-dismiss
- **Error alerts** - Red, manual dismiss
- **Confirmation dialogs** - Two-step actions

---

## 🧪 Scientific Notation

Questions automatically format scientific notation:

### Mathematical Powers
- `x^2` → x²
- `(a+b)^3` → (a+b)³
- `10^-5` → 10⁻⁵
- `e^x` → eˣ

### Chemical Formulas
- `H2O` → H₂O
- `CO2` → CO₂
- `H2SO4` → H₂SO₄
- `Ca(OH)2` → Ca(OH)₂

**Applies to:**
- Question text
- Multiple choice options
- Correct answers
- Both manual and AI-generated questions

---

## 🌐 Deployment (Render)

### Deploy Admin Panel

1. **Create Web Service on Render:**
   - Go to https://dashboard.render.com
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Configure:
     - **Name:** quiz-app-admin
     - **Root Directory:** quiz-app-admin
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`

2. **Add Environment Variables:**
   Copy all from local `.env`:
   - `MONGO_URI` - Same as main app
   - `GROQ_API_KEY` - Your Groq key
   - `PORT` - 5001
   - `NODE_ENV` - production

3. **Access URL:**
   `https://your-admin-panel.onrender.com`

4. **Security Note:**
   - Add password protection in production
   - Use HTTPS only
   - Keep API keys secure

---

## 📁 Project Structure

```
quiz-app-admin/
├── backend/
│   ├── models/
│   │   ├── questionModel.js          # Question schema
│   │   ├── setsModel.js              # Quiz set schema
│   │   └── authModel.js              # User/admin schema
│   ├── routes/
│   │   ├── questionRoute.js          # Question CRUD + AI
│   │   ├── setsRoute.js              # Set management
│   │   ├── authRoute.js              # Authentication
│   │   └── userRoute.js              # User analytics
│   ├── services/
│   │   └── groqService.js            # AI generation logic
│   ├── middleware/
│   │   └── authMiddleware.js         # Session validation
│   ├── server.js                     # Express server
│   ├── .env                          # Environment variables
│   └── package.json
├── frontend/
│   ├── allQuestions.html             # Question management UI
│   ├── dashboard.html                # User analytics UI
│   ├── index.html                    # Login page
│   ├── assets/
│   │   ├── css/
│   │   │   ├── portal.css            # Bootstrap theme
│   │   │   └── style.css             # Custom styles
│   │   ├── js/
│   │   │   ├── sessionManager.js     # Session handling
│   │   │   └── main.js               # Utilities
│   │   └── images/
│   │       └── club-logo.jpg         # Branding
│   └── package.json
├── package.json                      # Root package
├── .gitignore
└── README.md
```

---

## 🔐 Security Features

### Session Management
- Cookie-based authentication
- Auto-expire after 7 days
- Secure flags in production
- CORS protection

### Admin Detection
System automatically identifies admin users:
- Email: `admin@gmail.com`
- Name: `admin` (case-insensitive)

### Data Protection
- Input validation on all forms
- XSS prevention with HTML escaping
- SQL injection prevention (MongoDB)
- CSRF protection

---

## 🆘 Troubleshooting

### AI Generation Fails

**Error: "Unauthorized" or "Invalid API key"**
- ✅ Check `GROQ_API_KEY` in `.env`
- ✅ Ensure key starts with `gsk_`
- ✅ **Restart server** after changing `.env`
- ✅ Test key at https://console.groq.com

**Error: "Rate limit exceeded"**
- ✅ Wait 1 minute (30 requests/min limit)
- ✅ Reduce number of questions per request
- ✅ Check Groq dashboard for usage

**Error: "Model not found"**
- ✅ Update model name to `llama-3.3-70b-versatile`
- ✅ Check available models: https://console.groq.com/docs/models

**Error: "Failed to generate questions"**
- ✅ Check backend console for detailed error
- ✅ Ensure `groq-sdk` is installed: `npm install groq-sdk`
- ✅ Verify internet connection

### MongoDB Connection

**Error: "MongoNetworkError"**
- ✅ Check IP whitelist (allow `0.0.0.0/0` for cloud)
- ✅ Verify connection string format
- ✅ Ensure database user exists
- ✅ Check password special characters (URL encode)

**Error: "Authentication failed"**
- ✅ Double-check username and password
- ✅ Ensure user has read/write permissions
- ✅ Try creating a new database user

### Login Issues

**Can't login as admin:**
- ✅ Create user with exact email: `admin@gmail.com`
- ✅ Or name: `admin`
- ✅ Check backend logs for session errors

**Session expired immediately:**
- ✅ Clear browser cookies
- ✅ Check server console for errors
- ✅ Verify `sessionManager.js` is loaded

### Pagination Not Showing

**Dropdown not visible:**
- ✅ Hard refresh: Ctrl+Shift+R
- ✅ Check browser console for errors
- ✅ Ensure Bootstrap 5 CSS is loaded

---

## 📊 Groq API Limits (Free Tier)

| Metric | Limit | Notes |
|--------|-------|-------|
| **Requests/minute** | 30 | Per API key |
| **Requests/day** | 14,400 | No monthly cap |
| **Tokens/minute** | 14,400 | Shared across requests |
| **Cost** | $0 | **Forever free** |
| **Credit Card** | Not required | No payment info needed |

**Comparison:**
- Groq: 14,400 requests/day ✅
- Google Gemini: 15 requests/min ❌
- OpenAI GPT-3.5: Paid only ❌

---

## 🔗 Useful Links

- **Groq Console:** https://console.groq.com
- **Groq API Docs:** https://console.groq.com/docs
- **Model List:** https://console.groq.com/docs/models
- **MongoDB Atlas:** https://cloud.mongodb.com
- **Render Dashboard:** https://dashboard.render.com
- **Bootstrap 5:** https://getbootstrap.com/docs/5.0

---

## 📝 Best Practices

### Question Management
- **Activate sets** with 6+ questions
- **Review AI questions** before saving
- **Use descriptive** set names
- **Organize by topic** for easy filtering

### AI Generation
- **Be specific** with keywords
- **Start small** (5 questions) to test
- **Review quality** before bulk generation
- **Edit** questions for clarity

### Security
- **Change default** admin email in production
- **Add authentication** middleware
- **Use HTTPS** only
- **Never commit** `.env` files

---

## 🎓 Tips & Tricks

### Efficient Question Creation
1. Generate 10 questions with AI
2. Review and edit in Generated tab
3. Delete poor quality questions
4. Save remaining to database
5. Repeat for different topics

### Set Organization
- **Subject-based:** Math, Science, History
- **Difficulty-based:** Easy, Medium, Hard
- **Topic-based:** Loops, Functions, Arrays

### Pagination Tips
- Use **10** for quick browsing
- Use **50** for general use
- Use **100** for bulk operations

---

## 📝 License

MIT License - Feel free to use for your projects!

---

## 🤝 Support

For issues or questions:
1. Check troubleshooting section above
2. Review Groq/MongoDB documentation
3. Check backend console logs
4. Inspect browser console for frontend errors

---

## 🎉 Credits

- **AI:** Groq (Llama 3.3 70B)
- **Database:** MongoDB Atlas
- **UI:** Bootstrap 5
- **Icons:** Font Awesome
- **Notifications:** SweetAlert2

---

**Last Updated:** December 10, 2024  
**Version:** 2.0.0  
**Status:** Production Ready ✅
