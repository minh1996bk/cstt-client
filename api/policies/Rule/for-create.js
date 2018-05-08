module.exports = async function(req, res, next) {
    if (!req.body.result || !req.body.events || !req.body.type || !req.body.rate) return res.badRequest();
    return next();
}