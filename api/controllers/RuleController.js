module.exports = {
    chuanDoanBenh: async function(req, res) {

        let eventNames = req.body.events;
 
        let rules = await Rule.find({type: 'benh'}).populate('events');
        let length = rules.length;
        let resultId;
        let rate;

        for (let i = 0; i < length; i ++) {
            let ruleEvents = rules[i].events;
            let match = ruleEvents.every(event => eventNames.includes(event.name));
            if (match) {
                resultId = rules[i].result;
                rate = rules[i].rate;
                
                break;
            }
        }
        if (resultId) {
            let result = await Result.findOne({
                id: resultId,
            })
            .populate('events')
            .populate('urls');
            result.urls = result.urls.map(url => url.value);
            return res.json({
                rate: rate,
                result: result
            })
        } else {
            
            await Fact.create({
                type: 'benh',
                newevent: eventNames.join('+'),
            })
            res.json({
                message: "No result",
            })
        }

    },
    chonGiongLua: async function(req, res) {
        delete req.session.lists;
        delete req.session.current;
        
        let eventNames = req.body.events;
 
        let rules = await Rule.find({type: 'giong'}).populate('events');
        let length = rules.length;
        let resultId;
        let lists = [];

        for (let i = 0; i < length; i ++) {
            let ruleEvents = rules[i].events.map(event => event.name);
            
            let match = eventNames.every(event => ruleEvents.includes(event));
            if (match) {
                resultId = rules[i].result;

                lists.push(resultId);
            }
        }
        console.log(lists);
        if (lists[0]) {
            let result = await Result.findOne({
                id: lists[0],
            })
            .populate('events')
            .populate('urls');
            result.urls = result.urls.map(url => url.value);
            req.session.lists = lists;
            req.session.current = 0;
            return res.json({
                result: result
            })
        } else {
            res.json({
                message: "No result",
            })
        }

    },
    getNext: async function(req, res) {
        let lists = req.session.lists;
        let length = lists.length;
        let current = req.session.current;
    
        let nextId = current + 1 < length ? current + 1 : 0;
        req.session.current = nextId;
        
        let result = await Result.findOne({
            id: lists[nextId],
        })
        .populate('events')
        .populate('urls');
        result.urls = result.urls.map(url => url.value);

        return res.json({
            result: result
        })
        
    },
    taoluatbenh: async function(req, res) {
        // lay ra ten benh va tap cac su kien 
        let result = req.body.result;
        let events = req.body.events;
        let type = req.body.type;
        let rate = req.body.rate;

        // tao moi 1 benh neu no chua ton tai
        let newOrExistResult = await Result.findOrCreate({name: result, type: type}, {name: result, type: type});

        // mang chua id cua cac event
        let eventIds = [];
        for (let i = 0; i < events.length; i ++) {
            //tao moi 1 event neu no chua ton tai
            
            let newOrExistEvent = await Events.findOrCreate({name: events[i], type: type}, {name: events[i], type: type});
            eventIds.push(newOrExistEvent.id);
        }
        // lay ra id cua benh
        let resultId = newOrExistResult.id;
        // them lien ket giua benh vao triue chung
        await Result.addToCollection(resultId, 'events')
        .members(eventIds);
        // tao luat moi
        let newRule = await Rule.create({
            result: resultId,
            type: type,
            rate: rate,
        }).fetch();
        // tao lien ket giu luat vs events
        await Rule.addToCollection(newRule.id, 'events')
        .members(eventIds);
        
        res.ok();
    },
    taoluatgiong: async function(req, res) {
        let result = req.body.result;
        let events = req.body.events;
        let type = 'giong';
        // tao moi 1 benh neu no chua ton tai
        let newOrExistResult = await Result.findOrCreate({name: result, type: type}, {name: result, type: type});

        // mang chua id cua cac event
        let eventIds = [];
        for (let i = 0; i < events.length; i ++) {
            //tao moi 1 event neu no chua ton tai
            
            let newOrExistEvent = await Events.findOrCreate({name: events[i], type: type}, {name: events[i], type: type});
            eventIds.push(newOrExistEvent.id);
        }
        // lay ra id cua benh
        let resultId = newOrExistResult.id;
        // them lien ket giua benh vao triue chung
        await Result.addToCollection(resultId, 'events')
        .members(eventIds);
        // tao luat moi
        let newRule = await Rule.create({
            result: resultId,
            type: type,
        }).fetch();
        // tao lien ket giu luat vs events
        await Rule.addToCollection(newRule.id, 'events')
        .members(eventIds);
        
        res.ok();
    },

    quanlybenh: async function(req, res) {
        let rules = await Rule.find({
            type: 'benh',
        }).populate('result').populate('events');

        res.view('pages/quanlybenh', {
          rules: rules
        });
    },
    quanlygiong: async function(req, res) {
        let rules = await Rule.find({
            type: 'giong',
        }).populate('result').populate('events');
        
        res.view('pages/quanlygiong', {
          rules: rules
        });
    }   
   
}