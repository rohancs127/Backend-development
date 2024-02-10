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
});

const noteSchema = new mongoose.Schema({
    id: String,
    blogTitle: String,
    blogContent: String,
    authorld: String
})

app.get('/getAllBlogs', async(req,res)=>{
    // res.send('get is working fine');
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        console.error('error fetching data',error );
        res.status(500).json({error: 'Internal server error'})
    }
});

app.post('/api/blogs/insert', async(req, res)=>{
    // await res.send('post is working fine')
    try {
        const {id, blogTitle, blogContent, authorId} = req.body;
        let saved;
        if (req.body){
            const newNote = new Note({id, blogTitle, blogContent, authorId});
            saved = await newNote.save();
        }
        res.send(saved);
    } catch (error) {
        console.error('Error fetching Notes', error);
        res.status(500).json({error: 'Internal server error'});
    }
})

// app.put()

// app.delete

app.listen(port, ()=>{
    console.log(('Server started at port:'+ port+'...'));
})

