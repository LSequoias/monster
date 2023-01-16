

const mongoose = require('mongoose');
mongoose.Promise =  global.Promise;

const db = {};

db.mongoose = mongoose;

db.monster = require("./monster.model");
db.role = require("./role.model");

db.ROLES = ["Guerrier", "Alchimiste", "Sorcier", "Espions", "Enchanteur"];

module.exports = db;