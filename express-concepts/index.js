const express = require('express');
const app = express();

//routing
//app  level routing - dumping everything into single page
app.get('/allUsers', (req, res)=>{
    res.json({data: [{name: "rohan", usn: 127}]});
    //res.status(201).json({data: [{name: "rohan", usn: 127}]});
    // res.status(201).json(req);
    
});
/* status codes:
200 - success */

//module level - modularizing

app.listen(3000, ()=>{
    console.log('server running at http://localhost:3000');
})