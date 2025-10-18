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

