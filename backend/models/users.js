const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    lawyer: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    cnic: {
        type: String,
        unique: true,
    },
    contact: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
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