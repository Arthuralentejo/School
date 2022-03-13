const sqlite = require('sqlite3').verbose()


class TurmaRepository {
    private db
    constructor() {
        this.createTable()
    }
    private connectDb(){
        this.db = new sqlite.Database('school.db', (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Connected to the SQlite database.');
        })
    }
    private closeDB(){
        this.db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Close the database connection.');
        });
    }
    createTable(){
        this.connectDb()
        let createTable = `CREATE TABLE IF NOT EXISTS alunos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            idade INTEGER,
            turma TEXT
            )`
        this.db.run(createTable)
        this.closeDB()
    }

    insert(){

    }

    getALl(){

    }

    getById(){

    }

    update(){

    }

    delete(){

    }
}