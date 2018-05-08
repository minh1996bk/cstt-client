module.exports = async function(req, res, next) {
    
    if (!req.body.id || !req.body.result || !req.body.solution || !req.body.type) return res.badRequest();
    let isValidType = ['giong', 'benh'].includes(req.body.type);
   
    if (!isValidType) return res.badRequest();
    return next();
}