const StudentRepository = require("../Repository/StudentRepository")
class StudentController {
    constructor() {
        this.repository = new StudentRepository()
    }
    get (req,res){

        res.send("Ola mundo")
    }
    post(req,res){

    }
    put(req,res){

    }
    delete(req,res){

    }

}

module.exports = StudentController