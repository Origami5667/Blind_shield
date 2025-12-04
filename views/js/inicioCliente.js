const api = 'http://localhost:3000';
const nome = document.getElementById('nome');

fetch(api)
.then((res) => res.json())
.then((dados) => {
    nome.innerHTML = `<h1>${dados[1].nome_cliente}</h1>`
})