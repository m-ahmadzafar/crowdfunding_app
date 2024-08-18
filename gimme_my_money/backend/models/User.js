const mongoose = require('mongoose');

// Define a schema for the User collection
const UserSchema = new mongoose.Schema({
    fName: { type: String, required: true },   
    lName: { type: String, required: true },   
    email: { type: String, required: true },   
    password: { type: String, required: true }, 
    phone: { type: Number, required: true }   
});

// Create a model based on the schema
module.exports = mongoose.model('User', UserSchema);
