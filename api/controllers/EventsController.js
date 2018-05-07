module.exports = {
    socketFindEvent: async function(req, res) {
        
        let events = await Events.find({
            where: {
                name: {
                    contains: req.body.event
                },
                type: req.body.type
            }
        })
        sails.sockets.broadcast(sails.sockets.getId(req), 'findEvent', events);
        res.ok();
    },
    create: async function(req, res) {
        let newEvent = await Events.create({
            name: req.body.name
        }).fetch();
        return res.json({
            eventId: newEvent.id
        })
    },
    update: async function(req, res) {
        await Events.update({'id': req.body.id})
        .set({
            name: req.body.name
        })
        return res.ok();
    },
    delete: async function(req, res) {
        if (!req.boyd.id) return res.badRequest();
        await Events.destroy({
            'id': req.body.id
        })
        return res.ok();
    }
}