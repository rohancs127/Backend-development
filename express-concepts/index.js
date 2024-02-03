const express = require('express');
const app = express();
const userRouter = require('./router/user');
//routing
app.use('/api/users', userRouter);

//app  level routing - dumping everything into single page

//for both users and allusers
app.get("/users?allUsers", (req, res)=>{
    res.json({data: [{name: "rohan", usn: 127}]});
    //res.status(201).json({data: [{name: "rohan", usn: 127}]});
    // res.status(201).json(req);
    
});

//parameters
app.get("/bookings/:from-:to", (req, res)=>{
    res.json({...req.params})
});


//constraints
// app.get("/bookings/:id(\[0-9\])", (req, res)=>{
//     res.json({...req.params})
// });

// app.get("/bookings/:id(\[A-Z\])", (req, res)=>{
//     res.json({...req.params})
// });


//middleware
//accept integer type id
// app.get("/bookings/:id", (req, res, next)=>{
//     let id = req.params.id;
//     if(parseInt(id)){
//         next();
//     }
//     else
//     res.json({ data: "need an integer"});
// },  (req, res)=>{
//     res.json({...req.params})
// });

const middleWare = function(req, res, next){
    let id = req.params.id;
    if(parseInt(id)){
        next();
    }
    else
    res.json({ data: "need an integer"});
}
app.get('/user/:id', middleWare, (req, res)=>{
    res.json({...req.params})
})
/* status codes:
200 - success */


/* Middleware
built in
app level*/

//app level middleware
 app.use(express.json()); //express.json()
 app.post('/form', (req, res)=>{
    let body = req.body;
    res.json({...body});
 })

 //middleware which checks whether an api is called
 const logger = function(req, res, next){
    console.log('new api called');
    next();
 }
 app.use(logger)
//module level - modularizing

app.listen(3000, ()=>{
    console.log('server running at http://localhost:3000');
})