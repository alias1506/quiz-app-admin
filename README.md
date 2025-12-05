# 🎯 Quiz Application - Admin Panel

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![AI Powered](https://img.shields.io/badge/AI-Gemini%202.0-orange.svg)

**Intelligent admin dashboard for managing quiz questions with AI-powered generation**

[Features](#features) • [Tech Stack](#tech-stack) • [Installation](#installation) • [AI Integration](#ai-integration) • [API Documentation](#api-documentation)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [AI Integration](#ai-integration)
- [API Documentation](#api-documentation)
- [Security](#security)
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

## 📦 Installation

### Prerequisites

- **Node.js** v16.0.0 or higher
- **MongoDB** v4.4 or higher
- **npm** or **yarn**
- **Google Gemini API Key** (for AI features)

### Step-by-Step Setup

#### 1. Clone Repository

```bash
git clone <repository-url>
cd quiz-app-admin
```

#### 2. Install Backend Dependencies

```bash
cd backend
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

#### 4. Get Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with Google account
3. Click "Create API Key"
4. Copy and paste into `.env` file

#### 5. Start Services

```bash
# Start MongoDB
mongod --dbpath=/path/to/data

# Start backend (from backend directory)
npm start

# Or use nodemon for development
npm run start
```

#### 6. Access Admin Panel

```
http://localhost:5001
```

---

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Backend server port | No | 5001 |
| `MONGO_URI` | MongoDB connection URL | Yes | - |
| `GEMINI_API_KEY` | Google Gemini API key | Yes (for AI) | - |
| `NODE_ENV` | Environment mode | No | development |

### Gemini API Configuration

The application uses Google's Gemini 2.0 Flash model:

```javascript
Model: gemini-2.0-flash
Features:
- Fast response time
- High-quality question generation
- Free tier available
- JSON output formatting
- Multi-turn conversations
```

---

## 🚀 Usage

### Admin Workflow

#### 1. Login
```
Navigate to http://localhost:5001
↓
Enter admin credentials
↓
Access dashboard
```

#### 2. Manual Question Creation
```
Dashboard → Add New Question
↓
Fill question details
  - Question text
  - Options (comma or || separated)
  - Correct answer
  - Select or create set
↓
Submit → Question saved
```

#### 3. AI Question Generation 🤖
```
Click "AI Mode" button
↓
Generate Questions Tab:
  - Enter keywords (e.g., "JavaScript, Arrays")
  - Select or create set
  - Choose number of questions (1-50)
↓
Click "Generate Questions"
↓
Questions automatically:
  - Generated by AI
  - Checked for duplicates
  - Saved to database
  - Displayed in real-time (1/5, 2/5...)
↓
View in "Generated Questions" tab
  - Edit any question
  - Delete unwanted questions
  - Clear view (questions stay in DB)
```

#### 4. Set Management
```
Dashboard → Show Sets
↓
View all sets with question counts
↓
Operations:
  - Edit set name
  - Delete set
  - Bulk delete multiple sets
↓
Active Set Management:
  - Select from dropdown
  - Must have >5 questions
  - Only one active at a time
```

#### 5. Question Management
```
Dashboard → Questions Table
↓
Filter Options:
  - Show All
  - Active Set Only
  - By Specific Set
↓
Bulk Operations:
  - Select multiple questions
  - Delete selected
  - View count of selected
↓
Individual Actions:
  - Edit question
  - Delete question
  - View question details
```

---

## 🤖 AI Integration

### Gemini AI Question Generation

#### How It Works

```javascript
1. User Input
   └─> Keywords: "JavaScript, Functions, Closures"
   └─> Set: "JavaScript Basics"
   └─> Count: 5 questions

2. AI Processing
   └─> Prompt engineering with existing questions
   └─> Gemini 2.0 Flash model processes request
   └─> Returns JSON-formatted questions

3. Duplicate Detection
   └─> Compare with existing questions (case-insensitive)
   └─> Regenerate duplicates automatically
   └─> Up to 5 retry attempts

4. Database Storage
   └─> Each question validated
   └─> Saved individually to MongoDB
   └─> Real-time progress updates

5. UI Updates
   └─> Show "1/5 Generated" → "2/5 Generated" ...
   └─> Display questions incrementally
   └─> Enable edit/delete actions
```

#### AI Prompt Structure

```javascript
const prompt = `Generate ${numQuestions} multiple choice quiz questions based on these keywords: ${keywords}

IMPORTANT: Do NOT generate questions similar to these existing questions:
- ${existingQuestions}

Generate COMPLETELY NEW and UNIQUE questions that are DIFFERENT from the above.

For each question, provide:
1. A clear, concise question
2. Exactly 4 options
3. Mark the correct answer

Format your response as a JSON array with this structure:
[
  {
    "question": "Question text here?",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "correctAnswer": "The exact text of the correct option"
  }
]

Important:
- Generate exactly ${numQuestions} questions
- Each question must have exactly 4 options
- The correctAnswer must match one of the options exactly
- Make questions clear and educational
- Return ONLY the JSON array, no other text`;
```

#### Duplicate Detection Algorithm

```javascript
// Step 1: Fetch existing questions from database
const existingQuestions = await Question.find({ set: setId })
  .select('question');

// Step 2: Case-insensitive comparison
const existingQuestionsLower = existingQuestions
  .map(q => q.question.toLowerCase().trim());

// Step 3: Filter duplicates
const uniqueQuestions = generatedQuestions.filter(q => {
  const questionLower = q.question.toLowerCase().trim();
  return !existingQuestionsLower.includes(questionLower);
});

// Step 4: Regenerate if duplicates found
if (uniqueQuestions.length < numQuestions) {
  const needed = numQuestions - uniqueQuestions.length;
  // Regenerate 'needed' number of questions
  // Include both existing AND newly generated questions in prompt
  // Retry up to 5 times
}
```

#### Response Handling

```javascript
// Clean AI response (handles markdown code blocks)
let jsonText = text.trim();
if (jsonText.startsWith('```json')) {
  jsonText = jsonText.replace(/```json\n?/g, '')
                    .replace(/```\n?/g, '');
}

// Parse JSON
const questions = JSON.parse(jsonText);

// Validate structure
questions.forEach(q => {
  if (!q.question || !q.options || !q.correctAnswer) {
    throw new Error('Invalid question structure');
  }
  if (q.options.length !== 4) {
    throw new Error('Each question must have exactly 4 options');
  }
  if (!q.options.includes(q.correctAnswer)) {
    throw new Error('Correct answer must be one of the options');
  }
});
```

---

## 📚 API Documentation

### Base URL
```
http://localhost:5001/api
```

### Authentication Endpoints

#### Admin Login
```http
POST /api/users/login
Content-Type: application/json

{
  "userId": "admin",
  "password": "admin123"
}

Response: 200 OK
{
  "message": "Login successful",
  "user": {
    "userId": "admin",
    "name": "Administrator",
    "role": "admin"
  }
}
```

### Question Endpoints

#### Get All Questions
```http
GET /api/questions

Response: 200 OK
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "question": "What is the capital of France?",
    "options": ["London", "Berlin", "Paris", "Madrid"],
    "correctAnswer": "Paris",
    "set": {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Geography",
      "isActive": true
    },
    "createdAt": "2025-01-01T00:00:00.000Z"
  }
]
```

#### Create Question
```http
POST /api/questions
Content-Type: application/json

{
  "question": "What is 2+2?",
  "options": ["2", "3", "4", "5"],
  "correctAnswer": "4",
  "set": "507f1f77bcf86cd799439012"
}

Response: 201 Created
{
  "message": "Question added",
  "question": {...}
}
```

#### AI Generate Questions 🤖
```http
POST /api/questions/generate-ai
Content-Type: application/json

{
  "keywords": "JavaScript, Functions, Closures",
  "setId": "507f1f77bcf86cd799439012",
  "numQuestions": 5
}

Response: 200 OK
{
  "success": true,
  "questions": [
    {
      "question": "What is a closure in JavaScript?",
      "options": [...],
      "correctAnswer": "...",
      "set": "JavaScript Basics",
      "setId": "507f1f77bcf86cd799439012",
      "setInfo": {...}
    }
  ],
  "count": 5
}
```

#### Update Question
```http
PUT /api/questions/:id
Content-Type: application/json

{
  "question": "Updated question text",
  "options": ["A", "B", "C", "D"],
  "correctAnswer": "C",
  "set": "507f1f77bcf86cd799439012"
}

Response: 200 OK
{
  "message": "Question updated",
  "question": {...}
}
```

#### Delete Question
```http
DELETE /api/questions/:id

Response: 200 OK
{
  "message": "Question deleted",
  "question": {...}
}
```

### Set Endpoints

#### Get All Sets
```http
GET /api/sets

Response: 200 OK
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Geography",
    "isActive": true,
    "createdAt": "2025-01-01T00:00:00.000Z"
  }
]
```

#### Create Set
```http
POST /api/sets
Content-Type: application/json

{
  "name": "History"
}

Response: 201 Created
{
  "_id": "507f1f77bcf86cd799439013",
  "name": "History",
  "isActive": false
}
```

#### Activate Set
```http
PUT /api/sets/:id/activate

Response: 200 OK
{
  "message": "Set activated successfully",
  "set": {...}
}
```

#### Deactivate All Sets
```http
PUT /api/sets/deactivate

Response: 200 OK
{
  "message": "All sets deactivated"
}
```

#### Delete Set
```http
DELETE /api/sets/:id

Response: 200 OK
{
  "message": "Set deleted",
  "set": {...}
}
```

---

## 🔒 Security

### Authentication
- Session-based authentication
- Secure password hashing
- Session timeout after inactivity
- Protected API endpoints

### Data Validation
- Input sanitization
- Mongoose schema validation
- Required field enforcement
- Type checking

### Session Management
```javascript
// Client-side session handling
sessionManager.createSession(userId, sessionId);
sessionManager.checkSession();
sessionManager.updateLastActivity();
sessionManager.logout();
```

---

## 🧪 Testing

### Manual Testing Checklist

#### Question Management
- [ ] Create question manually
- [ ] Edit existing question
- [ ] Delete single question
- [ ] Bulk delete questions
- [ ] Filter by set
- [ ] Pagination works correctly

#### AI Generation
- [ ] Generate 5 questions
- [ ] Generate 1 question
- [ ] Generate 50 questions (max)
- [ ] Duplicate detection works
- [ ] Progress counter updates
- [ ] Questions saved to database
- [ ] Edit generated question
- [ ] Delete generated question
- [ ] Clear view functionality

#### Set Management
- [ ] Create new set
- [ ] Edit set name
- [ ] Delete set
- [ ] Activate set (>5 questions)
- [ ] Activate set (<5 questions - should fail)
- [ ] Bulk delete sets
- [ ] One active set at a time

---

## 🐛 Troubleshooting

### Common Issues

#### AI Generation Fails
```
Error: "Failed to generate questions"

Solutions:
1. Check GEMINI_API_KEY in .env
2. Verify API key is valid
3. Check internet connection
4. Check Gemini API quota
5. Review backend console logs
```

#### No Questions Generated
```
Problem: AI generates 0 questions

Causes:
- All generated questions are duplicates
- Too specific keywords
- Set has too many similar questions

Solutions:
- Use different/broader keywords
- Try fewer questions at once
- Check existing questions in set
```

#### Cannot Activate Set
```
Error: "Set doesn't have enough questions"

Solution:
- Set must have MORE than 5 questions
- Add more questions to the set
- Check question count in Show Sets modal
```

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
