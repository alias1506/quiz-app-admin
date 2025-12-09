# Quiz Admin Panel

Admin dashboard for managing the Quiz Application.

## 🚀 Deployment (Render)

1. **Push code** to GitHub
2. **Create New Web Service** on Render
3. Connect your repository (`quiz-app-admin`)
4. **Settings:**
   - **Build Command:** `npm run render-build`
   - **Start Command:** `npm start`
5. **Environment Variables:**
   - `MONGO_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Same secret as the main app
   - `NODE_ENV`: `production`

## 📁 Project Structure

```
quiz-app-admin/
├── backend/            # Express Server
│   ├── routes/
│   ├── models/
│   └── server.js       # Entry point
├── frontend/           # Static HTML/JS Dashboard
│   ├── index.html
│   ├── dashboard.html
│   └── assets/
└── package.json        # Root config for Render
```

## 🛠️ Local Development

1. `cd backend`
2. `npm install`
3. `node server.js`
4. Visit `http://localhost:5001`
