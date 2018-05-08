module.exports = {
    run: async function(req, res) {

        let eventNames = req.body.events;
        let type = req.body.type;
        let rules = await Rule.find({type: type}).populate('events');
        let length = rules.length;
        let resultId;
        for (let i = 0; i < length; i ++) {
            let ruleEvents = rules[i].events;
            let match = ruleEvents.every(event => eventNames.includes(event.name));
            if (match) {
                resultId = rules[i].result;
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
                result: result
            })
        } else {
            res.json({
                msg: "No result"
            })
        }
        // let result = {
        //     name: 'Sâu cuốn lá',
        //     events: [
        //         {
        //             name: 'lá vàng',
        //         },
        //         {
        //             name: 'có sâu'
        //         }
        //     ],
        //     urls: [
        //         "http://9mobi.vn/cf/images/2015/03/nkk/hinh-dep-1.jpg",
        //         "http://i.9mobi.vn/cf/images/2015/03/nkk/nhung-hinh-anh-dep-4.jpg",
        //     ],
        //     solution: "abc+cbc+dsasfd+dfasd+ádf"
        // }
        // res.json({
        //     result: result
        // });
    },
    create: async function(req, res) {
        // lay ra ten benh va tap cac su kien 
        let result = req.body.result;
        let events = req.body.events;
        let type = req.body.type;

        
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
            type: type
        }).fetch();
        // tao lien ket giu luat vs events
        await Rule.addToCollection(newRule.id, 'events')
        .members(eventIds);
        
        res.ok();
    },
    gets: async function(req, res) {
        let type = req.params.type;
        let rules = await Rule.find({
            type: type
        }).populate('result').populate('events');
        
        res.view('pages/rules', {
          rules: rules,
          isBenh: type == 'benh'
        });
    },
    update: async function(req, res) {

    },
    delete: async function(req, res) {
        
    }
}