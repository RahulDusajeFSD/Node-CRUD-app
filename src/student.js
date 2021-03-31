
var connection = require('../config/db.config')
var student = function(student)
{
   this.id = student.id
   this.marks =student.marks
   this.name = student.name
   this.num_of_subjects= student.num_of_subjects 
}

student.create = function (newStudent,result)
{
    connection.query('Insert into student set ?', newStudent, function(err,res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else {
        console.log(res.id)
        result(null, res.id)
          }
    })
}

student.findByID= function(id, result)
{
    connection.query('Select * from student where id = ?', id, function(err,res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else {
        result(null, res)
          }
    })
}

student.findAll = function(result)
{
    connection.query('select * from student', function(err,res)
    {
        if(err) {
            console.log("error: ", err);
            result(null, err);
          }
          else
          {
        result(null, res)
          }
    })
}

student.update = function (id, student, result)
{
    connection.query('update student set marks = ?, name= ?, num_of_subjects= ? where id =?',
    
    [student.marks,  student.name,  student.num_of_subjects , id], function(err, res)
    {
        if(err) {
            console.log("error: ", err);
            result(null, err);
          }else{
        result(null, res)
          }
    }
    )
}

student.delete = function(id,result)
{
    connection.query('delete from student where id = ?', [id], function(err,res){

        if(err) {
            console.log("error: ", err);
            result(null, err);
          }
          else{
        result(null, res) }
    })
}

module.exports = student