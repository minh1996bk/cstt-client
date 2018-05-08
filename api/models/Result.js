module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        type: {
            type: 'string',
            isIn: ['benh', 'giong']
        },
        urls: {
            collection: 'url',
            via: 'result'
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