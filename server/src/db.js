const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'Progresql24',
    host: 'localhost',
    port: 5432,
    database: 'retrogamer_db'
});

module.exports = pool;