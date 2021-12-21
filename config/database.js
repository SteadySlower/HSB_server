const mysql = require('mysql2');

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "HSB",
  password: "mysql222",
  port: 3306,
}); 

// pool.getConnection( (err, conn) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(conn)
//   }
// })

module.exports = {
  pool: pool
};
