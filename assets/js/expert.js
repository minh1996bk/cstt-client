

function appendHtm(divId, htm) {
    let div = $(`#${divId}`);
    div.empty();
    div.append(htm);
}
async function showBenh(btnId) {
    let rep = await $.get('/benhs');

    let htm = "";
    rep.benhs.forEach(benh => {
        htm += benhHtm(benh);
    });
    changeBtnColor(btnId);
    appendHtm('main-view', htm);
}

function benhHtm(benh) {

    let eventsHtm = "";
    benh.events.forEach(event => {
        eventsHtm += `<li>${event}</li>`
    })

    let urlHtm = "";
    let length = benh.urls.length;

    benh.urls.forEach(url => {
        
        urlHtm += `
            <input value="${url}" hidden>
        `
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
                        <img id="img-view-${benh.id}" class="my-img" src="${benh.urls[0]}">
                    </div>
                    <div id="divImgSrc-${benh.id}">
                        ${urlHtm}
                    </div>
                    <div class="div-img">
                        <button onclick="prevImage('divImgSrc-${benh.id}', 'img-view-${benh.id}')"><<</button>
                        
                        <button onclick="nextImage('divImgSrc-${benh.id}', 'img-view-${benh.id}')">>></button>
     
                        <input id='inputImg-${benh.id}' type='file'>
                        <button onclick="uploadResultImage(${benh.id}, 'inputImg-${benh.id}')">OK</button>
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
            <div class="footer form-group" style="margin: 5px;border-radius:2px;padding:4px;">
                <h3>Phương pháp chữa trị</h3>
                <textarea style='height: 300px;' id='textarea-${benh.id}' class='form-control'>${benh.solution.split('+').join('\n')}</textarea>
                <button class='btn btn-success' onclick="capNhatThongTinResult('${benh.id}', 'textarea-${benh.id}')">Cập nhật</button>
            </div>
        </div>
    `;
}

async function capNhatThongTinResult(resultId, textareaId) {
    let content = $(`#${textareaId}`).val();
    let rep = await $.post('/capNhatContent', {
        resultId: resultId,
        solution: content
    });
    if (rep.success) {
        window.alert('Cập nhật thành công');
    } else {
        window.alert('Có lỗi xảy ra');
    }
    
}

function prevImage(divSrcImgId, imgViewId) {
    let divSrcImg = $(`#${divSrcImgId}`);
 
    let inputs = divSrcImg.find('input');
    let urls = [];
    let length = inputs.length;


    for (let i = 0; i < length; i ++) {
        urls.push(inputs[i].value);
    }
    
    let currentImgUrl = document.getElementById(imgViewId).src.slice(-48);
    let currentIndex = urls.indexOf(currentImgUrl);
    if (currentIndex > -1) {
        let prevImgUrl = currentIndex - 1 < 0 ? urls[length - 1] : urls[currentIndex - 1];
        document.getElementById(imgViewId).src = prevImgUrl;
    }


}

function nextImage(divSrcImgId, imgViewId) {
    let divSrcImg = $(`#${divSrcImgId}`);
 
    let inputs = divSrcImg.find('input');
    let urls = [];
    let length = inputs.length;


    for (let i = 0; i < length; i ++) {
        urls.push(inputs[i].value);
    }
    let currentImgUrl = document.getElementById(imgViewId).src.slice(-48);
    let currentIndex = urls.indexOf(currentImgUrl);
    if (currentIndex > -1) {
        let nextImgUrl = currentIndex + 1 < length ? urls[currentIndex + 1] : urls[0];
        document.getElementById(imgViewId).src = nextImgUrl;
    }
}

async function uploadResultImage(resultId, inputImgId) {

    var file_data = $(`#${inputImgId}`).prop('files')[0];
    if (!file_data) return window.alert('Chưa chọn ảnh')

    var form_data = new FormData();

    form_data.append('img', file_data);


    form_data.append('resultId', resultId);

    let rep = await $.ajax({
        url: 'uploadImage', 
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,                       
        type: 'post',
        
    });
    rep = JSON.parse(rep);
    if (rep.success) {
        $(`#${inputImgId}`).val("");
        window.alert("Thêm ảnh thành công");
    } else {
        window.alert("Có lỗi xảy ra");
    }
}
async function showGiong(btnId) {
    let rep = await $.get('/giongs');

    let htm = "";
    rep.giongs.forEach(giong => {
        htm += giongHtm(giong);
    });
    changeBtnColor(btnId);
    appendHtm('main-view', htm);
}

function giongHtm(giong) {

    let eventsHtm = "";
    giong.events.forEach(event => {
        eventsHtm += `<li>${event}</li>`
    });

    let urlHtm = "";
    let length = giong.urls.length;

    giong.urls.forEach(url => {
        
        urlHtm += `
            <input value="${url}" hidden>
        `
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
                        <img id="img-view-${giong.id}" class="my-img" src="${giong.urls[0]}">
                    </div>
                    <div id="divImgSrc-${giong.id}">
                        ${urlHtm}
                    </div>
                    <div class="div-img">
                        <button onclick="prevImage('divImgSrc-${giong.id}', 'img-view-${giong.id}')"><<</button>
                        
                        <button onclick="nextImage('divImgSrc-${giong.id}', 'img-view-${giong.id}')">>></button>

                        <input id='inputImg-${giong.id}' type='file'>
                        <button onclick="uploadResultImage(${giong.id}, 'inputImg-${giong.id}')">OK</button>
                       
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
            <div class="footer form-group" style="margin: 5px;border-radius:2px;padding:4px;">
                <h3>Thông tin chi tiết</h3>
                <textarea style='height: 300px;' id='textarea-${giong.id}' class='form-control'>${giong.solution.split('+').join('\n')}</textarea>
                <button class='btn btn-success' onclick="capNhatThongTinResult('${giong.id}', 'textarea-${giong.id}')">Cập nhật</button>
            </div>
        </div>
    `;
}

function changeBtnColor(selectId) {
    [1, 2, 3, 4, 5, 6, 7].forEach(id => {
        if (id == selectId) {
            document.getElementById(id).style.backgroundColor = "#699bce";
        } else {
            document.getElementById(id).style.backgroundColor = "#37455b";
        }
    })
}

async function showLuatBenh(btnId) {
    let rep = await $.get('/luatBenhs');
    let htm = "";
    rep.rules.forEach(rule => {
        htm += luatBenhHtm(rule);
    })
    appendHtm('main-view', htm);
    changeBtnColor(btnId);

}

async function showLuatGiong(btnId) {
 
    let rep = await $.get('/luatGiongs');
    let htm = "";
    rep.rules.forEach(rule => {
        htm += luatGiongHtm(rule);
    })
    appendHtm('main-view', htm);
    changeBtnColor(btnId);
}

function luatBenhHtm(rule) {
    let eventsHtm = "";
    rule.events.forEach(event => {
        eventsHtm += `<li>${event.name}</li>`
    })
    return `
    <div id="div-rule-${rule.id}" class="my-well-div">
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
                <button class='btn btn-danger' onclick="deleteRule(${rule.id}, 'div-rule-${rule.id}')">Xóa luật</button>
            </div>
            <div class="col-md-6">
                <h3>Tập triệu chứng</h3>
                <ul id="ul-event-list-${rule.id}">
                    ${eventsHtm}
                    <li>
                        <input id="input-event-${rule.id}" placeholder="Nhâp tên triệu chứng mới cho luật">
                        <button onclick="themSuKienChoLuat('${rule.id}', '${rule.result.id}', 'benh', 'input-event-${rule.id}', 'ul-event-list-${rule.id}')">Thêm</button>
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
    <div id="div-rule-${rule.id}" class="my-well-div">
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
                <button class='btn btn-danger' onclick="deleteRule(${rule.id}, 'div-rule-${rule.id}')">Xóa luật</button>
            </div>
            <div class="col-md-6">
                <h3>Tập đặc tính lúa</h3>
                <ul id="ul-event-list-${rule.id}">
                    ${eventsHtm}
                    <li>
                        <input id="input-event-${rule.id}" placeholder="Nhập đặc tính mới cho luật">
                        <button onclick="themSuKienChoLuat('${rule.id}', '${rule.result.id}', 'giong', 'input-event-${rule.id}', 'ul-event-list-${rule.id}')">Thêm</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `
}

async function deleteRule(ruleId, divRuleId) {
    let dicision = window.confirm(`Bạn chắc chắng muốn xóa luật Mã luật = ${ruleId}`);
    if (!dicision) return;
    let rep = await $.post('/deleteRule', {
        ruleId: ruleId
    })
    if (rep.success) {
        window.alert(`Mã luật = ${ruleId} xóa thành công!`);
        let divRule = document.getElementById(divRuleId);
        divRule.parentNode.removeChild(divRule);
    } else {
        window.alert("Có lỗi xảy ra");
    }
    
}

async function themSuKienChoLuat(ruleId, resultId, type, inputId, ulListEventsId) {
    let input = $(`#${inputId}`);
    let eventVal = input.val();
    if (!eventVal) return window.alert("Bạn phải nhập sự kiện mới");
    let ul = $(`#${ulListEventsId}`);
    let rep = await $.post('/themSuKienChoLuat', {
        ruleId: ruleId,
        resultId: resultId,
        type: type,
        newEvent: eventVal
    });

    if (rep.success) {
        window.alert("Thêm thành công");
        input.val("");
        ul.prepend(`<li>${eventVal}</li>`);
    } else {
        window.alert("Có lỗi xảy ra");
    }
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

async function showSuKienMoi(btnId) {
    let rep = await $.get('/suKienMois');
    let htm = "";
    rep.facts.forEach(fact => {
        htm += suKienMoiHtm(fact);
    })
    appendHtm('main-view', htm);
    changeBtnColor(btnId);
}

function suKienMoiHtm(fact) {

    let eventsHtm = "";
    fact.events.forEach(event => {
        eventsHtm += `<li>${event}</li>`
    })
    let type = "Bệnh lúa";
    if (fact.type == 'giong') type = "Chọn giống"; 
    return `
    <div id="div-fact-${fact.id}" class="my-well-div">
        <div class="row">
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
                <button class="btn btn-success" onclick="resolveFact(${fact.id}, 'div-fact-${fact.id}')">Giải quyết</button>
            </div>
            <div class="col-md-6">
                <h3>Tập sự kiện</h3>
                <ul>
                    ${eventsHtm}
                </ul>
            </div>
        </div>
    </div>
    `
}

async function resolveFact(factId, divFactId) {
    let rep = await $.post('/resolveFact', {
        factId: factId
    });
    let dicision = window.confirm("Bạn chắc chắn đã xử  lý câu hỏi này?")
    if (!dicision) return;
    if (rep.success) {
        let removeDiv = document.getElementById(divFactId);
        removeDiv.parentNode.removeChild(removeDiv);
        return window.alert('OK');
    } else {
        window.alert("Có lỗi xảy ra");
    }
}

function goiYEvent(modalId, inputId, ulEvents, type, btnTaoLuatId, resultInputId, url, rateInputId) {
    let key = 0;
    let events = new Set();
    
    let input = $(`#${inputId}`);

    input.on('input', function() {
        let time = new Date().getTime();
        key = time;
        setTimeout(function() {
            if (time === key) {
                
                let event = input.val();
                
                io.socket.get('/findEvent', {event: event, type: type}, (res, jw) => {
                    //just ignore
                }) 
            }
        }, 200);
    });
   input.on('keypress', function(e) {
  
        if (e.keyCode === 13) {
            let val = input.val();
            input.val("");

            events.add(val);
            $(`#${ulEvents}`).append(`<li>${val}</li>`)
        }

    })

    $(`#${btnTaoLuatId}`).on('click', function() {
        let result = $(`#${resultInputId}`).val();
        if (!result) {
            return window.alert('Bạn phải nhập trường kết quả của luật');
        }
        let eventsArr = Array.from(events);
     
        if (eventsArr.length === 0) {
            return window.alert('Bạn phải vào ít nhât 1 sự kiện');
        }
        let rate = 100;
        if (rateInputId) {
            rate = $(`#${rateInputId}`).val() || 100;
        }

        let newRule = {
            type: type,
            result: result,
            events: eventsArr,
            rate: rate
        }
        
        $.post(url, newRule, function(data, status) {
            window.alert("Thêm mới luật thành công");
            events = new Set();
            $(`#${modalId}`).modal('hide');
            $(`#${ulEvents}`).empty();
            $(`#${resultInputId}`).val("");
            $(`#${rateInputId}`).val(100);
        })

        

    })

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
  
    goiYEvent('them-luat-benh-modal','chon-event-benh-input', 'ul-benh-events', 'benh', 'tao-luat-benh', 'chon-benh-lua-input', '/taoluatbenh', 'ti-le-chinh-xac');
    goiYEvent('them-luat-giong-modal', 'chon-event-giong-input', 'ul-giong-events', 'giong', 'tao-luat-giong', 'chon-giong-lua-input', '/taoluatgiong');
    goiYResult('chon-benh-lua-input', 'benh');
    goiYResult('chon-giong-lua-input', 'giong');
})


function themGiongMoi(btnId) {
    changeBtnColor(btnId);
}
function themBenhMoi(btnId) {
    changeBtnColor(btnId);
}