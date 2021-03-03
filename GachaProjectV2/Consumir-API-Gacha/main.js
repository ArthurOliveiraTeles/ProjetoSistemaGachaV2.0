function fazGet(url) {
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
    var info = fazGet("http://localhost:2000/gacha")
    var usuarios = JSON.parse(info)
    var table = document.getElementById("tabela")
    usuarios.forEach(element => {
        var linha = criaLinha(element)
        table.appendChild(linha)
    })
}

main()