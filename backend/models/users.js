const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
    fullname: {
=======
    lawyer: {
        type: String,
        required: true,
    },
    name: {
>>>>>>> 2868027d7ebda3f6a4b6cd845d1e4cd3e099208c
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
<<<<<<< HEAD
        unique: true,
=======
>>>>>>> 2868027d7ebda3f6a4b6cd845d1e4cd3e099208c
    },
    cnic: {
        type: String,
        unique: true,
<<<<<<< HEAD
    },
    contact: {
=======
        unique: true,
    },
    phone: {
>>>>>>> 2868027d7ebda3f6a4b6cd845d1e4cd3e099208c
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
=======
    totalCases:{
        type:Number,
        default:0,
    },
>>>>>>> 2868027d7ebda3f6a4b6cd845d1e4cd3e099208c
    //   password: {
    //     type: String,
    //     default: "",
    //   },
    //   dutyPlace: {
    //     type: String,
    //     default: "",
    //   },
    //   lastattendance: {
    //     type: Array,
    //     default:[{status:"",date:""}]
    //   },
    //   attendance: {
    //     type: Array,
    //     default:[{status:"",date:""}]
    //   },
    //   checkIn:{
    //     type:Array,
    //     default:[{date:"",latitude:"",longitude:""}]
    //   },
    //   checkOut:{
    //     type:Array,
    //     default:[{date:"",latitude:"",longitude:""}]
    //   },
    //   emailVerified: {
    //     type: Boolean,
    //     default: false,
    //   },
    //   userVerified: {
    //     type: Boolean,
    //     default: false,
    //   },
    //   verificationToken: {
    //     type: String,
    //     default: "",
    //   },

    //    orders: [
    //        {
    //          type: mongoose.Schema.Types.ObjectId,
    //          ref: "Order",
    //        },
    //    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User