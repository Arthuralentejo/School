const sqlite = require('sqlite3').verbose()

class StudentRepository {
    db;

    constructor() {
        this.createTable()
    }

    connectDb() {
        this.db = new sqlite.Database('school.db', (err) => {
            if (err) {
                return console.error(err.message);
            }
        })
    }

    closeDB() {
        this.db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
        });
    }

    createTable() {
        this.connectDb()
        let createTable = `CREATE TABLE IF NOT EXISTS students
                           (
                               id           INTEGER PRIMARY KEY AUTOINCREMENT,
                               name         TEXT,
                               age          INTEGER,
                               school_class TEXT
                           )`
        this.db.run(createTable)
        this.closeDB()
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

    getALl() {
        this.connectDb()
        let query = `SELECT *
                     FROM students`
        let students = this.db.all(query, [], (err, rows) => {
            if (err) {
                return err.message
            }
        });

        console.log(students)

        this.closeDB()
        return students
    }

    getById(){

    }

    update() {

    }

    delete() {

    }
}

module.exports = StudentRepository
