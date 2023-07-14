fetch('pessoas.json')
    .then(response => response.json())
    .then(json => carregaJson(json))

// axios('pessoas.json')
//     .then(response => carregaJson(response.data))

function carregaJson(json) {

    const table = document.createElement('table')
    const tr2 = document.createElement('tr')
    let thNome = document.createElement('th')
    thNome.innerHTML = 'nome'
    tr2.appendChild(thNome)
    table.appendChild(tr2)
    let thIdade = document.createElement('th')
    thIdade.innerHTML = 'idade'
    tr2.appendChild(thIdade)
    table.appendChild(tr2)
    let thSalario = document.createElement('th')
    thSalario.innerHTML = 'salario'
    tr2.appendChild(thSalario)
    table.appendChild(tr2)

    for (i of json) {
        const tr = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = i.nome
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = i.idade
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = i.salario
        tr.appendChild(td)

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}