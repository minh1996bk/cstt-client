module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        rules: {
            collection: 'rule',
            via: 'events'
        },
        results: {
            collection: 'result',
            via: 'events'
        },
        facts: {
            collection: 'fact',
            via: 'events'
        }
    }
}