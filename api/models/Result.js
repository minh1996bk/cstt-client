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
    },
    getBenhs: async function() {
        let benhs = await Result.find({
            type: 'benh'
        })
        .populate('urls')
        .populate('events')
        .populate('rules');

        return benhs.map(benh => {
            benh.urls = benh.urls.map(url => url.value);
            benh.events = benh.events.map(event => event.name);
            benh.ruleCount = benh.rules.length;
            delete benh.rules;

            return benh;
        })
    },

    getGiongs: async function() {
        let giongs = await Result.find({
            type: 'giong'
        })
        .populate('urls')
        .populate('events')

        return giongs.map(giong => {
            giong.urls = giong.urls.map(url => url.value);
            giong.events = giong.events.map(event => event.name);
         
            return giong;
        })
    }
}