// //src/models/user.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name:{ type: String, required:true},
//     email:{type: String, required :true, unique:true},
//     age: {type :Number}
// },{ timestamps :true});



// const User = mongoose.model('user', userSchema);
// module.exports = user;
// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose. Schema ( {
name: { type: String, required: true },
email: { type: String, required: true, unique: true }, 
age: { type: Number }
}, {timestamps: true }); //Automatically adds createdAt and updatedAt

const User = mongoose. model ('User', userSchema) ;
module.exports = User;