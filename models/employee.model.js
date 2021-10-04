const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        String: 'This feild is Required'

    },
    email: {
        type: String,
        String: 'This feild is Required'
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    },

});


mongoose.model('Employee', employeeSchema);