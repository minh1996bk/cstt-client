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
        rate: {
            type: 'number',
            defaultsTo: 100
        },
        result: {
            model: 'result'
        }
    }
}