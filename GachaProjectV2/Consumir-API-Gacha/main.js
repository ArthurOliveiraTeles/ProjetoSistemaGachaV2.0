var matriz=Array(10).fill("")

function fazGet(url,) {
    var request = new XMLHttpRequest()
    request.open("GET" , url, false)
    request.send()
    return request.responseText
}

function adicionaMatriz(element, matriz, posicao) {
    console.log(matriz[posicao])
    var nomeArquivo = element.name+".jpg"
    matriz[posicao] = nomeArquivo
}

function Preenche(matriz) {
    var area = document.getElementById("areaGacha")
    area.innerHTML = "" // Limpando o conteudo da div

    for(var n=0; n<matriz.length;n++) {
        var div = document.createElement("div")
        var nomeArquivo = matriz[n]
        var imagem = document.createElement("img")
        imagem.src = 'imgs/' + nomeArquivo

        div.appendChild(imagem)
        area.appendChild(div)
        div.classList.add("personagens")
    }

    
}

function main() {

    //Faz a requisição GET para a minha API no LocalHost
        // Para acessar os dados da API, ler o "README.md"
    var info = fazGet("http://localhost:2000/gacha")
    var usuarios = JSON.parse(info)
    
    var p1 = document.getElementById("p1") 
    var posicao = 0

    usuarios.forEach(element => {
            adicionaMatriz(element, matriz, posicao)
               
            posicao++
    })
    Preenche(matriz)
    

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