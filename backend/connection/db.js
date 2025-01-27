import mysql from 'mysql2';

// Create MySQL connection
const db = mysql.createConnection({
    host: '172.17.159.254', //WSL IP address, I am using Mysql-server in Ubuntu(as WSL)
    port: 3306,             
    user: 'asad',           
    password: 'asad',       
    database: 'student_db'  
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        process.exit(1); // Exit the process if connection fails
    } else {
        console.log('Database Connected');
    }
});

// Export db for use in other files
export default db;