module.exports = async function(req, res, next) {
    if (!req.body.events) return res.badRequest();
    return next();
}