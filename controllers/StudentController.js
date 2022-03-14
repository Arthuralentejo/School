const StudentRepository = require("../Repository/StudentRepository")
const Student = require('../Repository/model/Student')
const repository = new StudentRepository()

class StudentController {
    constructor() {
    }

    async get(req, res) {
        if (req.query.id){
            let student = await repository.getById(req.query.id);
            return res.status(200).json(student)
        }
        console.log("não")
        let students = await repository.getAll();
        res.status(200).json({"Students" : students})
    }

    post(req, res) {
        let {name, age, school_class} = req.body
        let student = new Student(name, age, school_class)
        let ret = repository.insert(student)
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