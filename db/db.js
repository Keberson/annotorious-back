const pgp = require('pg-promise')();

const options = {
    host: 'ep-broad-flower-52150784.us-east-2.aws.neon.tech',
    database: 'annotorious',
    user: 'creedkiller.62',
    password: process.env.DB_PASSWORD,
    ssl: true
};

const db = pgp(options)

module.exports = db;
