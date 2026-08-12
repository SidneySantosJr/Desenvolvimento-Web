var fonte = document.querySelector('body > table > tbody > tr:nth-child(3) > td > form > div.divContentBox > div.divContentBoxBody > table > tbody'); //Seleciona a lista da página Web através do caminho HTML
var lista = fonte.querySelectorAll('tr'); //Seleciona todas as linhas (tr) da

var dados = Array.from(lista).map(linha => {const celulas = linha.querySelectorAll('td'); //transforma a coleção de elementos em um Array (antes era lista de nós), mapeia cada linha e procura todas as células (td) em cada linha
    if (celulas.length < 9) return null; //caso a célula tenha menos de 9 colunas ela é descartada
    return { //Vai atribuir um nome para cada elemento da linha
        disciplina: celulas[0].innerText.trim(),
        periodo: celulas[1].innerText.trim(),
        atendida: celulas[2].innerText.trim(),
        tipo: celulas[3].innerText.trim(),
        ramificacao: celulas[4].innerText.trim(),
        creditos: celulas[5].innerText.trim(),
        chTotal: celulas[6].innerText.trim(),
        travaCredito: celulas[7].innerText.trim(),
        turmaNoPeriodo: celulas[8].innerText.trim()
    };
}).filter(item => item !== null); //tira as linhas que retornaram Null

const resultado = JSON.stringify(dados, null, 2); //transforma em arquivo JSON
copy(resultado);
