const express=require('express')
const app=express();
const userRouter=require('./routers/user')
const courseRouter=require('./routers/course')
const cors=require('cors');
const MongoStore = require("connect-mongo");
require("dotenv").config({path:"dot.env"});
const session=require('express-session')
const authRouter = require('./Middleware/auth');
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true  // ✅ Allow cookies to be sent
}));
// app.use(session({
//     secret: process.env.SECRET_KEY, // Use a strong secret
//     resave: false,
//     saveUninitialized: true,
//     store: MongoStore.create({
//         mongoUrl: process.env.MONGO_URI, // MongoDB connection URL
//         collectionName: "sessions", // Name of the collection to store sessions
//         ttl: 60 * 60, // Session expires after 1 hour
//     }),
//     cookie: { secure: false } // Set to true if using HTTPS
// }));
// // Make sure this comes BEFORE your route definitions
// app.use((req, res, next) => {
//   console.log("Session debug:", {
//     id: req.session.id,
//     firstname: req.session.firstname,
//     email: req.session.email
//   });
//   next();
// });
  
app.use('/user',userRouter);
app.use('/course',courseRouter);
app.use('/auth',authRouter);
// app.use("/auth/google",googleauth)


app.listen(5000,()=>{
    console.log(`http://127.0.1:5000`)
})
