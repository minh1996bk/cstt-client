module.exports = async function(req, res, next) {
    if (!req.isSocket || !req.body.type || !req.body.result) return res.badRequest();

    return next();
}