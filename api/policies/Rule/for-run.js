module.exports = async function(req, res, next) {
    if (!req.body.events || !req.body.type) return res.badRequest();
    return next();
}