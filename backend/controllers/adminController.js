const express = require('express');
const { query } = require("../dbconfig/dbconfig");
const { v4: uuidv4 } = require('uuid');
const { decodejwt } = require("../helpers/decodejwt")
const {MailDeductInCredits} = require('../helpers/MailDeductInCredits')
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

const deductCredit = async(req, res) => {
    try {
        const {first_name, last_name, email, userid, credit, message} = req.body;
        console.log(userid, ':', credit, ":", message)
        const deduct_credit = `
            UPDATE profiles_student
            SET credit = ?
            WHERE userid = ?
        `

        const updatedUser = await query({
            query : deduct_credit,
            values : [credit, userid]
        })
        if (updatedUser.affectedRows == 1) {
            //send mail to student
            await MailDeductInCredits({email : email, first_name : first_name, last_name: last_name, message: message})
        }

        console.log("User whose credit is deducted: ",updatedUser)
        return res.status(200).json({
            message : "Credits deducted successfully"
        })
    } catch (error) {
        console.error("Error deducting credits:", error);
        return res.status(500).json({
            status: 500,
            error: "Internal Server Error"
        });
    }
}

module.exports = { addStudent, deductCredit }
