module.exports = {
    quanlysukienmoi: async function(req, res) {
        let facts = await Fact.find({});
        return res.view('pages/facts', {
            facts: facts
        });
    }
}