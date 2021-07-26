const router = require('express').Router();

router.get('/first-function' , (req,res) => {
    let { a,b,c,d } = req.query

    let response = {}

    if(a == true) {
        response.a= a
    }
    if (b == true) {
        response.b= b
    } 
    if(c == true) {
        response.c= c
    }
    if (d == true) {
        response.d= d
    }
   res.status(200).json(response)
    
});


router.get('/second-function' , (req,res) => {
    let {queryString} = req.query
    let response = {}

    response.data = queryString.split('').reverse().join('')

    res.status(200).json(response)
});


module.exports = router;