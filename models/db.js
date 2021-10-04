const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://geeeen:14324NANAY@cluster0.4aege.mongodb.net/EmployeeDB?retryWrites=true&w=majority', {useNewUrlParser: true }, (err)=> 
{ 
if (!err) { console.log('MongoDb Connection Succesful') }
else {console.log('Error in db connection' + err )};
});