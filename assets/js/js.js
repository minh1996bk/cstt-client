let events = [];
function findEvent(input) {
    let event = $(`#${input}`).val();
    
    io.socket.get('/findEvent', {event: event}, (res, jw) => {
        //just ignore
    })
}

function findResult() {
    let event = $(`#result-text`).val();
    
    io.socket.get('/findResult', {result: event}, (res, jw) => {
        //just ignore
    })
}
function appendToTags() {
    let event = $('#event-text').val();
    if (!event) return;

    $('#event-text').val("");
    let htm = `
    <input name="event${events.length}" value="${event}" hidden>
    <p>${event}</p>
    `;
    $('#tag').append(htm);
    events.push(event);
}

$(document).keydown(function(e) {
    if (e.which === 13) {
        appendToTags();
    }
})
$(function() {
    io.socket.on('findEvent', data => {
        let eventNames = data.map(event => event.name);
        $('#event-text').autocomplete({
            source: eventNames,
        })
    });

    io.socket.on('findResult', data => {
        let resultNames = data.map(result => result.name);
        $('#result-text').autocomplete({
            source: resultNames,
        })
    });

});

function createRule() {

}