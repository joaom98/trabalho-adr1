// Variáveis para acessar os elementos do DOM
const bairroSelect = document.getElementById('bairro');
const combustivelSelect = document.getElementById('combustivel');
const consultarMenorPrecoButton = document.getElementById('consultar-menor-preco');
const consultarPrecoMedioButton = document.getElementById('consultar-preco-medio');
const consultarListagemButton = document.getElementById('consultar-listagem');
const resultList = document.getElementById('result-list');

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData(filterFn) {

    await delay((Math.random()*1000) +500); 
    return mockData.filter(filterFn);
}

consultarMenorPrecoButton.addEventListener('click', async () => {
    const bairro = bairroSelect.value;
    const combustivel = combustivelSelect.value;

    const filteredData = await fetchData(item => {
        return (!bairro || item.bairro === bairro) &&
               (!combustivel || item.combustivel === combustivel);
    });

    const menorPreco = Math.min(...filteredData.map(item => item.preco));
    const result = filteredData.find(item => item.preco === menorPreco);

    resultList.innerHTML = '';
    if (result) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `Menor Preço: Posto ${result.nomePosto}, Endereço: ${result.endereco}, Bairro: ${result.bairro}, Combustível: ${result.combustivel}, Preço: R$ ${result.preco}, Data: ${result.dataColeta}`;
        resultList.appendChild(listItem);
    } else {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = 'Nenhum resultado encontrado.';
        resultList.appendChild(listItem);
    }
});

consultarPrecoMedioButton.addEventListener('click', async () => {
    const bairro = bairroSelect.value;

    const filteredData = await fetchData(item => {
        return (!bairro || item.bairro === bairro);
    });

    const total = filteredData.reduce((sum, item) => sum + item.preco, 0);
    const precoMedio = (filteredData.length > 0) ? (total / filteredData.length).toFixed(2) : 0;

    resultList.innerHTML = '';
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = `Preço Médio ${bairro ? `em ${bairro}` : 'Geral'}: R$ ${precoMedio}`;
    resultList.appendChild(listItem);
});

consultarListagemButton.addEventListener('click', async () => {
    const bairro = bairroSelect.value;
    const combustivel = combustivelSelect.value;

    const filteredData = await fetchData(item => {
        return (!bairro || item.bairro === bairro) &&
               (!combustivel || item.combustivel === combustivel);
    });

    resultList.innerHTML = '';
    filteredData.forEach(post => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `Posto: ${post.nomePosto}, Endereço: ${post.endereco}, Bairro: ${post.bairro}, Combustível: ${post.combustivel}, Preço: R$ ${post.preco}, Data: ${post.dataColeta}`;
        resultList.appendChild(listItem);
    });
});
