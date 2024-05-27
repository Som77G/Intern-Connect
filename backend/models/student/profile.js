const mysql = require("mysql2/promise");

const createStudentProfileTable = async (dbconnection) => {
    try {
        // Check if the 'users' table exists, and create it if it doesn't
        await dbconnection.execute(`
            CREATE TABLE IF NOT EXISTS profiles_student (
                profile_id INT AUTO_INCREMENT PRIMARY KEY,
                first_name VARCHAR(50) NOT NULL,
                last_name VARCHAR(50) NOT NULL,
                birthdate DATE,
                address VARCHAR(255),
                phone_number VARCHAR(15),
                FOREIGN KEY (username) REFERENCES users_student(username)
            )
        `);

        console.log("Student Profile table created or already exists.");
    } catch (error) {
        // throw new Error("Error creating users table: " + error.message);
        console.log("error in creating Profile table")
        return res.json({
            error: error.message
        })
    }
}


module.exports = { createStudentProfileTable }