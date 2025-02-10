import mysql from 'mysql2';
import { mysql_public_url } from '../config/config.js';


// Create MySQL connection using local connection to mysql server
// const db = mysql.createConnection({
//     //host: '172.17.159.254', //WSL IP address, I am using Mysql-server in Ubuntu(as WSL)
//     // host: 'srsdb',\
//     // host: 'host.docker.internal',
//     host: '127.0.0.1',
//     port: 3306,             
//     user: 'asad',           
//     password: 'asad',       
//     database: 'student_db'  
// });

//Railwat DB(MySQL)
const db = mysql.createConnection({
    uri: mysql_public_url
  });



// Connect to MySQL
db.connect((err) => {
    if (err) {
      console.error('Error message:', err.message);
      process.exit(1);
    }
    console.log('Connected to DB!');
  });

// Export db for use in other files
export default db;