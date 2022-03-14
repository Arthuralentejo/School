const sqlite = require('sqlite3').verbose()
const { open } = require("sqlite")
const Student = require("../Repository/model/Student")




class StudentRepository {
    constructor() {
        this.createTable()
    }
    async connectDb () {
        return open({
            filename: 'school.db',
            driver: sqlite.Database
        })
    }
    async createTable() {
        const db = await this.connectDb()
        let createTable = `CREATE TABLE IF NOT EXISTS students
                           (
                               id           INTEGER PRIMARY KEY AUTOINCREMENT,
                               name         TEXT,
                               age          INTEGER,
                               school_class TEXT
                           )`
        await db.run(createTable)
        await db.close()
    }

    insert(student){
        this.connectDb()
        let query = `INSERT INTO students (name,age,school_class) VALUES (?,?,?)`
        let args = [
            student.name,
            student.age,
            student.schoolClass
        ]
        let dbReturn =  this.db.run(query,args,(err)=>{
            if(err){
                return err.message
            }
            return `The student ${student.name} has been inserted.`
        })
        this.closeDB()
        return dbReturn
    }

    async getAll() {
        const db = await this.connectDb()
        let students = []
        let query = `SELECT *
                     FROM students ORDER BY id`
        const rows = await db.all(query)
        rows.forEach((row)=>{
            students.push(row)
        })
        await db.close()
        return students
    }

    async getById(id){
        const db = await this.connectDb()
        let query = `SELECT *
                     FROM students WHERE id = ? ORDER BY id`
        const result = await db.get(query,id)
        await  db.close()
        return result
    }

    update() {

    }

    delete() {

    }
}

module.exports = StudentRepository
