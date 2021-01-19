const express = require('express');
const router = express.Router();
const apiCategories = require('../../controllers/api/categoriesApiController');

/*=====================================
=>             GET ROUTES            <=
=====================================*/
router.get('/', apiCategories.list);


/*=====================================
=>            POST ROUTES            <=
=====================================*/
// router.post('/', apiCategories.create);

/*=====================================
=>             PUT ROUTES            <=
=====================================*/
// router.put('/:id', apiCategories.update);

/*=====================================
=>           DELETE ROUTES           <=
=====================================*/
// router.delete('/:id', apiCategories.delete);

module.exports = router;