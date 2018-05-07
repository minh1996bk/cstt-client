module.exports = {
    attributes: {
        type: {
            type: 'string',
            required: true,
        },
        events: {
            collection: 'events',
            via: 'rules'
        },
        result: {
            model: 'result'
        }
    }
}