const express = require('express');
const app = express();
const userRouter = require('./routers/user');
const courseRouter = require('./routers/course');
const cors = require('cors');
const MongoStore = require("connect-mongo");
const path = require('path'); // Add this for file path handling
require("dotenv").config({path:"dot.env"});
const session = require('express-session');
const authRouter = require('./Middleware/auth');
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());

// In production, we'll serve the frontend from the build files
// In development, we'll use CORS for the separate dev server
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React app's build directory
  app.use(express.static(path.join(__dirname, 'course_front/dist')));
} else {
  // Use CORS in development
  app.use(cors({
    origin: "http://localhost:5173",
    credentials: true  // Allow cookies to be sent
  }));
}

// API routes
app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/auth', authRouter);

// For any routes not matched by API routes, serve the React app
// This should come AFTER your API routes
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'course_front/dist/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
