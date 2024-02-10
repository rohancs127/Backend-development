const express = require('express');

const app = express();

app.use(express.json());

const port = 3000;

app.get('/', ()=>{
    resizeBy.send('get is working fine');
});

app.post('/api/blogs/insert', async(req, res)=>{
    await res.send('post is working fine')
})

app.put()

app.delete

app.listen(port, ()=>{
    console.log(('Server started at port:'+ port+'...'));
})