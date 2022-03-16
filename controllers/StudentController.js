const StudentRepository = require("../Repository/StudentRepository")
const repository = new StudentRepository()

class StudentController {

    async get(req, res) {

        //Verifica se zexiste o atributo id na URL
        if (req.query.id){
            const student = await repository.getById(req.query.id);
            return res.status(200).json(student)
        }

        let students = await repository.getAll();
        return res.status(200).json({"Students" : students})
    }

    async post(req, res) {
        const student = {
            name: req.body.name,
            age: req.body.age,
            shcool_class: req.body.school_classb
        }
        let insertedID = await repository.insert(student)
        res.status(201).json({
            "Message": `Student ${student.name} inserted with de id:  ${insertedID}`
        })
    }

    async put(req, res) {
        let student = {
            id: req.params.id,
            name: req.body.name,
            age: req.body.age,
            school_class: req.body.school_class
        }
        let ret = await repository.update(student)
        res.status(200).json({
            "Message" : ret
        })
    }

    async delete(req, res) {
        const id = req.params.id
        let deletedID = await repository.delete(id)
        res.status(200).json({
            "Message" : deletedID
        })
    }

}

module.exports = StudentController