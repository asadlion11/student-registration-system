import mysql from 'mysql2';
import {host, user, password, db_name, db_port, connection_uri} from '../config/config.js';
// Create MySQL connection using local connection to mysql server
const db = mysql.createConnection({
    host: '172.17.159.254', //WSL IP address, I am using Mysql-server in Ubuntu(as WSL)
    port: 3306,             
    user: 'asad',           
    password: 'asad',       
    database: 'student_db'  
});


// Create MySQL connection using clever cloud connection(Mysql-server)
// const db = mysql.createConnection({
//     host: host, 
//     port: db_port,             
//     user: user,           
//     password: password,       
//     database: db_name  
// });


// Create MySQL connection using clever cloud connection(Mysql-server)
//CONNECTION_URI directly, which includes all connection details (host, user, password, database name, db port).
// const db = mysql.createConnection(connection_uri);


// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        process.exit(1); // Exit the process if connection fails
    } else {
        console.log('Connected to MySQL database!');
    }
});

// Export db for use in other files
export default db;