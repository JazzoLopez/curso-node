const { Schema, model } = require('mongoose');
const teacherSchema = new Schema({
    workerNumber: {
        type: Number,
        require: true,
        unique: true
    },
    name: String,
    lastname: String,
    subject: String,
    email:{
        type: String,
        unique: true
    },
    tel: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('teacher',teacherSchema);