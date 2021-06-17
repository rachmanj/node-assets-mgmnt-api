const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenance.controller');

const auth = require('../middleware/auth');

router.post('/', auth(), maintenanceController.addMaintenance);
router.get('/all', maintenanceController.allMaintenances);
router.post('/paginate', maintenanceController.paginateMaintenances);

module.exports = router;
