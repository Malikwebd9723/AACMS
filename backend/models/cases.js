const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const casesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    lawyerId: {
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
    },
    hearingDate: {
        type: String,
        required: true,
    },
    reminderDate: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Cases = mongoose.model("Cases", casesSchema);

module.exports = Cases;
