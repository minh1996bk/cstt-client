module.exports = async function(req, res, next) {
    if (!req.isSocket || !req.body.event) return res.badRequest();
    return next();
}