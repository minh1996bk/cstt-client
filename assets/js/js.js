var events = [];

var currentImg = 0;
var key;
var type = 'benh';

function findEvent() {
    let time = new Date().getTime();
    key = time;
    
    setTimeout(function() {
        if (time === key) {
            
            let event = $(`#event-text`).val();
            
            io.socket.get('/findEvent', {event: event, type: type}, (res, jw) => {
                //just ignore
            }) 
        }
    }, 200);
    
}

function findResult() {
    let time = new Date().getTime();
    key = time;
   
    setTimeout(function() {
        if (time === key) {
            let result = $(`#result-text`).val();
            io.socket.get('/findResult', {result: result, type: type}, (res, jw) => {
                //just ignore
            })
        }
    })
   
}
function appendToTags() {
    let event = $('#event-text').val();
    if (!event) return;

    $('#event-text').val("");
    let htm = `
    <li>${event}</li>
    `;
    $('#tag').append(htm);
    events.push(event);
}

$(document).keydown(function(e) {
    if (e.which === 13) {
        if (document.getElementById('events-tag')) {
            document.getElementById('events-tag').hidden = false;
        }
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





$('#add-new-rule').on('click', function() {

    document.getElementById('new-rule-form').hidden = false;
});

function nextImg() {
    currentImg = currentImg + 1 < images.length ? currentImg + 1 : 0;
    document.getElementById('img-view').src = images[currentImg];
}

function prevImg() {
    currentImg = currentImg - 1 >= 0 ? currentImg - 1 : images.length - 1;
    document.getElementById('img-view').src = images[currentImg];
}


$('#disease-mode-btn').on('click', function() {
    type = 'benh';
    events = [];
    $('#tag').empty();
    document.getElementById('disease-mode-btn').style.backgroundColor = "#f2f4f7";
    document.getElementById('planting-mode-btn').style.backgroundColor = "inherit";
    document.getElementById('event-text').placeholder = "Nhập vào các triệu chứng bệnh"
});

$('#planting-mode-btn').on('click', function() {
    type = 'giong';
    events = [];
    $('#tag').empty();
    document.getElementById('disease-mode-btn').style.backgroundColor = "inherit";
    document.getElementById('planting-mode-btn').style.backgroundColor = "#f2f4f7";
    document.getElementById('event-text').placeholder = "Nhập vào các đặc tính lúa";
});