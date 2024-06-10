const { Schema, model } = require('mongoose');
const teacherSchema = new Schema({
    employeenumber: {
        type: Number,
        require: true,
        unique: true
    },
    name: String,
    lastname: String,
    profession:String,
    area:String,
    salario:Number,
    email:{   //mio
        type: String,
        unique: true
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('teacher',teacherSchema);