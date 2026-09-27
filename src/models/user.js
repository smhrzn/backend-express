// //src/models/User.js
// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     name:{ type: String, required:true},
//     email:{type: String, required :true, unique:true},
//     age: {type :Number}
// },{ timestamps :true});



// const User = mongoose.model('User', UserSchema);
// module.exports = User;
// src/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose. Schema ( {
name: { type: String, required: true },
email: { type: String, required: true, unique: true }, 
age: { type: Number },
password: {type: String , required : true}
}, {timestamps: true }); //Automatically adds createdAt and updatedAt

const User = mongoose. model ('User', UserSchema) ;
module.exports = User;