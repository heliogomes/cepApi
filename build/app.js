


document.getElementById('btn').addEventListener('click', pesquisarCEP);

function preencherFormulario(endereco){
    document.getElementById('log').value = endereco.logradouro;
    document.getElementById('bai').value = endereco.bairro;
    document.getElementById('loc').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
    document.getElementById('cep1').value = endereco.cep;

    log = document.getElementById('log')
    bai = document.getElementById('bai')
    loc = document.getElementById('loc')
    uf = document.getElementById('uf')
    cep1 = document.getElementById('cep1')

    log.textContent = document.getElementById('log').value = endereco.logradouro;
    bai.textContent = document.getElementById('bai').value = endereco.bairro;
    loc.textContent = document.getElementById('loc').value = endereco.localidade;
    uf.textContent = document.getElementById('uf').value = endereco.uf;
    cep1.textContent = document.getElementById('cep1').value = endereco.cep;
}
 
async function pesquisarCEP (){
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherFormulario(endereco);
}
