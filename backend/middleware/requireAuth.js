// Define your Express middleware function
const middleware = (req, res, next) => {
    const path = req.path;

    const isPublicPath = path === '/login' || path === '/';
    const token = req.cookies.token || '';

    if (isPublicPath && token) {
        return res.redirect('/profile');
    }

    if (!isPublicPath && !token) {
        return res.redirect('/login');
    }

    // Call next to continue processing the request
    next();
};

// Export the middleware function
module.exports = {middleware};
