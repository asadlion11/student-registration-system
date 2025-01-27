import db from '../connection/db.js';


//CRUD functions

//CRUD(Create using POST funcrion) /Create new student/Registering functions/
export const createStudent = (req, res) => {
   try {
     //Extract data from request body to server
     const {firstName, middleName, lastName, gender, address, mobileNumber, course} = req.body

     //sql query for inserting data to the database
     const sql = 'INSERT INTO students(firstName, middleName, lastName, gender, address, mobileNumber, course) values(?,?,?,?,?,?,?)'
 
     //Database queery excution
     db.query(sql, [firstName, middleName, lastName, gender, address, mobileNumber, course], (err) => {
         if(err) throw err;
         res.status(201).send('Student registered successfully');
     })
   } catch (err) {
         res.status(500).send(err.message)
   }
}


//CRUD(Read using GET function) /GET/Read all student/Retrieving function
export const getAllStudents = (req, res) => {
    try {
        const sql = 'SELECT * FROM students ORDER BY id DESC'
        db.query(sql, (err, results) => {
            if(err) throw err
            res.status(200).send(results)
        })
        
    } catch (err) {
        res.status(500).send(err.message)
    }
}


//CRUD(Read using GET function) /GET/Read student by id/Retrieving function
export const getStudent = (req, res) => {
    try {
        const sql = 'SELECT * FROM students where id = ?'
        db.query(sql,[req.params.id], (err, result) => {
            if(err) throw err
            res.status(200).send(result)
        })
        
    } catch (err) {
        res.status(500).send(err.message)
    }
}


//CRUD(Update using PUT function) /PUT/Update student by id/Updating function
export const updateStudent = (req, res) => {
    try {
        const {firstName, middleName, lastName, gender, address, mobileNumber, course} = req.body
        const sql = 'UPDATE students SET firstName = ?, middleName = ?, lastName = ?, gender = ?, address = ?, mobileNumber = ?, course = ? where id = ?'
        db.query(sql, [firstName, middleName, lastName, gender, address, mobileNumber, course, req.params.id], (err) => {
            if(err) throw err
            res.status(200).send('Student Updated')
        })
    } catch (err) {
        req.status(500).send(err.message)
    }
}

//CRUD(Delete using DELETE function) /DELETE/Delete student by id/Deleting function
export const deleteStudent = (req, res) => {
    try {
        const sql = 'DELETE FROM students where id = ?'
        db.query(sql, [req.params.id], (err) => {
            if(err) throw err
            res.status(200).send('Student deleted')
        })
    } catch (err) {
        req.body(500).send(err.message)
    }
}