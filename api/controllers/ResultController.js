module.exports = {
    socketFindResult: async function(req, res) {
        
        let type = req.body.type;

        let results = await Result.find({
            where: {
                name: {
                    contains: req.body.result
                },
                type: type
            }
        })
        sails.sockets.broadcast(sails.sockets.getId(req), 'findResult', results);
        res.ok();
    },
    get: async function(req, res) {
        let result = await Result.findOne({id: req.params.id});
        res.json({
          result: result
        })
    },
    update: async function(req, res) {
        await Result.update({id: req.body.id})
        .set({
          name: req.body.name,
          solution: req.body.solution,
        })
        res.ok();
    }
}