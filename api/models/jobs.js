const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId ,
    title: {type : String, required : true},
    applicants: Number ,
    jobType: {type : String, required : true},
    salary: Number,
    views: Number,
    country: {type : String, required : true},
    author: {type : String, required : true},
    email: {type : String, required : true},
    phone: {type : String, required : true},
    content: {type : String, required : true},
    date: {type : Date, required : true},
    address: {type : String, required : true},
    socialmedialink : [String],
    overview : {type : String, required : true},
    total_employee : Number,
        
    
})

module.exports = mongoose.model('Job',jobSchema)

