module.exports = async function(req, res, next) {
    if (!req.params.id) return res.badRequest();
    return next();
}