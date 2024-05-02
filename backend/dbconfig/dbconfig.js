const mysql = require("mysql2/promise");
const {createStudentUserTable} = require("../models/student/user");
const {createAdminUserTable} = require("../models/admin/user");
const {createMessageTable}= require("../models/messages/structure")
async function query({ query, values = [] }) {
    console.log("hello database")
    const dbconnection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
    });
    console.log("Helllooooo")
     
    try {
        if (query.toLowerCase().includes('users_student')) {
            console.log("Creating student user table");
            await createStudentUserTable(dbconnection);
        }
        if (query.toLowerCase().includes('users_admin')) {
            console.log("Creating admin user table");
            await createAdminUserTable(dbconnection);
        }
        if (query.toLowerCase().includes('messages')) {
            console.log("Creating message table");
            await createMessageTable(dbconnection);
        }
        // Execute the original query
        const [results] = await dbconnection.execute(query, values);

        // Close the database connection
        dbconnection.end();

        return results;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { query };
