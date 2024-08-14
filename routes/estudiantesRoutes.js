const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController.js');

router.get('/', estudiantesController.consultar);

/* router.get('/', (req, res)=> {
    res.json({msg: 'Consulta de estudiantes'});
}); */

router.post('/', estudiantesController.ingresar);

router.route('/:id')
    .get(estudiantesController.consultarDetallle)
    .put(estudiantesController.actualizar)
    .delete(estudiantesController.eliminar);

module.exports = router;