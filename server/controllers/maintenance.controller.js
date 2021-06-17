const { maintenanceService } = require('../services');

const maintenanceController = {
  async addMaintenance(req, res, next) {
    try {
      const maintenance = await maintenanceService.addMaintenance(req.body);
      res.json(maintenance);
    } catch (error) {
      next(error);
    }
  },
  async allMaintenances(req, res, next) {
    try {
      const maintenances = await maintenanceService.allMaintenances(req);
      res.json(maintenances);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = maintenanceController;
