const express = require('express');
const { query } = require('../dbconfig/dbconfig');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sendEmail } = require('../helpers/sendEmail');
const verifyEmail= async (req, res) => {
    try {
        const { token, userType } = req.body;
        console.log("Token : ", token);
        const tableType = {
            'student': 'users_student',
            'admin': 'users_admin'
        };
        const searchUser = `
            SELECT * FROM ${tableType[userType]} WHERE verifytoken= ?
        `;
        const user = await query({
            query: searchUser,
            values: [token]
        });

        if (user.length === 0) {
            return res.status(400).json({ error: "Invalid token" });
        }
        console.log("user: ", user);
        // Set the reset password field true
        // const updateResetPasswordQuery = `
        //     UPDATE ${tableType[userType]}
        //     SET resetpassword= ?
        //     WHERE verifytoken= ?
        // `;
        // await query({
        //     query: updateResetPasswordQuery,
        //     values: [1, token]
        // });
        return res.json({
            user: user[0],
            message: "email verified successfully",
            success: true
        });
        // Verify the user existence in db on the basis of token and date of token expiry {25: 03}
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};



// Login endpoint
const login= async (req, res) => {
    try {
        const { username, password, userType } = req.body;

        // Define table type based on userType
        const tableType = {
            'student': 'users_student',
            'admin': 'users_admin'
        };

        const searchUser = `
            SELECT * FROM ${tableType[userType]} WHERE username = ?
        `;
        
        const user = await query({
            query: searchUser,
            values: [username]
        });

        if (user.length === 0) {
            return res.status(400).json({ message: "Username doesn't exist", status: '400' });
        }

        if (user[0].resetpassword === 0 && user[0].password !== password) {
            return res.status(400).json({ message: "Password doesn't match", status: '400' });
        }

        if (user[0].resetpassword === 1) {
            const validPassword = await bcryptjs.compare(password, user[0].password);
            if (!validPassword) {
                return res.status(400).json({ message: "Password doesn't match", status: '400' });
            }
        }
        
        // Create web token for user authorization
        const tokenData = { userid: user[0].userid };
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });

        // Send email if password reset is required
        if (user[0].resetpassword === 0) {
            console.log("user", user[0].email)
            await sendEmail({ email: user[0].email, userId: user[0].userid, username: user[0].username, userType: userType });
        }

        // Set cookies and send response
        res.cookie("token", token, { httpOnly: true });
        return res.status(200).json({ message: user[0], status: 200 });
    } catch (error) {
        console.error("Error processing POST request:", error);
        return res.status(500).json({ status: 500, error: "Internal Server Error" });
    }
};

// Reset password endpoint
const resetPassword= async (req, res) => {
    try {
        console.log()
        const { username, password, userType } = req.body;
        
        const tableType = {
            'student': 'users_student',
            'admin': 'users_admin'
        };

        const resetPasswordQuery = `
            UPDATE ${tableType[userType]}
            SET password = ?,
            resetpassword = ?,
            verifytoken = ?
            WHERE username = ?
        `;

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const updatedUser = await query({
            query: resetPasswordQuery,
            values: [hashedPassword, 1, "", username]
        });

        return res.status(200).json({ status: 200, message: "Password updated successfully", user: updatedUser[0] });
    } catch (error) {
        console.error("Error processing PUT request:", error);
        return res.status(500).json({ status: 500, error: "Internal Server Error" });
    }
};

const logout = async(req, res) => {
    try {
        res.cookie("token", "", {
            httpOnly : true,
            expiresIn : new Date(0)
        });
        return res.status(200).json({ status: 200, message: "Successfully logout"});
    } catch (error) {
        return res.status(500).json({ status: 500, error: "Internal Server Error" });

    }
}
module.exports = {verifyEmail, login, resetPassword, logout};
