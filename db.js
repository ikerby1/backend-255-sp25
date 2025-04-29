const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://sdev255ik:mongoose255@cluster0.ogoxavs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{useNewUrlParser: true})

module.exports = mongoose