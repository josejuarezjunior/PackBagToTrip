const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
//
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach(element => {
    criarElemento(element);
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    // Criando um objeto
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    };

    criarElemento(itemAtual);

    itens.push(itemAtual);
    // O localStorage só lê um elemento do tipo JSON, uma string.
    // portanto ao enviar o objeto, é preciso utilizar "JSON.stringify(objeto)"
    // para transformá-lo em texto.
    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = '';
    quantidade.value = '';
    
    evento.target.nome.focus();

})

function criarElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);
    
}