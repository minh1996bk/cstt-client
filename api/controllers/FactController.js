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
    }
}