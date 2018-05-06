module.exports = {
    socketFindResult: async function(req, res) {
        if (!req.isSocket) return res.badRequest();
        console.log(req.body.result)
        let results = await Result.find({
            where: {
                name: {
                    contains: req.body.result
                }
            }
        })
        sails.sockets.broadcast(sails.sockets.getId(req), 'findResult', results);
        res.ok();
    }
}