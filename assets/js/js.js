
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
        let htm = `
                <h1>Tên bệnh : Sâu cuốn lá</h1>
                <hr>
                <h2>Các triệu chứng: </h2>
                <ul>
                    <li>Lá vàng</li>
                    <li>Có sâu</li>
                </ul>
                <hr>
                <h2>Một só hình ảnh</h2>
                <div>
                    <button id="prevImg"><<</button>
                    <img id="img-view" src="http://9mobi.vn/cf/images/2015/03/nkk/hinh-dep-1.jpg" style="width: 100%; height: 400px;">
                    <button id="nextImg">>></button>
                </div>
                <hr>
                <h2>Biện pháp chữa trị</h2>
                <ul>
                    <li>Phun thuốc trừ sâu</li>
                </ul>
        `;
        $('#search-result').empty();
        $('#search-result').append(htm);

    })
    events = [];
});

$('#add-new-rule').on('click', function() {

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

async function updateResult(id) {

    let rep = await $.get(`/result/${id}`);
    let result = rep.result;
    let htm =  `
    <div class="modal-dialog">
        <div class="modal-content">
  
            <!-- Modal Header -->
            <div class="modal-header">
            <h4 class="modal-title">Biện pháp chữa trị</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
    
            <!-- Modal body -->
            <div class="modal-body">
                <h4>Tên bệnh</h4>
                <input id="name-text" value="${result.name}">
                <hr>
                <h4>Biện pháp chữa trị</h4>
                <textarea id="solution-text">${result.solution}</textarea>
            </div>
    
            <!-- Modal footer -->
            <div class="modal-footer">
            <button type="button" class="btn btn-danger" onclick="doUpdateResult(${result.id})">Cập nhật</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Trở về</button>
            </div>
  
        </div>
    </div>
    `;
    let modal = $('#myModal');
    modal.empty();
    modal.append(htm);
    modal.modal('show');
}

async function doUpdateResult(id) {
    let newName = $('#name-text').val();
    let newSolution = $('#solution-text').val();

    let updatedResult = {
        id: id,
        name: newName,
        solution: newSolution
    }
    $('#myModal').empty();
    $('#myModal').modal('hide');
    await $.post('/updateResult', updatedResult);
    window.alert('Cập nhật thành công');


}