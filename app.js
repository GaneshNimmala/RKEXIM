const express = require("express");

const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
// const authRoutes = require('./routes/auth')
// const sequelize = require('./config/database');
const bcrypt = require("bcrypt");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
app.use(express.json());
dotenv.config();

app.use(
  session({
    secret: "apple",
    resave: true,
    saveUninitialized: true,
  })
);

// Load models
const User = require("./models/User");
// Use auth routes

app.use(flash());
// Routes
const indexRouter = require("./routes/index");
const contactusRouter = require("./routes/contactus");

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views"); // Specify the views directory

app.use("/", indexRouter);
app.use("/contactus", contactusRouter);
// app.use('/auth', authRoutes); // Authentication routes

// Add more route middleware as needed...

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!", { err });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
