const { connect } = require("./client");
const {setupInput} = require('./input')
console.log("Connectiong ...");

setupInput(connect());