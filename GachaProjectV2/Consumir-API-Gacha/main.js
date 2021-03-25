let vetor = []

function fazGet(url,) {
    var request = new XMLHttpRequest()
    request.open("GET" , url, false)
    request.send()
    return request.responseText
}

function criaDiv(usuario) {
    var div = document.createElement("div")
    imagem = document.createElement("img")

    var nomeChar = usuario.name

    imagem.src = `imgs/${nomeChar}.jpg`

    div.appendChild(imagem)

    div.classList.add("personagens")

    return div
}

function main() {

    //Faz a requisição GET para a minha API no LocalHost
        // Para acessar os dados da API, ler o "README.md"
    var info = fazGet("http://localhost:2000/gacha")
    var usuarios = JSON.parse(info)
    
    var p1 = document.getElementById("p1")
    var area = document.getElementById("areaGacha")

    usuarios.forEach(element => {
            var div = criaDiv(element)
            vetor.push(div)
            if (vetor.length <= 10) {
                area.appendChild(div)
            } 
            
    })

    p1.innerHTML = "Para dar mais 10 tiros, clique abaixo..."
    p1.style.color = "red";
    p1.style.fontSize = "30px";
}


/*function verificar(){

    if(vetor.length >= 1) {
        var area = document.getElementById("areaGacha").remove()
    }
}*/


/*
// A função que verifica tudo
function verificar() {
    var tabela = document.getElementById("tabela").rows

    // Se o tamanho da minha tabela for igual a 0, ele chama a minha função main()
        // e pega os dados da minha API em Python.
    if(tabela.length== 0) {
        main()
    }
    // Se for maior que 0, ou seja, se já foi jogado uma vez
        // ele primeiro limpa toda a minha tabela e chama a função main().
    else {
        for(i = tabela.length - 1; i>=0; i--) {
            document.getElementById("tabela").deleteRow(i)
        }
        main()
    }
}*/