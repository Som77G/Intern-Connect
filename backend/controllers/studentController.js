const { query } = require('../dbconfig/dbconfig');
const {decodejwt} = require('../helpers/decodejwt');

const dashboard = async (req, res) => {
    try {
        console.log("REquest accepted")
        const { userid } = await decodejwt(req);

        const findUserQuery = `
            SELECT * FROM users_student
            WHERE userid = ?
        `;

        const user = await query({
            query: findUserQuery,
            values: [userid]
        });

        console.log("unique user: ", user);

        res.status(200).json({
            message: {
                username: user[0].username,
                email: user[0].email
            },
            status: 200
        });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({
            error: error.message,
            status: 500
        });
    }
};

module.exports = { dashboard };
