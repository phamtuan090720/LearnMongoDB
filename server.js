const mongoose = require('mongoose');

let url = 'mongodb+srv://admin:225879119@learnmognodb.gpvn8.mongodb.net/sample_airbnb?retryWrites=true&w=majority';

// let mongo = new MongoClient(url, { useNewUrlParser: true });
// mongo.connect((err,db)=>{
//     if (err) throw err;
//     console.log("Connect Thành Công");
// });
mongoose.connect(url,{useNewUrlParser: true }).then(
    console.log("connect Thành Công")
).catch(console.log)