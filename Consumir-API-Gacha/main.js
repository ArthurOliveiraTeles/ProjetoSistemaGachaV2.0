var matriz=Array(10).fill("")
var titulos=Array(25)
let cont = 0

titulos[0] = "Arma"
titulos[1] = "Hu Tao"
titulos[2] = "Jean"
titulos[3] = "Amber"
titulos[4] = "Barbara"
titulos[5] = "Beidou"
titulos[6] = "Bennet"
titulos[7] = "Diluc"
titulos[8] = "Chongyun"
titulos[9] = "Fischl"
titulos[10] = "Kaeya"
titulos[11] = "Lisa"
titulos[12] = "Ningguang"
titulos[13] = "Noelle"
titulos[14] = "Razor"
titulos[15] = "Sucrose"
titulos[16] = "Xingqiu"
titulos[17] = "Xiangling"
titulos[18] = "Diona"
titulos[19] = "Xinyan"
titulos[20] = "Venti"
titulos[21] = "Keqing"
titulos[22] = "QiQi"
titulos[23] = "Mona"
titulos[24] = "Albedo"


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

        if(nomeArquivo.includes("arma")) {imagem.title=titulos[0]}
        if(nomeArquivo.includes("hutao")) {imagem.title=titulos[1]}
        if(nomeArquivo.includes("jean")) {imagem.title=titulos[2]}
        if(nomeArquivo.includes("amber")) {imagem.title=titulos[3]}
        if(nomeArquivo.includes("barbara")) {imagem.title=titulos[4]}
        if(nomeArquivo.includes("beidou")) {imagem.title=titulos[5]}
        if(nomeArquivo.includes("bennet")) {imagem.title=titulos[6]}
        if(nomeArquivo.includes("diluc")) {imagem.title=titulos[7]}
        if(nomeArquivo.includes("chongyun")) {imagem.title=titulos[8]}
        if(nomeArquivo.includes("fischl")) {imagem.title=titulos[9]}
        if(nomeArquivo.includes("kaeya")) {imagem.title=titulos[10]}
        if(nomeArquivo.includes("lisa")) {imagem.title=titulos[11]}
        if(nomeArquivo.includes("ningguang")) {imagem.title=titulos[12]}
        if(nomeArquivo.includes("noelle")) {imagem.title=titulos[13]}
        if(nomeArquivo.includes("razor")) {imagem.title=titulos[14]}
        if(nomeArquivo.includes("sucrose")) {imagem.title=titulos[15]}
        if(nomeArquivo.includes("xingqiu")) {imagem.title=titulos[16]}
        if(nomeArquivo.includes("xiangling")) {imagem.title=titulos[17]}
        if(nomeArquivo.includes("diona")) {imagem.title=titulos[18]}
        if(nomeArquivo.includes("xinyan")) {imagem.title=titulos[19]}
        if(nomeArquivo.includes("venti")) {imagem.title=titulos[20]}
        if(nomeArquivo.includes("keqing")) {imagem.title=titulos[21]}
        if(nomeArquivo.includes("qiqi")) {imagem.title=titulos[22]}
        if(nomeArquivo.includes("mona")) {imagem.title=titulos[23]}
        if(nomeArquivo.includes("albedo")) {imagem.title=titulos[24]}
    }
    
}

function Jogar() {
    //Faz a requisição GET para a minha API no LocalHost
        // Para acessar os dados da API, ler o "README.md"
    var info = FazGet("https://skygacha-project.vercel.app")
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
    //mudaMensagem.style.marginLeft = "385px"
    
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
