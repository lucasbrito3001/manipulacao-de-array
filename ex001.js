var valores = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){

        return true

    } else{

        return false

    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true

    } else{

        return false

    }
}

function adicionar(){
    
    var num = document.querySelector('input#fnum')
    var lista = document.querySelector('select#flista')
    

    if(isNum(num.value) &&  !inLista(num.value, valores)){

        valores.push(Number(num.value))
        var option = document.createElement('option')
        option.innerHTML = `Valor ${num.value} adicionado`
        lista.appendChild(option)
        res.innerHTML = ''

    } else{

        alert('Valor inválido ou já encontrado na lista!')

    }
    num.value = ''
    num.focus()
}

function analisar(){
    let res = document.querySelector('div#res')

    if(valores.length == 0){
        alert('[ERRO] Impossível analisar, adicione valores antes de finalizar')
    } else{
        
        let tot = valores.length
        valores.sort()
        let menor = valores[0]
        let maior = valores[tot - 1]
        let soma = 0
        let media = 0

        for(let pos in valores){    
            soma += valores[pos]
        }

        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O menor número adicionado foi: ${menor}</p>`
        res.innerHTML += `<p>O maior número adicionado foi: ${maior}</p>`
        res.innerHTML += `<p>A soma dos valores adicionados é: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores adicionados é: ${media}</p>`
    }
}



