// iniciar lista de amigos
let listaDeAmigos = []

function adicionar (){
    // recupera o nome do amigo adicionado
    let amigo = document.getElementById('nome-amigo').value;
    listaDeAmigos.push(amigo);
    // limpar campo
    document.getElementById('nome-amigo').value = '';
    // exibir na tela
    document.getElementById('lista-amigos').textContent = listaDeAmigos;
}

function sortear(){
    // copiar lista de amigos
    let listaParaSorteio = listaDeAmigos;
    let qtdAmigos = listaParaSorteio.length;
    let qtdPareados = 0;
    // inicia a lista com a ordem dos sorteados
    let listaSorteio = [];
    // sorteia um par para cada
    while (qtdPareados < qtdAmigos){
        let sorteado = parear(listaParaSorteio);
        // verifica se houve repetição no sorteio, ou se sorteou a si mesmo
        while (sorteado == listaParaSorteio[qtdPareados] || listaSorteio.includes(sorteado)){
            sorteado = parear(listaParaSorteio);
            console.log(`amigo1 ${listaParaSorteio[qtdPareados]} amigo2 ${sorteado}`)
        }
        // adiciona a lista dos sorteados
        listaSorteio.push(sorteado);
        qtdPareados++;
    }
}
function parear(possiveisSorteados){
    // sortear um amigo aleatorio entre o primeiro e o ultimo
    let sorte = possiveisSorteados.length;
    indiceSorteado = Math.floor(Math.random() * sorte);
    let sorteado = possiveisSorteados[indiceSorteado];
    return sorteado; 
}