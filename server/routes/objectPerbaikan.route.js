const express = require('express');
const router = express.Router();
const objectPerbaikanController = require('../controllers/objectPerbaikan.controller');
const auth = require('../middleware/auth');

router.get('/all', objectPerbaikanController.getAll);

router.post(
  '/',
  auth('createAny', 'objekperbaikan'),
  objectPerbaikanController.addObjectPerbaikan
);

router
  .route('/:id')
  .get(objectPerbaikanController.getObjectPerbaikanById)
  .delete(
    auth('deleteAny', 'objekperbaikan'),
    objectPerbaikanController.deleteObjectPerbById
  );

module.exports = router;
