const express = require('express');
const employee = express.Router();
const db = require('../config/database');

employee.post('/', async(req, res, next) => {
    const {name, last_name, phone, email, addres} = req.body;

    if(name && last_name && phone && email && addres) {
        let query = "INSERT INTO employees(name, last_name, phone, email, addres)";
        query += ` VALUES ('${name}', '${last_name}', '${phone}', '${email}', '${addres}')`;

        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(201).json({code:200, message:'Empleado insertado correctamente'})
        }
        return res.status(500).json({code:500, message:'Ocurrio un error'})
    }
    return res.status(500).json({code:500, message:'Campos incompletos'})

});

employee.delete('/:id([0-9]{1,3})', async(req, res, next) => {
    const query = `DELETE FROM employees WHERE id=${req.params.id}`;
    const rows = await db.query(query);
    if(rows.affectedRows == 1){
        return res.status(200).json({code:200, message:'Empleado borrado correctamente'})
    }
    return res.status(404).json({code:404, message:'Empleado no encontrado'})
});

employee.put('/:id([0-9]{1,3})', async(req, res, next) => {
    const {name, last_name, phone, email, addres} = req.body

    if(name && last_name && phone && email && addres) {
        let query = `UPDATE employees SET name= '${name}', last_name='${last_name}', 
        phone='${phone}', email='${email}', addres='${addres}' WHERE id=${req.params.id};`;

        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(200).json({code:200, message:'Empleado modificado correctamente'})
        }
        return res.status(500).json({code:500, message:'Ocurrio un error'})
    }
    return res.status(500).json({code:500, message:'Campos incompletos'})
});

employee.patch('/:id([0-9]{1,3})', async(req, res, next) => {
    if(req.body.name){
        let query = `UPDATE employees SET name='${req.body.name}' WHERE id=${req.params.id};`

        const rows = await db.query(query);

        if(rows.affectedRows == 1) {
            return res.status(200).json({code:200, message:'Nombre del empleado modificado correctamente'})
        }
        return res.status(500).json({code:500,  message:'Ocurrio un error'})
    }
    return res.status(500).json({code:500, message:'Campos imcompletos'})
});

employee.get('/', async(req, res, next) => {
    const emp = await db.query('SELECT * FROM employees');
    return res.status(200).json({code:1, message: emp});
});

employee.get('/:id([0-9]{1,3})', async(req, res, next) => {
    const id = req.params.id;
    const emp = await db.query('SELECT * FROM employees WHERE id='+id);
    if(id >=1 && id <= 722){
        return res.status(201).json({code:201, message: emp})
    }
    return res.status(404).send({code:404, message:'Empleado no encontrado'})
});

employee.get('/:name([A-Za-z]+)', async(req, res, next) => {
    const name = req.params.name;
    const emp = await db.query("SELECT * FROM employees WHERE name="+name.toLowerCase()+"");
    if(emp.length > 0){
        return res.status(201).json({code:201, message:emp});
    }
    return res.status(400).send({code:404, message:'Empleado no encontrado'});
})

module.exports = employee;