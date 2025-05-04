const db = require("../db")

// Create a model from the schema
const User = db.model("User",{
    username: {type: String, reequired: true},
    password: {type: String, reequired: true},
    status: String
})

module.exports = User;