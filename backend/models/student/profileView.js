const mysql = require("mysql2/promise");

const studentProfileViewTable = async (dbconnection) => {
    try {
        await dbconnection.execute(`
            CREATE VIEW profiles_student_view AS
            SELECT 
                u.userid,
                u.username,
                u.email,
                p.first_name,
                p.last_name,
                p.birthdate,
                p.address,
                p.phone_number
            FROM 
                users_student u
            JOIN 
                profiles_student p ON u.username = p.username;
        `)

        console.log("Student Profile View table created or already exists.");
    } catch (error) {
        console.log("error in creating Profile View table")
        return res.json({
            error: error.message
        })
    }
}

module.exports = { studentProfileViewTable }
