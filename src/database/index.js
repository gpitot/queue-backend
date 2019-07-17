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
   
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {

            if (err) throw err;

            client.query(sql, values, (err, res) => {
                done();
                if (err) {
                    reject({success : false, err})
                }
                resolve({success:true, res});
            })
        })
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