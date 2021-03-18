function fazGet(url,) {
    var request = new XMLHttpRequest()
    request.open("GET" , url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    linha = document.createElement("tr")
    tdName = document.createElement("td")

    tdName.innerHTML = usuario.name

    linha.appendChild(tdName)

    return linha
}

function main() {
    //Faz a requisição GET para a minha API no LocalHost
        // Para acessar os dados da API, ler o "README.md"
    var info = fazGet("http://localhost:2000/gacha")
    var usuarios = JSON.parse(info)
    
    var p1 = document.getElementById("p1")
    var table = document.getElementById("tabela")
    
    usuarios.forEach(element => {
            var linha = criaLinha(element)
            table.appendChild(linha)  
    })

    p1.innerHTML = "Para dar mais 10 tiros, clique abaixo..."
    p1.style.color = "red";
    p1.style.fontSize = "30px";
}


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
}