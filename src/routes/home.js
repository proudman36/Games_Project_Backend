const express = require('express')
const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send('Hello from home.')
})

module.exports = router;