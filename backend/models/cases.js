<<<<<<< HEAD
=======
const { type } = require("@testing-library/user-event/dist/type");
>>>>>>> 2868027d7ebda3f6a4b6cd845d1e4cd3e099208c
const mongoose = require("mongoose");

const casesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
=======
    lawyerId: {
        type: String,
        required: true,
    },
>>>>>>> 2868027d7ebda3f6a4b6cd845d1e4cd3e099208c
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
<<<<<<< HEAD
    totalCases: {
        type: String,
        required: true,
    },
    filedDate: {
        type: String,
        required: true,
    },
    judgeName: {
        type: String,
        required: true,
    },
    courtName: {
=======
    judge: {
>>>>>>> 2868027d7ebda3f6a4b6cd845d1e4cd3e099208c
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
<<<<<<< HEAD
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
        type: String,
        required: true,
=======
        type: Number,
        deafault:0
    },
    discount: {
        type:Number,
        default:0,
    },
    paidFee: {
        type:Number,
        default:0,
    },
    paidFeeDate: {
        type: Date,
        default:Date.now
>>>>>>> 2868027d7ebda3f6a4b6cd845d1e4cd3e099208c
    },
    hearingDate: {
        type: String,
        required: true,
    },
    reminderDate: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
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
=======
>>>>>>> 2868027d7ebda3f6a4b6cd845d1e4cd3e099208c
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Cases = mongoose.model("Cases", casesSchema);

<<<<<<< HEAD
module.exports = Cases;
=======
module.exports = Cases;
>>>>>>> 2868027d7ebda3f6a4b6cd845d1e4cd3e099208c
