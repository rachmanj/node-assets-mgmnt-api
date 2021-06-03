const { Objectperbaikan } = require('../models/objectPerbaikan');
const { objectPerbaikanService } = require('../services');

const objectPerbaikanController = {
  async addObjectPerbaikan(req, res, next) {
    try {
      const objectPerbaikan = await objectPerbaikanService.addObjectPerbaikan(
        req.body.objectName
      );
      res.json(objectPerbaikan);
    } catch (error) {
      next(error);
    }
  },
  async getObjectPerbaikanById(req, res, next) {
    try {
      const id = req.params.id;
      const objectPerbaikan =
        await objectPerbaikanService.getObjectPerbaikanById(id);
      res.json(objectPerbaikan);
    } catch (error) {
      next(error);
    }
  },
  async deleteObjectPerbById(req, res, next) {
    try {
      const id = req.params.id;
      const objectPerbaikan = await objectPerbaikanService.deleteObjectPerbById(
        id
      );
      res.json(objectPerbaikan);
    } catch (error) {
      next(error);
    }
  },
  async getAll(req, res, next) {
    try {
      const objectPerbaikans = await objectPerbaikanService.getAll(req.body);
      res.json(objectPerbaikans);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = objectPerbaikanController;
