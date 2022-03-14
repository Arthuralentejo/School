const StudentRepository = require("../Repository/StudentRepository")
const Student = require('../Repository/model/Student')
const repository = new StudentRepository()

class StudentController {
    constructor() {
    }

    get(req, res) {
        let students = repository.getALl();
        res.status(200).json({
            "students": students
        })
    }

    post(req, res) {
        let {name, age, school_class} = req.body
        let student = new Student(name, age, school_class)

        repository.insert(student)
        res.status(201).json({
            "Message": ret
        })
    }

    put(req, res) {

    }

    delete(req, res) {

    }

}

module.exports = StudentController