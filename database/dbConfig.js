const knex = require("knex");
const knexConfig = require("../knexfile.js");

const knexfile = require("../knexfile.js");

const environment = process.env.DB_ENV || "development";

module.exports = knex(knexfile[environment]);


// module.exports = knex(knexConfig.development);