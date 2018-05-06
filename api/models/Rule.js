module.exports = {
    attributes: {
        events: {
            collection: 'events',
            via: 'rules'
        },
        result: {
            model: 'result'
        }
    }
}