module.exports = async function(req, res) {

    const eventNames = ["la", "lua", "mau", "xanh", "vang", "kho", "chay", "cung", "trang", "lep"];
    const resultNames = ["vang", "xoan", "kho", "sau", "cuon", "cung", "la"];

    function createRadomNumberInRange(start, end) {
        return Math.round((Math.random() * (end - start)) + start);
    }
    for (let i = 0; i < 200; i ++) {
        let name = eventNames[createRadomNumberInRange(0,9)] + " " + eventNames[createRadomNumberInRange(0, 9)];
        console.log(name);
        await Events.create({
            name: name,    
        })
    }
   
    for (let i = 0; i < 20; i ++ ) {
        await Result.create({
            name: resultNames[createRadomNumberInRange(0, 6) + " " + resultNames[createRadomNumberInRange(0, 6)]]
        })
    }

    for (let i = 0; i < 50; i ++) {
        let eventsSize = createRadomNumberInRange(0, 4);
        let resultId = createRadomNumberInRange(1, 20);
        let eventsId = [];
        for (let j = 0; j < eventsSize; j ++ ) {
            eventsId.push(createRadomNumberInRange(1, 200));
        }

        await Rule.create({
            result: resultId,
            events: eventsId,
        })
    }
    res.ok();
}