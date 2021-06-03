var URL_BASE = "http://localhost:3000/";


function embaralharArray(array) {
    for (var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
}

function carregarCadeiras() {
    const url = URL_BASE + 'cadeira';
    callAPI(url, 'GET', function (json) {
        document.getElementById('catalogo').innerHTML = ``
        var produtos = []
        for (var x = 0; json.length > x; x++) {
            produtos.push(json[x])
        }
        var produtos = embaralharArray(produtos);
        for(i in produtos) {
            if(produtos[i].disponivel==true){
                document.getElementById('catalogo').innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top"
                        src="${produtos[i].urlImg}"
                        alt="Imagem de capa do card">
                    <div class="card-body">
                        <h5 class="card-title">${produtos[i].modelo}</h5>
                        <button class="botão" type="button" data-toggle="collapse" data-target="#collapse_${produtos[i].id}" aria-expanded="false"
                            aria-controls="collapseExample">
                            Saiba mais +
                        </button>
                        </p>
                        <div class="collapse" id="collapse_${produtos[i].id}">
                            <div class="card card-body">
                                ${produtos[i].descricao}
                            </div>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="margin: -6px 0;">R$${produtos[i].preco}</li>
                        <li class="list-group-item" style="margin: -6px 0;">Em estoque</li>
                    </ul>
                    <div class="card-body" style="margin: -6px 0;">
                        <a href="#" class="card-link">Comprar</a>
                    </div>
                </div>
            `
            }
            else{
                document.getElementById('catalogo').innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top"
                        src="${produtos[i].urlImg}"
                        alt="Imagem de capa do card">
                    <div class="card-body">
                        <h5 class="card-title">${produtos[i].modelo}</h5>
                        <button class="botão" type="button" data-toggle="collapse" data-target="#collapse_${produtos[i].id}" aria-expanded="false"
                            aria-controls="collapseExample">
                            Saiba mais +
                        </button>
                        </p>
                        <div class="collapse" id="collapse_${produtos[i].id}">
                            <div class="card card-body">
                                ${produtos[i].descricao}
                            </div>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="margin: -6px 0;">R$${produtos[i].preco}</li>
                        <li class="list-group-item" style="margin: -6px 0;">Fora de Estoque</li>
                    </ul>
                    <div class="card-body" style="margin: -6px 0;">
                        <a href="#" class="card-link">Comprar</a>
                    </div>
                </div>
            `
            }
        }
    })
}

function criarCadeira() {
    const url = URL_BASE + 'cadeira';
    if(document.getElementById('criar_disponivel-true').checked == true) {
        var disponivel = true;
    } else {
        var disponivel = false;
    }
    var cadeira = {
        modelo: document.getElementById('criar_modelo').value,
        descricao: document.getElementById('criar_descricao').value,
        preco: document.getElementById('criar_preco').value,
        urlImg: document.getElementById('criar_urlImg').value,
        disponivel: disponivel
    }
    callAPI(url, 'POST', function(json) {}, cadeira)
    window.location.reload()
}
function carregarSeletores() {
    const url = URL_BASE + 'cadeira';
    callAPI(url, 'GET', function(json) {
        document.getElementById('deletar-cadeira').innerHTML = ``
        for (i in json) {
            document.getElementById('deletar-cadeira').innerHTML += `
                <option value='${json[i].id}'>${json[i].modelo}</option>
            `
            document.getElementById('atualizar-cadeira').innerHTML += `
                <option value='${json[i].id}'>${json[i].modelo}</option>
            `
        }
    })
}
function atualizarCadeiraForm() {
    const url = URL_BASE + 'cadeira/' + document.getElementById('atualizar-cadeira').value;
    callAPI(url, 'GET', function(json) {
        document.getElementById('atualizar_modelo').value = json.modelo
        document.getElementById('atualizar_descricao').value = json.descricao
        document.getElementById('atualizar_preco').value = json.preco
        document.getElementById('atualizar_urlImg').value = json.urlImg
        if(json.disponivel == true) {
            document.getElementById('atualizar_disponivel-true').checked = true
        } else {
            document.getElementById('atualizar_disponivel-false').checked = true
        }
    })
}
function atualizarCadeira() {
    const url = URL_BASE + 'cadeira'
    if(document.getElementById('atualizar_disponivel-true').checked == true) {
        var disponivel = true;
    } else {
        var disponivel = false;
    }
    var cadeira = {
        id: document.getElementById('atualizar-cadeira').value,
        modelo: document.getElementById('atualizar_modelo').value,
        descricao: document.getElementById('atualizar_descricao').value,
        urlImg: document.getElementById('atualizar_urlImg').value,
        preco: document.getElementById('atualizar_preco').value,
        disponivel: disponivel
    }
    callAPI(url, 'PATCH', function(json) {

    }, cadeira)
    window.location.reload()
}
function deletarCadeira() {
    const url = URL_BASE + 'cadeira/' + document.getElementById('deletar-cadeira').value
    callAPI(url, 'DELETE', function(json){})
    window.location.reload()
}

function callAPI(url, method, callback, data) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open(method, url, true);
    if (method == "POST" || method == "PUT" || method == "PATCH") {
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    }
    xhr.onload = function () {
        if (xhr.status == 200 || xhr.status == 201) {
            callback(xhr.response);
        }
    }
    if (data) {
        xhr.send(JSON.stringify(data))
    } else {
        xhr.send();
    }
}