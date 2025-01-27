import express from 'express';
import { createStudent, deleteStudent, getAllStudents, getStudent, updateStudent } from "../controllers/studentController.js";

const router = express.Router();

//create a new student
router.post('/new-student', createStudent);

//read all students
router.get('/students', getAllStudents);

//read one student
router.use('/student/:id', getStudent);

//update student
router.put('/update-student/:id', updateStudent);

//delete student
router.delete('/delete-student/:id', deleteStudent);

export default router;