const marca = 59;
const modelo = 5940;
const ano = '2014-3';

const corpo = document.querySelector('.response')

fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos/${ano}`)
.then(response => {        
    return response.json()})
.then(data => {

    corpo.innerHTML = `
        Ano do Modelo: ${data.AnoModelo} <br>
        Código na tabela Fipe: ${data.CodigoFipe} <br>
        Combustível: ${data.Combustivel} <br>
        Marca: ${data.Marca} <br>
        Mês de Referência: ${data.MesReferencia} <br>
        Modelo: ${data.Modelo} <br>
        Sigla do Combustível: ${data.SiglaCombustivel} <br>
        Tipo de Veículo: ${data.TipoVeiculo} <br>
        Valor: ${data.Valor} <br>
        `   
})



