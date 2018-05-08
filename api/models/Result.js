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
        url: 'string',
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