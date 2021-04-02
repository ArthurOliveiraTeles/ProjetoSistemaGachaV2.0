var matriz=Array(10).fill("")
let cont = 0

function FazGet(url,) {
    var request = new XMLHttpRequest()
    request.open("GET" , url, false)
    request.send()
    return request.responseText
}

function AdicionaMatriz(element, matriz, posicao) {
    console.log(matriz[posicao])
    var nomeArquivo = element.name+".jpg"
    matriz[posicao] = nomeArquivo

    cont += 1
    
    if((element.name == "venti") || (element.name == "klee") || (element.name == "xiao") ||
    (element.name == "diluc") || (element.name == "hutao") || (element.name == "jean") || (element.name == "keqing")
    || (element.name == "mona") || (element.name == "qiqi") || (element.name == "albedo")) {
        cont = 0
    }

    // Pegando o qtdTiros
    var p3 = document.getElementById("qtdTiros")
    p3.innerHTML = "Tiros atuais: " + cont
}

function CriaDiv(matriz) {
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
        imagem.classList.add("imagem")
    }
    
}

function Jogar() {
    //Faz a requisição GET para a minha API no LocalHost
        // Para acessar os dados da API, ler o "README.md"
    var info = FazGet("http://localhost:2000/gacha")
    var usuarios = JSON.parse(info)

    var posicao = 0
    usuarios.forEach(element => {
            // Adicionando todos os elementos da minha matriz usuarios ( via JSON ) na minha nova matriz
            AdicionaMatriz(element, matriz, posicao)
            posicao++
    })

    // Somente depois de ter adicionado os 10 personagens (elementos) que eu chamo
        // minha função CriaDiv() passando o argumento matriz para adicionar as imagens
            // nas respectivas divs
    CriaDiv(matriz)
}

function alteraMensagem() {
    // Pegando a mensagem de boas vindas
    var mudaMensagem = document.getElementById("conteudoTitulo")

    mudaMensagem.innerHTML = "Aqui estão seus tiros!"
    mudaMensagem.style.marginLeft = "390px"
    
    // Pegando o primeiro paragrafo
    var mensagem = document.getElementById("p1")
    mensagem.innerHTML = ""
    mensagem.style.height = '0px'

    // Pegando o campo welcome
        // Quando essa função for acionada
            // ela esconderá o campoWelcome
    var escondeCampo = document.getElementById("areaWelcome")
    escondeCampo.style.display = "none"
    
    // Pegando a area de Conteudo e modificando
    var areaConteudo = document.getElementById("areaConteudo2")
    //areaConteudo.style.backgroundColor = '#2b6ba0'
    areaConteudo.style.backgroundColor = 'black'
    areaConteudo.style.height = '517px'

    // Pegando o segundo paragrafo e modificando
    var texto2 = document.getElementById("texto2") 
    texto2.innerHTML = "Para dar mais 10 tiros, clique ao lado..."
    texto2.style.fontSize = "20px"
    texto2.style.marginLeft = "55px"

}
