const { Pool } = require('pg');

const {
    ORGS,
    DOCTORS,
    QUEUE
} = require('./tables');


const pool = new Pool({
    connectionString : process.env.DATABASE_URL,
    ssl : true,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});



async function query(sql, values) {
    pool.query(sql, values, (err, res) => {
        pool.end();
        if (err) {
            return {success : false, err};
        }
        return {success:true, res}
    })
}



async function createTable(sql, cb) {
    pool.connect((err, client, release) => {
        
        client.query(ORGS, (err, res) => {
            console.log('ORGS - ', res);
            client.query(DOCTORS, (err, res) => {
                console.log('DOCS - ', res);

                client.query(QUEUE, (err, res) => {
                    console.log('QUEUE - ', res);

                    release();
                    cb({success : true});
                })
            })

        })
    })
}



module.exports = {
    query,
    createTable
}