const StudentRepository = require("../Repository/StudentRepository")
const repository = new StudentRepository()

class StudentController {

    async get(req, res) {

        //Verifica se existe o atributo id na URL
        if (req.query.id){
            let student = await repository.getById(req.query.id);

            //Se nenhum estudante com esse id for encontrado retornar mensagem para o Usuario
            if (!students){
                return res.status(404).json({
                    "Message": "Student not found"
                })
            }
            return res.status(200).json(student)
        }

        let students = await repository.getAll();

        //Informar ao Client caso nnhum estudante seja encontrado
        if (!students){
            return res.status(204).json({
                "Message": "No registered student yet"
            })
        }
        return res.status(200).json({"Students" : students})
    }

    async post(req, res) {
        if(!req.body.includes(name) && !req.body.includes(age) && !req.body.includes(school_class) ){
            return res.status(400).json({
                "Message": "No valid data provided"
            })
        }
        let insertedID = await repository.insert(req.body)
        res.status(201).json({
            "Message": `Student ${req.body.name} inserted with de id:  ${insertedID}`
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