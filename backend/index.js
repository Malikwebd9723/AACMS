const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require('dotenv').config()

const app = express();
const port = 8002;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const DbConnect = process.env.MONGO_DB_PASS;
mongoose
    .connect(`mongodb+srv://developer9723usman:${DbConnect}@cluster0.lemgu3v.mongodb.net/`)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDb", err.message);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


<<<<<<< HEAD

// to verify user email
const handleSendEmail = async (email, subject, text) => {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        // Configure the email service or SMTP details here
        service: "gmail",
        auth: {
            user: "developer9723usman@gmail.com",
            pass: "trgg ptmi yfsd osks",
        },
    });

    // Compose the email message
    const mailOptions = {
        from: "HuPro",
        to: email,
        subject: subject,
        text: text,
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        console.log("Verification email sent successfully");
    } catch (error) {
        console.error("Error sending verification email:", error);
    }
};

//endpoint to register user
app.post("/register", async (req, res) => {
    try {
        const { firstname, lastname, email } = req.body;

        // Check if user already exists based on email or roll
        const existingLawyer = await Lawyer.findOne({ email })

        if (existingLawyer) {
            console.log("User already exists");
            return res.status(400).json({ message: "User already registered try another Email!" });
        } else {
            const digits = "123456789aacms";
            let password = "";

            // Generate 7 random digits
            for (let i = 0; i < 7; i++) {
                password += digits[Math.floor(Math.random() * digits.length)];
            }

            const newLawyer = await new Lawyer({ firstname, lastname, email, password });

            // Save the new user to the database
            await newLawyer.save();

            //sending email to verify user email
            await handleSendEmail(newLawyer.email, "Email Verification from AACMS", `your password for AACMS is: ${password}`);

            return res.status(201).json({ success: true, message: "Registered successfully, check your email for verification" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error. Registration failed!" });
    }
});

//endpoint to login user
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists based on email or roll
        const existingLawyer = await Lawyer.findOne({ email })

        if (existingLawyer && existingLawyer.password === password) {
            return res.status(500).json({ success: true, message: "Logged in successfully!", userId: existingLawyer._id });
        } else {
            return res.status(201).json({ message: "No user found!" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error. Faild to login!" });
    }
});

//endpoint to login user
app.post("/profileData", async (req, res) => {
    try {
        const {id} = req.body;

        // Check if user already exists based on email or roll
        const existingLawyer = await Lawyer.findOne({ _id:id })

        if (existingLawyer) {
            return res.status(500).json({ success: true,user:existingLawyer});
        } else {
            return res.status(201).json({ message: "No user found!" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error!" });
    }
});

//endpoint to login user
app.post("/updateProfile", async (req, res) => {
    try {
        const {id,firstname,lastname} = req.body;

        // Check if user already exists based on email or roll
        const existingLawyer = await Lawyer.findOne({_id:id})

        if (existingLawyer) {
            existingLawyer.firstname = firstname;
            existingLawyer.lastname = lastname;
            await existingLawyer.save();
            return res.status(500).json({ success: true,message:"Profile updated successfully!"});
        } else {
            return res.status(201).json({ message: "Faild to update profile,Try other email!" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error!" });
    }
});

//endpoint to login user
app.post("/updatePass", async (req, res) => {
    try {
        const {id,oldPass ,newPass} = req.body;

        // Check if user already exists based on email or roll
        const existingLawyer = await Lawyer.findOne({_id:id})

        if (existingLawyer && existingLawyer.password == oldPass) {
            existingLawyer.password = newPass
            await existingLawyer.save();
            return res.status(500).json({ success: true,message:"Password updated!"});
        } else {
            return res.status(201).json({ message: "Current password is incorrect!" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error!" });
    }
});
=======
>>>>>>> 5da51cdcae94827d5e1a3d8834bf90a05589c697
