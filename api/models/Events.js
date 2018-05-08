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
        rules: {
            collection: 'rule',
            via: 'events'
        },
        results: {
            collection: 'result',
            via: 'events'
        },
        
    }
}