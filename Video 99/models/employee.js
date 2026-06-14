//This is the model in which the data will be stored in our databse.
//models are created in a js file.
const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean
});

const employee = mongoose.model('employee', employeeSchema);
module.exports = employee //used to export this file into server.js