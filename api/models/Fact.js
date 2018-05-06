module.exports = {
    attributes: {
        events: {
            collection: 'events',
            via: 'facts'
        },
        newevent: {
            type: 'string',
            required: true
        },
        contact: 'string'
    }
}