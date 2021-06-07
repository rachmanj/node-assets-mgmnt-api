const express = require('express');
const router = express.Router();
const assetsController = require('../controllers/assets.controller');
const auth = require('../middleware/auth');

router.get('/all', assetsController.getAll);
router.post('/paginate/all', assetsController.paginateAll);

router.post('/', auth('createAny', 'assets'), assetsController.addAsset); //auth('createAny', 'assets'),

router
  .route('/:id')
  .get(assetsController.getAssetById)
  .delete(auth('deleteAny', 'assets'), assetsController.deleteAssetById);

module.exports = router;
