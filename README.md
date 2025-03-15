# 📚 Course Selling Application

## 🚀 Overview
This is a full-stack **Course Selling Application** that enables teachers or course creators to upload courses while allowing users to browse, purchase, and track their learning journey. The platform includes authentication, secure payments, and a user-friendly interface.

## 📌 Features
- **User Authentication**: Signup, Login, Logout using JWT
- **Course Management**: View and purchase courses
- **Custom Hooks in React**: `useFetch`, `useFetchPost`
- **User Profiles & Purchase History**
- **Course Reviews**: Star rating system with dynamic filled & empty stars
- **FAQ Section**
- **Smooth Navigation**: Implemented with `useRef`
- **Secure Payments**: Integrated with **Stripe**

## 🛠️ Tech Stack
- **Frontend**: React, React Hooks (`useState`, `useEffect`, `useParams`, `useRef`), Custom Hooks (`useFetch`, `useFetchPost`), React Slider
- **Backend**: Node.js, Express.js, MongoDB, JWT Authentication, Stripe for Payments
- **Database**: MongoDB

## 📥 Installation Guide
### Prerequisites
- Node.js & npm installed
- MongoDB set up

### Clone the Repository
```bash
  git clone https://github.com/Kalpeshkumavat1/Course_selling
  cd course_front
```

### Install Dependencies
#### Frontend
```bash
cd course_front
npm install
npm start
```

#### Backend
```bash
npm install
npm start
```

## 🖥️ Frontend Implementation
### 🔹 Custom Hooks
- `useFetch`: Handles GET requests
- `useFetchPost`: Handles POST requests

### 🔹 Key Components
- **Navbar**: Smooth scrolling with `useRef`
- **Course List**: Displays all available courses
- **Course Details**: Shows course description, price, and reviews
- **FAQs**: Commonly asked questions
- **Review System**: Star ratings dynamically displayed

## 🔗 Backend API Routes
### 🔹 User Routes (`/user`)
- `POST /signup` - Register a new user
- `POST /signin` - User login
- `POST /logout` - User logout
- `GET /profile/:username` - View user profile
- `GET /purchase/:username` - View purchase history

### 🔹 Course Routes (`/course`)
- `GET /preview` - Get all courses
- `GET /preview/:id` - Get course details
- `GET /preview/payment/:id` - Get course price
- `POST /preview/purchase` - Generate payment client ID
- `POST /purchase` - Process payment via Stripe

## 📑 Database Models
- **UserModel**: Stores user details and purchase history
- **CourseModel**: Stores course details (title, description, price, ratings)
- **PurchaseModel**: Records purchase transactions

## 💳 Payment Integration
- Integrated **Stripe** for seamless and secure payments
- Users can make purchases via `course/purchase` API

## 🎯 Usage Guide
1. **Signup/Login** to the platform
2. **Browse Courses** and explore details
3. **Purchase a Course** securely via Stripe
4. **Access Purchased Courses** from the dashboard

## 🤝 Contribution
We welcome contributions! Feel free to submit a pull request.


