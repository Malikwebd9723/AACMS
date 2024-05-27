const mongoose = require("mongoose");

const lawyerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        default:""
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

const Lawyer = mongoose.model("Lawyer", lawyerSchema);

module.exports = Lawyer;