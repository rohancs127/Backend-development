//nosql
/* mobile {num: 9901219577, "alternateNum": 9482382729} */

//express uses bson format to store data

const express = require('express');

const app = express();

const mongoose = require("mongoose");


app.use(express.json());

const port = 3000;

const mongoURI = "mongodb://0.0.0.0:27017/Notes";
mongoose.connect(mongoURI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error'));
db.once('open', ()=>{
    console.log('MongoDB connection successfully established..');
})

app.get('/', (req,res)=>{
    res.send('get is working fine');
});

app.post('/api/blogs/insert', async(req, res)=>{
    await res.send('post is working fine')
})

app.put()

app.delete

app.listen(port, ()=>{
    console.log(('Server started at port:'+ port+'...'));
})