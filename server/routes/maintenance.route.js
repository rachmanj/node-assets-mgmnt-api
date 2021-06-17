const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenance.controller');

const auth = require('../middleware/auth');

router.post('/', maintenanceController.addMaintenance);
router.get('/all', maintenanceController.allMaintenances);

module.exports = router;
