const express = require('express');
const router = express.Router();

router.get("/login", (req, res)=>{
    res.json({"data": "inside router"});
})

// const verify = function(req, res, next) {
//     let body = req.body;
//     if("email" in body){
//         next();
//     }
//     else{
//         res.json({"data": "email not found"})
//     }
// }

// router.use(verify);

// router.post("/login", verify, (req, res)=>{
//     res.json({"data": "inside router"});
// })

module.exports = router;