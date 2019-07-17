const { Pool } = require('pg')
const pool = new Pool({
    connectionString : process.env.DATABASE_URL,
    ssl : true,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});


function addUserToQueue(user) {
    
}


function getUserPosition(user) {

}


function removeUser({id}) {
    

}


async function createTable(sql, cb) {
    pool.query(sql, (err, res) => {
        console.log(err, res);
        pool.end()
        cb({success : true})
    });
}



module.exports = {
    createTable,
    removeUser,
    addUserToQueue,
    getUserPosition
}