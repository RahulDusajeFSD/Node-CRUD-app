const student = require('../src/student')

exports.findAll = function(res){

    student.findAll(function(err, student) {
        console.log('controller')

        if (err)
        res.send(err);
        console.log('res', student)
        res.send(student)


    })
}

exports.create = function(req,res)
{
    var newStudent = new student(req.body)

    if(req.body.constructor === Object && Object.keys(req.body).length === 0)
    {
    res.status(400).send({error:true, message: 'Please provide all nexessary details'})
    }
    else
    {
        student.create(newStudent, function(err, student){
            if (err)
            res.send(err);
            res.json({error:false, message: 'Student added successfully', data: student})
        
        })
    }
}

exports.findByID = function(req,res)
{
    student.findByID(req.params.id, function(err, student) {
        if (err)
        res.send(err);

        res.json(student)
    })
}

exports.update = function(req,res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){

        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }
    else{

        student.update(req.params.id, new student(req.body), function(err, student){

            if (err)
            res.send(err);
            res.json({error:false, message:'Student successfully updated'})
        })

    }

}

exports.delete = function(req, res){
    
    student.delete(req.params.id, function(err, student) {

        if (err)
        res.send(err);
        res.json({error:false, message:'Student successfully deleted'})
        
    })
}