const db = require('../database/conection.js');

class CursosController {
    constructor() {

    }
    consultar(req, res) {
        res.json({msg: 'Consulta de curso desde el controlador(clase)'});
    }

    consultarDetallle(req, res) {
        const {id} = req.params;
        res.json({msg: `Consulta detalle de curso desde el controlador(clase) - ${id}`});
    }

    ingresar(req, res) {
        res.json({msg: 'Ingreso de curso desde el controlador(clase)'});
    }

    actualizar(req, res) {
        res.json({msg: 'Actualizacion de curso desde el controlador(clase)'});
    }

    eliminar(req, res) {
        res.json({msg: 'Eliminacion de curso desde el controlador(clase)'});
    }
}

module.exports = new CursosController;