const jwt = require('jsonwebtoken');

const decodejwt = (req, res, next) => {
    try {
        const token = req.headers.cookie ? req.headers.cookie.split(';').find(c => c.trim().startsWith('token=')) : null;


        if (!token) {
            throw new Error('Token not found');
        }

        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log("decoded token : ", decodedToken);
        
        // Attach the decoded token to the request object for further processing
        req.decodedToken = decodedToken;

        // Call next middleware or route handler
        next();
    } catch (error) {
        console.error("Error decoding token:", error);
        return res.status(500).json({
            error: error.message,
            status: 500
        });
    }
};

module.exports = {decodejwt};
