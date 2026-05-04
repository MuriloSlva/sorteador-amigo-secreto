let amigos = [];

function adicionar(){
    // 1.Resgatar o nome inserido pelo usuário e validá-lo
    let nome = document.getElementById('nome-amigo').value;
    if(nome == ''){
        alert('Nome inválido. Tente novamente!');
        return;
    } else if(amigos.includes(nome.toUpperCase())){
        alert('Esta pessoa já foi incluída.');
        document.getElementById('nome-amigo').value = '';
        return;
    }

    // 2.Inseri-lo num vetor
    amigos.push(nome.toUpperCase());

    // 3.Exibir o vetor na tela
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.textContent = amigos.join(', ');

    // 4.Limpar o campo (nome do amigo)
    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    // 1.Verificar a quantidade mínima de amigos
    if(amigos.length <= 3){
        alert('Adicione pelo menos 4 amigos');
        return;
    }
    
    // 2.Criar um segundo vetor, cópia do original
    let copiaAmigos = [...amigos];

    // 3.Bagunçar este segundo vetor, garantindo que elementos iguais não fiquem na mesma posição
    let sorteioValido = false;

    while(!sorteioValido){
        for (let i = copiaAmigos.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [copiaAmigos[i], copiaAmigos[j]] = [copiaAmigos[j], copiaAmigos[i]];
        }

        sorteioValido = true;
        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] == copiaAmigos[i]) {
                sorteioValido = false; 
                break;
            }
        }
    }

    // 4. Exibir na tela
    let listaSorteio = document.getElementById('lista-sorteio');
    let resultadoHTML = '';

    for (let i = 0; i < amigos.length; i++) {
    
    resultadoHTML = resultadoHTML + `${amigos[i]} -> ${copiaAmigos[i]}<br>`;
}

    listaSorteio.innerHTML = resultadoHTML;
}

function reiniciar(){
    // Limpar todos os campos usados
    amigos = [];
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
