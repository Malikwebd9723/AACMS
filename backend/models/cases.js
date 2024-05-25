const mongoose = require("mongoose");

const casesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    caseTitle: {
        type: String,
        required: true,
    },
    caseType: {
        type: String,
        required: true,
    },
    caseStatus: {
        type: String,
        required: true,
    },
    judge: {
        type: String,
        required: true,
    },
    courtNumber: {
        type: String,
        required: true,
    },
    courtAction: {
        type: String,
        required: true,
    },
    totalFee: {
        type: String,
        required: true,
    },
    discount: {
        type: String,
        required: true,
    },
    paidFee: {
        type: String,
        required: true,
    },
    paidFeeDate: {
        type: Date,
        default:Date.now()
    },
    hearingDate: {
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

const Cases = mongoose.model("Cases", casesSchema);

module.exports = Cases;
