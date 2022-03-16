const sqlite = require('sqlite3').verbose()
const { open } = require("sqlite")




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

    async insert(student){
        const db = await this.connectDb()
        let query = `INSERT INTO students (name,age,school_class) VALUES (?,?,?)`
        let args = [
            student.name,
            student.age,
            student.school_class
        ]
        let dbReturn =  await db.run(query,args)
        await db.close()
        return dbReturn.lastID
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
        return result ? result : false
    }

    async update(student) {
        const db = await this.connectDb()
        let query = `UPDATE students 
                        SET name = ?, age = ?, school_class = ?
                        WHERE id = ?`
        let args = [
            student.name,
            student.age,
            student.school_class,
            student.id
        ]
        // WHat if id doesnt exists?
        let dbReturn =  await db.run(query,args)
        await db.close()
        return dbReturn
    }

    async delete(id) {
        const db = await this.connectDb()
        const query = `DELETE FROM students WHERE id = ?`
        const dbReturn = await db.run(query,id)
        await db.close()
        return dbReturn
    }
}

module.exports = StudentRepository
