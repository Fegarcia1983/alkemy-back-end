const express = require('express');
const router = express.Router();
const apiRegisters = require('../../controllers/api/registersApiController');

/*=====================================
=>             GET ROUTES            <=
=====================================*/
router.get('/registers', apiRegisters.listFilters);
router.get('/:id', apiRegisters.updateForm)
router.get('/', apiRegisters.list);


/*=====================================
=>            POST ROUTES            <=
=====================================*/
router.post('/', apiRegisters.create);

/*=====================================
=>             PUT ROUTES            <=
=====================================*/
router.put('/:id', apiRegisters.update);

/*=====================================
=>           DELETE ROUTES           <=
=====================================*/
router.delete('/:id', apiRegisters.delete);

module.exports = router;