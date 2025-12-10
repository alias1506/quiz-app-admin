# 🎛️ Quiz Application - Admin Panel

Admin panel for managing quiz questions, sets, and users with AI-powered question generation.

## ✨ Features

- **Question Management** - Create, edit, delete questions
- **Quiz Set Management** - Organize questions into sets
- **AI Question Generation** - Generate questions using Groq AI
- **User Analytics** - View user attempts and scores
- **Bulk Operations** - Multi-delete questions and sets
- **Randomization** - Questions and options shuffle on every quiz attempt

---

## 🏗️ Tech Stack

- **Frontend:** Vanilla HTML/CSS/JavaScript
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **AI:** Groq SDK (Llama 3.3)

---

## 🚀 Quick Start

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
```

**Get Groq API Key (Free):**
1. Go to https://console.groq.com/keys
2. Sign up (no credit card required)
3. Click "Create API Key"
4. Copy key (starts with `gsk_`)

### 3. Run Development Server

```bash
npm run dev
```

Admin panel opens at: `http://localhost:5001`

---

## 📋 Environment Variables

| Variable | Example | Description |
|----------|---------|-------------|
| `MONGO_URI` | `mongodb+srv://...` | MongoDB connection string |
| `GROQ_API_KEY` | `gsk_abc123...` | Groq AI API key (free) |
| `PORT` | `5001` | Server port |

---

## 🤖 AI Question Generation

### Groq AI Features

✅ **Completely FREE** - No credit card required
✅ **30 requests/min** - Very generous limits
✅ **14,400 requests/day** - More than enough
✅ **Ultra-fast** - Responses in <1 second
✅ **High quality** - Llama 3.3 70B model

### Supported Models

- **llama-3.3-70b-versatile** (default) - Best for structured output
- llama-3.1-8b-instant - Faster, smaller
- mixtral-8x7b-32768 - Good alternative

### How to Generate Questions

1. Navigate to "All Questions" page
2. Click "🤖 AI Mode"
3. Enter keywords (e.g., "javascript, programming")
4. Select quiz set
5. Specify number of questions (1-50)
6. Click "⚡ Generate Questions"
7. Review and edit if needed
8. Save to database

---

## 🌐 Deployment (Render)

### Deploy Admin Panel

1. **Create separate Web Service:**
   - Name: `quiz-app-admin`
   - Build: `npm install`
   - Start: `npm start`

2. **Environment Variables:**
   Add all variables from local `.env`

3. **Access URL:**
   `https://your-admin-panel.onrender.com`

---

## 📁 Project Structure

```
quiz-app-admin/
├── backend/
│   ├── models/
│   │   ├── questionModel.js
│   │   ├── setsModel.js
│   │   └── authModel.js
│   ├── routes/
│   │   ├── questionRoute.js
│   │   ├── setsRoute.js
│   │   └── authRoute.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── allQuestions.html
│   ├── dashboard.html
│   └── styles.css
├── package.json (root)
└── README.md
```

---

## 🔐 Admin User Detection

The system automatically identifies admin users:
- Email: `admin@gmail.com`
- Name: `admin`

Admin features in main quiz app:
- Unlimited quiz attempts
- No daily limits
- No email notifications

---

## 🧪 Testing AI Generation

**Test Prompt:**
- Keywords: `javascript, variables, functions`
- Questions: 5
- Expected: 5 unique JavaScript questions

**Verify:**
- ✅ JSON format correct
- ✅ 4 options per question
- ✅ Correct answer matches an option
- ✅ No duplicate questions

---

## 📊 Groq API Limits (Free Tier)

| Metric | Limit | Notes |
|--------|-------|-------|
| Requests/minute | 30 | Very generous |
| Requests/day | 14,400 | ~600x more than Gemini |
| Tokens/minute | 14,400 | Shared across requests |
| Cost | $0 | Forever free |

---

## 🆘 Troubleshooting

### AI Generation Fails

**Error: "Model decommissioned"**
- ✅ Update model name in code
- ✅ Check https://console.groq.com/docs/models

**Error: "Unauthorized"**
- ✅ Check `GROQ_API_KEY` in `.env`
- ✅ Restart server after changing `.env`

**Error: "Rate limit"**
- ✅ Wait 1 minute
- ✅ Reduce number of questions per request

### MongoDB Connection

**Error: "MongoNetworkError"**
- ✅ Check IP whitelist (0.0.0.0/0)
- ✅ Verify connection string
- ✅ Ensure database user exists

---

## 🔗 Useful Links

- **Groq Console:** https://console.groq.com
- **Groq Docs:** https://console.groq.com/docs
- **Model List:** https://console.groq.com/docs/models
- **MongoDB Atlas:** https://cloud.mongodb.com

---

## 📝 Notes

- Admin panel should be **password protected** in production
- Use environment variables for all sensitive data
- Never commit `.env` files to Git
- Keep Groq API key secure

---

**Last Updated:** December 10, 2024
