const mongoose = require('mongoose')
const opts = { toJSON: { virtuals: true } };
const UsersSchema = new mongoose.Schema(
    {
        username:{type: String,required: true},

        firstName:{type:String, required:true},

        lastName:{type:String, required:true},

        email:{type: String,required:true},

        password:{type: String,required:true},

        avatar:{type:String},

        phoneNumber:{type:String},

        address:{type:String},

        dateCreated: {
            type: Date,
            default: Date.now
        }
    }
, opts)
const UsersModel = new mongoose.model('users', UsersSchema)
module.exports = UsersModel
