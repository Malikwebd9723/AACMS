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



const Lawyer = require("./models/lawyer");
const User = require("./models/users");
const Case = require("./models/cases");
const { Cases } = require("@mui/icons-material");

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

app.post("/sendReminder", async (req, res) => {
    try {
        const { date } = req.body;
        const matchCase = await Case.find({ reminderDate: date });
        const matchUser = await User.find({ _id: matchCase.map((e) => e.userId) });
        await matchUser.map((e)=>{
            handleSendEmail(e.email, "Reminder by Lawyer",`Hy dear ${e.name} we remind you for your hearing.
            For more detail contact with your lawyer.
            Thanks!`)
        })
        return res.status(200).json({ success:true,users: matchUser })
    } catch (error) {
        console.log(error.message);
    }
})
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
        const { id } = req.body;

        // Check if user already exists based on email or roll
        const existingLawyer = await Lawyer.findOne({ _id: id })

        if (existingLawyer) {
            return res.status(500).json({ success: true, user: existingLawyer });
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
        const { id, firstname, lastname } = req.body;

        // Check if user already exists based on email or roll
        const existingLawyer = await Lawyer.findOne({ _id: id })

        if (existingLawyer) {
            existingLawyer.firstname = firstname;
            existingLawyer.lastname = lastname;
            await existingLawyer.save();
            return res.status(500).json({ success: true, message: "Profile updated successfully!" });
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
        const { id, oldPass, newPass } = req.body;

        // Check if user already exists based on email or roll
        const existingLawyer = await Lawyer.findOne({ _id: id })

        if (existingLawyer && existingLawyer.password == oldPass) {
            existingLawyer.password = newPass
            await existingLawyer.save();
            return res.status(500).json({ success: true, message: "Password updated!" });
        } else {
            return res.status(201).json({ message: "Current password is incorrect!" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error!" });
    }
});



//endpoint to register user
app.post("/registerClient", async (req, res) => {
    try {
        const { lawyer, name, email, address, cnic, phone } = req.body;

        // Check if user already exists based on email or roll
        const existingUser = await User.findOne({ cnic })

        if (existingUser) {
            return res.status(400).json({ message: "User already registered with this CNIC!" });
        } else {
            const newUser = await new User({ lawyer, name, email, address, cnic, phone });

            // Save the new user to the database
            newUser.save();

            return res.status(201).json({ success: true, message: "User registered successfully!" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error. Registration failed!" });
    }
});

//endpoint to update user
app.post("/updateClient", async (req, res) => {
    try {
        const { id, name, email, address, phone } = req.body;

        // Check if user already exists based on email or roll
        const existingUser = await User.findOne({ _id: id })

        if (!existingUser) {
            return res.status(400).json({ message: "No user!" });
        } else {
            existingUser.name = name
            existingUser.email = email
            existingUser.address = address
            existingUser.phone = phone

            // Save the new user to the database
            await existingUser.save();

            return res.status(201).json({ success: true, message: "User updated successfully!" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error!" });
    }
});

//endpoint to get register user
app.post("/getClients", async (req, res) => {
    try {
        const { lawyerId } = req.body;

        const users = await User.find({ lawyer: lawyerId })

        if (users) {
            return res.status(200).json({ success: true, clients: users });
        } else {
            return res.status(400).json({ message: "No clients found!" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error. Registration failed!" });
    }
});

//endpoint to get register user
app.post("/addRecord", async (req, res) => {
    try {
        const { userId, lawyerId, judge, courtNumber, courtAction, caseTitle, caseStatus, caseType, totalFee, discount, paidFee, hearingDate, reminderDate } = req.body;
        const user = await User.findOne({ _id: userId })

        if (user) {
            user.totalCases = user.totalCases + 1;
            await user.save();
            const newRecord = await new Case({ userId, lawyerId, judge, courtNumber, courtAction, caseTitle, caseStatus, caseType, totalFee, discount, paidFee, hearingDate, reminderDate });
            await newRecord.save();
            return res.status(201).json({ success: true, message: "case field" })
        } else {
            return res.status(400).json({ message: "No clients found!" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error!" });
    }
});

//endpoint to get register user
app.post("/updateRecord", async (req, res) => {
    try {
        const { id, judge, courtNumber, courtAction, caseTitle, caseStatus, caseType, hearingDate, reminderDate } = req.body;
        const item = await Case.findOne({_id:id})
        if (item) {
            item.judge = judge;
            item.courtNumber=courtNumber;
            item.courtAction = courtAction
            item.caseTitle=caseTitle
            item.caseStatus = caseStatus
            item.caseType=caseType
            item.hearingDate = hearingDate
            item.reminderDate = reminderDate
            await item.save();
            return res.status(201).json({ success: true, message: "record updated" })
        } else {
            return res.status(400).json({ message: "No record found!" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error!" });
    }
});

//endpoint to get register user
app.delete("/deleteRecord", async (req, res) => {
    try {
        const { id } = req.body;
        await Case.deleteOne({ _id: id })
        return res.status(200).json({ success: true, message: "Deleted successfully!" });
    } catch (error) {
        return res.status(500).json({ message: "Server Error!" });
    }
});

//endpoint to get register user
app.post("/getCases", async (req, res) => {
    try {
        const { lawyerId } = req.body;

        const cases = await Case.find({ lawyerId })

        if (cases) {
            return res.status(200).json({ success: true, cases });
        } else {
            return res.status(400).json({ message: "No clients found!" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error. Registration failed!" });
    }
});


//endpoint to get register user
app.delete("/deleteClient", async (req, res) => {
    try {
        const { id } = req.body;

        await User.deleteOne({ _id: id })
        await Case.deleteMany({ userId: id })
        return res.status(200).json({ success: true, message: "Deleted successfully!" });
    } catch (error) {
        return res.status(500).json({ message: "Server Error!" });
    }
});


//endpoint to add fee
app.post("/addFee", async (req, res) => {
    try {
        const { id, fee } = req.body;

        const existingCase = await Case.findOne({ _id: id });
        if (existingCase && existingCase.totalFee >= existingCase.paidFee + existingCase.discount + fee) {
            existingCase.paidFee = existingCase.paidFee + fee
            existingCase.paidFeeDate = Date.now()
            await existingCase.save()
            return res.status(200).json({ success: true });
        }
        else {
            return res.status(400).json({ message: "No dues left!" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});