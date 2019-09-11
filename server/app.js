const express = require('express')
const graphHTTP = require('express-graphql')
const app = express();
const schema = require('./schema/schema')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/user' , {
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false

});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connectionerror'));
app.use('/graphql' , graphHTTP({
 schema,
 graphiql : true
}))
let port = 4000;

app.listen(port, ()=> {
    console.log("you are running on port " +port)
})