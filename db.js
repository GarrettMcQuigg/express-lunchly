/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://gbmcquigg:Blake2017@localhost/lunchly");

db.connect();

module.exports = db;
