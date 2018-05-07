module.exports = async function(req, res, next) {
    if (!req.body.id || !req.body.name || !req.body.solution) return res.badRequest();
    return next();
}