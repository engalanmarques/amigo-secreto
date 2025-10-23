// iniciar lista de amigos
let listaDeAmigos = []

function adicionar (){
    // recupera o nome do amigo adicionado
    let amigo = document.getElementById('nome-amigo').value;
    if (amigo === ''){
        alert('Por favor, insira um nome válido.');
        return;
    }
    if (listaDeAmigos.includes(amigo)){
        alert('Amigo já adicionado. Insira um nome diferente.');  
        return;
    }
    listaDeAmigos.push(amigo);
    // limpar campo
    document.getElementById('nome-amigo').value = '';
    // exibir na tela
    document.getElementById('lista-amigos').textContent = listaDeAmigos;
}

function sortear(){
    if (listaDeAmigos.length < 3){
        alert('Adicione pelo menos três amigos para realizar o sorteio.');
        return;
    }
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
        }
        // adiciona a lista dos sorteados
        listaSorteio.push(sorteado);
        qtdPareados++;
    }
    exibirNaTela(listaDeAmigos, listaSorteio);
}
function parear(possiveisSorteados){
    // sortear um amigo aleatorio entre o primeiro e o ultimo
    let sorte = possiveisSorteados.length;
    let indiceSorteado = Math.floor(Math.random() * sorte);
    let sorteado = possiveisSorteados[indiceSorteado];
    return sorteado; 
}
function exibirNaTela(listaPresenteia, listaPresenteado){
    let contador = 0;
    let resultado = document.getElementById('lista-sorteio');
    let presenteia ='';
    let presenteado = '';
    while (contador < listaPresenteia.length){
        presenteia = listaPresenteia[contador];
        presenteado = listaPresenteado[contador];
        frase = `${presenteia} --> ${presenteado}<br>`;
        resultado.innerHTML += frase;
        contador++;
        }
}
function reiniciar(){
    let escolha = prompt('Deseja manter a lista de amigos? 1 - SIM 2 - NAO');
    if (escolha == 1){
        //limpar resultado do sorteio
        document.getElementById('lista-sorteio').textContent = '';
    } else if (escolha == 2){
        // limpar resultado do sorteio
        document.getElementById('lista-sorteio').textContent = '';
        //zerar lista de amigos
        listaDeAmigos = []
        // limpar amigos incluidos
        document.getElementById('lista-amigos').textContent = '';

    } else{
        alert("Opção inválida");
       return
    }
    

}