const express = require('express');
const router =express.Router();
router.use(express.urlencoded({extended: false}));
const signupcontroller = require('../controller/signupcontroller')

router.get('/',(req,res)=>{
    res.render('home');
})
router.get('/views/signup',(req,res)=>{
    res.render('signup')
})
router.post('/signup/adddata',(req,res)=>{
    signupcontroller.addUser(req,res)
})
module.exports= router;