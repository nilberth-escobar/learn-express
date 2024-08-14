const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController.js');

router.get('/', profesoresController.consultar);

/* router.get('/', (req, res)=> {
    res.json({msg: 'Consulta de estudiantes'});
}); */

router.post('/', profesoresController.ingresar);

router.route('/:id')
    .get(profesoresController.consultarDetallle)
    .put(profesoresController.actualizar)
    .delete(profesoresController.eliminar);

module.exports = router;