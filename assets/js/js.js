
var searchTarget = "/disease";
var events = [];
var images = [
    "http://9mobi.vn/cf/images/2015/03/nkk/hinh-dep-1.jpg",
    "http://i.9mobi.vn/cf/images/2015/03/nkk/nhung-hinh-anh-dep-4.jpg",
];
var currentImg = 0;
var key;

function findEvent(input) {
    let time = new Date().getTime();
    key = time;
    
    setTimeout(function() {
        if (time === key) {
            
            let event = $(`#${input}`).val();
    
            io.socket.get('/findEvent', {event: event}, (res, jw) => {
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
            io.socket.get('/findResult', {result: result}, (res, jw) => {
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

$('#create-rule-btn').on('click', function() {
    let result = $('#result-text').val();
    if (!result || !events) return;
    let newRule = {
        result: result,
        events: events
    }
    $.post('/rule', newRule, function(data) {
        events = [];
        $('#tag').empty();
        $('#result-text').val('');
        window.alert('Tạo luật mới thành công');
    });
    
});

$('#search-result-btn').on('click', function() {
    if (!events) return;
    
    $('#tag').empty();
    $.post(searchTarget, {
        events: events
    }, function(data, status) {
        document.getElementById('search-container').style.top = "50px";
    })
    events = [];
});

$('#add-new-rule').on('click', function() {
    console.log("ok");
    document.getElementById('new-rule-form').hidden = false;
});

$('#prevImg').on('click', function() {
    currentImg = currentImg - 1 >= 0 ? currentImg - 1 : images.length - 1;
    document.getElementById('img-view').src = images[currentImg];
});
$('#nextImg').on('click', function() {
    currentImg = currentImg + 1 < images.length ? currentImg + 1 : 0;
    document.getElementById('img-view').src = images[currentImg];
})