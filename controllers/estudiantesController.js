const db = require('../database/conection.js');

class EstudiantesController {
    constructor() {

    }
    consultar(req, res) {
        try{
            db.query(`SELECT * FROM estudiantes`,  
                (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows);
            });
        }
        catch (err) {
            res.status(500).send(error);
        }

        //res.json({msg: 'Consulta de estudiante desde el controlador(clase)'});
    }

    consultarDetallle(req, res) {
        const {id} = req.params;

        try{
            db.query(`SELECT * FROM estudiantes WHERE id = ?`, [id], 
                (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows);
            });
        }
        catch (err) {
            res.status(500).send(error);
        }
        //res.json({msg: `Consulta detalle de estudiante desde el controlador(clase) - ${id}`});
    }

    ingresar(req, res) {
        try {
            const { dni, first_name, last_name, email } = req.body;
            db.query(`INSERT INTO estudiantes
                (id, dni, first_name, last_name, email)
                VALUES (NULL, ?, ?, ?, ?)`, 
                [dni, first_name, last_name, email], (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    res.status(201).json(rows);
            });
        }
        catch (err) {
            res.status(500).send(error);
        }

        //res.json({msg: 'Ingreso de estudiante desde el controlador(clase)'});
    }

    actualizar(req, res) {
        const {id} = req.params;
        
        try {
            const { dni, first_name, last_name, email } = req.body;
            db.query(`UPDATE estudiantes
                SET dni = ?, first_name = ?, last_name = ?, email = ?
                WHERE id = ?`, 
                [dni, first_name, last_name, email, id], (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    if(rows.affectedRows === 1) {
                        res.status(200).json({msg: 'Actualizacion exitosa'});
                    }                    
            });
        }
        catch (err) {
            res.status(500).send(error);
        }
        //res.json({msg: 'Actualizacion de estudiante desde el controlador(clase)'});
    }

    eliminar(req, res) {
        const {id} = req.params;
        
        try {
            const { dni, first_name, last_name, email } = req.body;
            db.query(`DELETE FROM estudiantes WHERE id = ?`, 
                [id], (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    if(rows.affectedRows === 1) {
                        res.status(200).json({msg: 'Registro eliminado con exito'});
                    }                    
            });
        }
        catch (err) {
            res.status(500).send(error);
        }
        //res.json({msg: 'Eliminacion de estudiante desde el controlador(clase)'});
    }
}

module.exports = new EstudiantesController;