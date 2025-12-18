const express = require('express');
const router = express.Router();
const clashRoyaleController = require('../controllers/clashRoyaleControllers');

router.get('/', clashRoyaleController.getAll);
router.get('/add', clashRoyaleController.getAddForm);
router.post('/add', clashRoyaleController.postAdd);
router.get('/edit/:id', clashRoyaleController.getEditForm);
router.post('/edit/:id', clashRoyaleController.postEdit);
router.get('/delete/:id', clashRoyaleController.getDeleteForm);
router.post('/delete/:id', clashRoyaleController.deleteCard);
router.get('/show/:id', clashRoyaleController.getShowForm);

module.exports = router;