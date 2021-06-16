const { assetService } = require('../services');

const assetsController = {
  async addAsset(req, res, next) {
    try {
      const { assetName, category } = req.body;
      const asset = await assetService.addAsset(assetName, category);
      res.json(asset);
    } catch (error) {
      next(error);
    }
  },
  async getAssetById(req, res, next) {
    try {
      const id = req.params.id;
      const asset = await assetService.getAssetById(id);
      res.json(asset);
    } catch (error) {
      next(error);
    }
  },
  async updateAssetById(req, res, next) {
    try {
      const _id = req.params.id;
      const asset = await assetService.updateAssetById(_id, req.body);
      res.json(asset);
    } catch (error) {
      next(error);
    }
  },
  async deleteAssetById(req, res, next) {
    try {
      const id = req.params.id;
      const asset = await assetService.deleteAssetById(id);
      res.json(asset);
    } catch (error) {
      next(error);
    }
  },
  async getAll(req, res, next) {
    try {
      const assets = await assetService.getAll(req.body);
      res.json(assets);
    } catch (error) {
      next(error);
    }
  },
  async paginateAll(req, res, next) {
    try {
      const assets = await assetService.paginateAll(req);
      res.json(assets);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = assetsController;
