module.exports = {
    quanlysukienmoi: async function(req, res) {
        let facts = await Fact.find({});

        facts.forEach(fact => {
            fact.events = fact.newevent.split("+");
            delete fact.newevent;
        })

       
        return res.view('pages/facts', {
            facts: facts
        });
    },
    getSuKienMois: async function(req, res) {
        let facts = await Fact.find({}).sort('createdAt DESC');

        facts.forEach(fact => {
            fact.events = fact.newevent.split("+");
            delete fact.newevent;
        })
        return res.json({
            success: true,
            facts: facts
        })

    },
    updateFactContact: async function(req, res) {
        await Fact.update({id: req.body.factId}).set({
            contact: req.body.contact
        })
        return res.json({
            success: true
        })
    },
    resolveFact: async function(req, res) {
 
        await Fact.destroy({
            id: req.body.factId
        })
        return res.json({
            success: true
        })
    }
}