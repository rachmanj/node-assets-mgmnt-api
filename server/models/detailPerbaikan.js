const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const Maintenance = mongoose.model('Maintenance', maintenanceSchema);
module.exports = { Maintenance };
