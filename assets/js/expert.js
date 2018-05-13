

function appendHtm(divId, htm) {
    let div = $(`#${divId}`);
    div.empty();
    div.append(htm);
}
async function showBenh() {
    let rep = await $.get('/benhs');

    let htm = "";
    rep.benhs.forEach(benh => {
        htm += benhHtm(benh);
    });
    changeBtnColor(4);
    appendHtm('main-view', htm);
}

function benhHtm(benh) {

    let eventsHtm = "";
    benh.events.forEach(event => {
        eventsHtm += `<li>${event}</li>`
    })
    return `
    <div class="my-well-div">
            <div class="header" style="padding: 5px;">
                <h1>${benh.name}</h1>
                <h1>Số luật xuất hiện: ${benh.ruleCount}</h1>
            </div>
            <hr>
            <div class="row">
                
                <div class="col-md-6">
                    
                    <div class="div-img">
                        <h3>Hình ảnh</h3>
                        <img class="my-img" src="${benh.urls[0]}">
                    </div>
                    <div class="div-img">
                        <button><<</button>
                        <span>1 of 2</span>
                        <button>>></button>
                        <button>+</button>
                        <button>X</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3>Tập triệu chứng</h3>
                    <ul>
                        ${eventsHtm}
                        <li>
                            <div>
                                <input placeholder="Nhap vao trieu chung moi">
                                <button>OK</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="footer" style="margin: 5px;border-radius:2px;padding:4px;">
                <h3>Phương pháp chữa trị</h3>
                <p>${benh.solution}</p>
            </div>
        </div>
    `;
}

async function showGiong() {
    let rep = await $.get('/giongs');

    let htm = "";
    rep.giongs.forEach(giong => {
        htm += giongHtm(giong);
    });
    changeBtnColor(5);
    appendHtm('main-view', htm);
}

function giongHtm(giong) {

    let eventsHtm = "";
    giong.events.forEach(event => {
        eventsHtm += `<li>${event}</li>`
    })
    return `
    <div class="my-well-div">
            <div class="header" style="padding: 5px;">
                <h1>${giong.name}</h1>
            </div>
            <hr>
            <div class="row">
                
                <div class="col-md-6">
                    
                    <div class="div-img">
                        <h3>Hình ảnh</h3>
                        <img class="my-img" src="${giong.urls[0]}">
                    </div>
                    <div class="div-img">
                        <button><<</button>
                        <span>1 of 2</span>
                        <button>>></button>
                        <button>+</button>
                        <button>X</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3>Tập đặc tính lúa</h3>
                    <ul>
                        ${eventsHtm}
                        <li>
                            <div>
                                <input placeholder="Nhập vào đặc tính mới">
                                <button>OK</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="footer" style="margin: 5px;border-radius:2px;padding:4px;">
                <h3>Thông tin chi tiết</h3>
                <p>${giong.solution}</p>
            </div>
        </div>
    `;
}

function changeBtnColor(selectId) {
    [1, 2, 3, 4, 5, 6, 7].forEach(id => {
        if (id == selectId) {
            document.getElementById(id).style.backgroundColor = "#c9f4b2";
        } else {
            document.getElementById(id).style.backgroundColor = "#ededed";
        }
    })
}

async function showLuatBenh() {
    let rep = await $.get('/luatBenhs');
    let htm = "";
    rep.rules.forEach(rule => {
        htm += luatBenhHtm(rule);
    })
    appendHtm('main-view', htm);
    changeBtnColor(2);

}

async function showLuatGiong() {
 
    let rep = await $.get('/luatGiongs');
    let htm = "";
    rep.rules.forEach(rule => {
        htm += luatGiongHtm(rule);
    })
    appendHtm('main-view', htm);
    changeBtnColor(3);
}

function luatBenhHtm(rule) {
    let eventsHtm = "";
    rule.events.forEach(event => {
        eventsHtm += `<li>${event.name}</li>`
    })
    return `
    <div class="my-well-div">
        <div class="row" style="padding:10px;">
            <div class="col-md-6">
                <h3>Thông tin luật</h3>
                <p>Mã luật: ${rule.id}</p>
                <p>
                    Người tạo: Nguyen Dinh Minh
                </p>
                <p>
                    Ngày tạo: ${formatDate(rule.createdAt)}
                </p>
                <p>
                    Ngày cập nhật: ${formatDate(rule.updatedAt)}
                </p>
                <p>
                    Mã bệnh: ${rule.result.id}
                </p>
                <p>Tên bệnh: <span onclick="xemChiTietBenh(${rule.result.id})" class="like-link">${rule.result.name}</span></p>
                <p>Tỉ lệ chính xác: ${rule.rate}</p>
            </div>
            <div class="col-md-6">
                <h3>Tập triệu chứng</h3>
                <ul>
                    ${eventsHtm}
                    <li>
                        <input>
                        <button>+</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `
}

function luatGiongHtm(rule) {
    let eventsHtm = "";
    rule.events.forEach(event => {
        eventsHtm += `<li>${event.name}</li>`
    })
    return `
    <div class="my-well-div">
        <div class="row" style="padding:10px;">
            <div class="col-md-6">
                <h3>Thông tin luật</h3>
                <p>Mã luật: ${rule.id}</p>
                <p>
                    Người tạo: Nguyen Dinh Minh
                </p>
                <p>
                    Ngày tạo: ${formatDate(rule.createdAt)}
                </p>
                <p>
                    Ngày cập nhật: ${formatDate(rule.updatedAt)}
                </p>
                <p>
                    Mã giống lúa: ${rule.result.id}
                </p>
                <p>Tên giống lúa: <span onclick="xemChiTietGiong(${rule.result.id})" class="like-link">${rule.result.name}</span></p>
            </div>
            <div class="col-md-6">
                <h3>Tập đặc tính lúa</h3>
                <ul>
                    ${eventsHtm}
                    <li>
                        <input>
                        <button>+</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `
}

function formatDate(string) {
    let date = new Date(string);
    string = date.toLocaleDateString();
    let arr = string.split('/');
    return [("00" + arr[1]).slice(-2), ("00" + arr[0]).slice(-2), arr[2] ].join('/');
}

async function xemChiTietBenh(id) {
    let rep = await $.get(`/benh?id=${id}`);
    let htm = benhHtm(rep.benh);
    appendHtm('benh-modal-body', htm);
    $('#benh-modal').modal('show');
}

async function xemChiTietGiong(id) {
    let rep = await $.get(`/giong?id=${id}`);
    let htm = giongHtm(rep.giong);
    appendHtm('giong-modal-body', htm);
    $('#giong-modal').modal('show');
}

async function showSuKienMoi() {
    let rep = await $.get('/suKienMois');
    let htm = "";
    rep.facts.forEach(fact => {
        htm += suKienMoiHtm(fact);
    })
    appendHtm('main-view', htm);
    changeBtnColor(1);
}

function suKienMoiHtm(fact) {

    let eventsHtm = "";
    fact.events.forEach(event => {
        eventsHtm += `<li>${event}</li>`
    })
    let type = "Bệnh lúa";
    if (fact.type == 'giong') type = "Chọn giống"; 
    return `
    <div class="row my-well-div">
        <div class="col-md-6">
            <p>
                Loại câu hỏi: ${type}
            </p>
            <p>
                Ngày tạo: ${formatDate(fact.createdAt)}
            </p>
            <p>
                Thông tin liên hệ: ${fact.contact || "Không có thông tin"}
            </p>
        </div>
        <div class="col-md-6">
            <h3>Tập sự kiện</h3>
            <ul>
                ${eventsHtm}
            </ul>
        </div>
    </div>
    `
}

function goiYEvent(inputId, type) {
    let key = 0;
    $(`#${inputId}`).on('input', function() {
        let time = new Date().getTime();
        key = time;
        setTimeout(function() {
            if (time === key) {
                
                let event = $(`#${inputId}`).val();
                
                io.socket.get('/findEvent', {event: event, type: type}, (res, jw) => {
                    //just ignore
                }) 
            }
        }, 200);
    });

    io.socket.on('findEvent', data => {
 
        let eventNames = data.map(event => event.name);

        $(`#${inputId}`).autocomplete({
            source: eventNames,
        })
    });
}

function goiYResult(inputId, type) {
    let key = 0;
    $(`#${inputId}`).on('input', function() {
        let time = new Date().getTime();
        key = time;
        setTimeout(function() {
            if (time === key) {
                
                let result = $(`#${inputId}`).val();
           
                io.socket.get('/findResult', {result: result, type: type}, (res, jw) => {
                    //just ignore
                }) 
            }
        }, 200);
    });

    io.socket.on('findResult', data => {

        let resultNames = data.map(result => result.name);
        $(`#${inputId}`).autocomplete({
            source: resultNames,
        })
    });
}



$(document).ready(function() {
    goiYEvent('chon-event-benh-input', 'benh');
    goiYEvent('chon-event-giong-input', 'giong');
    goiYResult('chon-benh-lua-input', 'benh');
    goiYResult('chon-giong-lua-input', 'giong');
})