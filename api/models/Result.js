module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        events: {
            collection: 'events',
            via: 'results'
        },
        rules: {
            collection: 'rule',
            via: 'result'
        },
        solution: 'string',
    }
}