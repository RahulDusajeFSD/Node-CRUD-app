const express = require('express')

const router = express.Router()

const studentController = require('../src/controller')

router.get('/getAllStudents', studentController.findAll)

router.post('/addStudent', studentController.create)

router.get('/findByID/:id', studentController.findByID)

router.put('/updateStudent/:id', studentController.update)

router.delete('/deleteStudent/:id', studentController.delete)

module.exports = router