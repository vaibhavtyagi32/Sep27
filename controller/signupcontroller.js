const bcrypt=require('bcrypt');
const Student = require('../models/data');
const saltRound=10;
async function addUser(req, res) {
    try {
        console.log(req.body);
        let student = new Student(req.body);
        let password=bcrypt.hashSync(req.body.pass,saltRound);
        student.studentType=2;
        student.pass=password;
        console.log(student);
        await student.save();
        res.redirect("/");
    } catch (error) {
        console.log('ERROR');
    }
}
module.exports={
    addUser 
}