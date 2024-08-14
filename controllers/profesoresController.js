const db = require('../database/conection.js');

class ProfesoresController {
    constructor() {

    }
    consultar(req, res) {
        res.json({msg: 'Consulta de profesor desde el controlador(clase)'});
    }

    consultarDetallle(req, res) {
        res.json({msg: 'Consulta detalle de profesor desde el controlador(clase)'});
    }

    ingresar(req, res) {
        res.json({msg: 'Ingreso de profesor desde el controlador(clase)'});
    }

    actualizar(req, res) {
        res.json({msg: 'Actualizacion de profesor desde el controlador(clase)'});
    }

    eliminar(req, res) {
        res.json({msg: 'Eliminacion de profesor desde el controlador(clase)'});
    }
}

module.exports = new ProfesoresController;