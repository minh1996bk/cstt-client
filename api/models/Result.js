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