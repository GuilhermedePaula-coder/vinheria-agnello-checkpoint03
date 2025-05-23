const vinhos = [
    { nome: "Vinho Espumante", tipo: "Doce", safra: 2014, estoque: 5 },
    { nome: " Vinho Licoroso", tipo: "Porto", safra: 2022, estoque: 10 },
    { nome: "Pinot Noir", tipo: "Tinto", safra: 2015, estoque: 3 },
    { nome: "Chardonnay", tipo: "Branco", safra: 2010, estoque: 8 }
];

function adicionarVinho(nome, tipo, safra, estoque) {
    vinhos.push({ nome, tipo, safra, estoque });
}

function listarVinhos() {
    console.log("Lista de vinhos:");
    vinhos.forEach((vinho, index) => {
        console.log(`${index + 1}. ${vinho.nome} (${vinho.tipo}, ${vinho.safra}) - Estoque: ${vinho.estoque}`);
    });
}

function estoqueBaixo() {
    return vinhos.filter(v => v.estoque < 5);
}

function estoqueTotal() {
    return vinhos.reduce((total, v) => total + v.estoque, 0);
}

function nomesCaixaAlta() {
    return vinhos.map(v => v.nome.toUpperCase());
}

// Execução do código
listarVinhos();

const baixos = estoqueBaixo();
console.log("Vinhos com estoque abaixo de 5:");
baixos.forEach(v => console.log(`${v.nome} - Estoque: ${v.estoque}`));

const total = estoqueTotal();
console.log(`Estoque Total: ${total}`);

const nomesCaixa = nomesCaixaAlta();
console.log("Nomes dos vinhos em caixa alta:");
nomesCaixa.forEach(n => console.log(n));

// Exibição via alert (em ambiente de navegador)
alert("Lista de vinhos:\n" + vinhos.map(v => `${v.nome} (${v.tipo}, ${v.safra}) - Estoque: ${v.estoque}`).join("\n"));
alert("Vinhos com estoque < 5:\n" + baixos.map(v => `${v.nome} - Estoque: ${v.estoque}`).join("\n"));
alert(`Estoque total: ${total}`);
alert("Nomes dos vinhos em CAIXA ALTA:\n" + nomesCaixa.join("\n"));
