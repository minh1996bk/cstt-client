module.exports = async function(req, res, next) {
    if (!req.params.type) return res.badRequest();
    return next();
}