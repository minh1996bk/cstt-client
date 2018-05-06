module.exports = {
    run: async function(req, res) {

        let events = req.body.events;
    
        res.ok();
    },
    create: async function(req, res) {
        // lay ra ten benh va tap cac su kien 
        let result = req.body.result;
        let events = req.body.events;
        // tao moi 1 benh neu no chua ton tai
        let newOrExistResult = await Result.findOrCreate({name: result}, {name: result});

        // mang chua id cua cac event
        let eventIds = [];
        for (let i = 0; i < events.length; i ++) {
            //tao moi 1 event neu no chua ton tai
            
            let newOrExistEvent = await Events.findOrCreate({name: events[i]}, {name: events[i]});
            eventIds.push(newOrExistEvent.id);
        }
        // lay ra id cua benh
        let resultId = newOrExistResult.id;
        // them lien ket giua benh vao triue chung
        await Result.addToCollection(resultId, 'events')
        .members(eventIds);
        // tao luat moi
        let newRule = await Rule.create({
            result: resultId
        }).fetch();
        // tao lien ket giu luat vs events
        await Rule.addToCollection(newRule.id, 'events')
        .members(eventIds);
        
        res.ok();
    },
    update: async function(req, res) {

    },
    delete: async function(req, res) {
        
    }
}