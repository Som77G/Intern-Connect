const express = require('express');
const { query } = require("../dbconfig/dbconfig");
const { v4: uuidv4 } = require('uuid');
const { decodejwt } = require("../helpers/decodejwt")
const addStudent = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        console.log("dataaaaaa", username, password, email)
        // Search for the student in the database
        const searchUser = `
            SELECT * FROM users_student
            WHERE username= ?`;
        console.log("line13 pe hai");
        const user = await query({
            query: searchUser,
            values: [username]
        });
        console.log("line 18 pe hai");
        if (user && user.length > 0) {
            console.log("Student exist already");
            return res.status(400).json({
                message: "Student already exists",
                status: '400'
            });
        }
        const userid = uuidv4();
        // Create student record in the table
        const insertStudentQuery = `
            INSERT INTO users_student
            (username, password, email, userid)
            VALUES(?, ?, ?, ?)
        `;
        console.log("line34 pe hai");
        const newUser = await query({
            query: insertStudentQuery,
            values: [username, password, email, userid]
        });
        let message = "";
        if (newUser.affectedRows) {
            message = "success";
        } else {
            message = "error";
        }
        console.log("new User added", newUser);
        return res.json({
            user: { username, email, userid }
        });

    } catch (error) {
        console.error("Error adding student to the database:", error);
        return res.status(500).json({
            status: 500,
            error: "Internal Server Error"
        });
    }
};

const getAdmin = async (req, res) => {
    try {
        const { userid, username, userType } = await decodejwt(req);
        

        // const findAdminQuery = `
        //  SELECT * FROM users_admin
        //  WHERE userid= ?
        // `
        // const user = await query({
        //     query: findAdminQuery,
        //     values: [userid]
        // })
        const user= {userid: userid, username: username, userType: userType};
        console.log("Admin data:", user);
        res.status(200).json({
            user: user,
            status: 200
        });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({
            error: error.message,
            status: 500
        });
    }


}
module.exports = { addStudent, getAdmin }
