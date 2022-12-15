import express from'express';
const employee = express.Router();
import { postEmployees, deleteEmployees, putEmployees, patchEmployees,
     getEmployees, getEmployeesbyID, getEmployeesbyName } from '../controllers/employee.controller.js';


employee.post('/', postEmployees);

employee.delete('/:id([0-9]{1,3})', deleteEmployees);

employee.put('/:id([0-9]{1,3})', putEmployees);


employee.patch('/:id([0-9]{1,3})', patchEmployees);

employee.get('/', getEmployees);

employee.get('/:id([0-9]{1,3})', getEmployeesbyID);

employee.get('/:name([A-Za-z]+)', getEmployeesbyName)

export default employee