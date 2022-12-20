let selectNumbers = []
let finalArray = []
let numberWin 
let nameWinner


document.getElementById('btn-escolher').addEventListener('click', () => {
    let number = document.getElementById('number')
    let name = document.getElementById('name')
    let valueName = name.value
    let valueNumber = Number(number.value)
    const numberRepeated = !selectNumbers.flat().some((el) => el === valueNumber)

    if(valueName === '' || valueNumber === ''){
        alert(`Dados incompletos. Preencha o nome e o número corretamente.`)
    } else{
        if(numberRepeated === false){
            alert(`O número ${valueNumber} já foi escolhido, por favor escolha outro número!`)
        } else if(valueNumber >= 1 && valueNumber <= 20){
            if (number && name && numberRepeated) {
                selectNumbers.push([valueName, valueNumber])
            }
        }else{
            alert(`O número ${valueNumber} é inválido.`)
        }
    }
    
    numberMarked(selectNumbers)

    name.value = ''
    number.value = ''

    if (selectNumbers.length === 5) {
        orderNumber()
        disableInput()
        
    }
})

function numberMarked(elements) {
    elements.forEach(function (element) {
        document.querySelector('[data-number="' + element[1] + '"]').classList.add('marked')
    })
}

function drawNumber() {
    let drawNumber = Math.floor(Math.random() * 20 + 1)
    return drawNumber
}

function orderNumber() {
    selectNumbers.sort((a, b) => a[1] - b[1])
    document.getElementById('btn-clean').addEventListener('click', () =>{
        console.log('clicou')
        clean(selectNumbers)
    })
}

function indexWinner(element, index, array){
    
    if(element === numberWin){
        return element
    }
}

function disableInput(){
    const inputName = document.querySelector('#name')
    const inputNumber = document.querySelector('#number')
    const btnDraw = document.querySelector('#btn-sortear')
    const btnEscolher = document.querySelector('#btn-escolher')
    const btnClean = document.querySelector('#btn-clean')
    inputName.disabled = true
    inputNumber.disabled = true
    btnDraw.disabled = false
    btnEscolher.disabled = true
    btnClean.disabled = false
}

function clean(element){
    element.forEach(function (element) {
        document.querySelector('[data-number="' + element[1] + '"]').classList.remove('marked')
    })
    selectNumbers = []
    finalArray = []

    const inputName = document.querySelector('#name')
    const inputNumber = document.querySelector('#number')
    const btnDraw = document.querySelector('#btn-sortear')
    const btnEscolher = document.querySelector('#btn-escolher')
    const btnClean = document.querySelector('#btn-clean')
    inputName.disabled = false
    inputNumber.disabled = false
    btnDraw.disabled = true
    btnEscolher.disabled = false
    btnClean.disabled = true

    document.getElementById('text').innerText = ``
    document.getElementById('text-number').innerText = ``
}

function textWinner(number, name){
    document.getElementById('text-number').innerText = `Número sorteado é o ${number}.`
    document.getElementById('text').innerText = `Parabéns ${name}, você é o(a) ganhador(a)!! Retire o seu prêmio.`
}

document.getElementById('btn-sortear').addEventListener('click', () => {
    numberWin = drawNumber()
    selectNumbers.forEach(element =>{
        element.forEach(data =>{
            finalArray.push(data)
        })
    })

    nameWinner = finalArray.findIndex(indexWinner)
    console.log(numberWin)
    console.log(finalArray.findIndex(indexWinner))
    console.log(finalArray[nameWinner - 1])
    textWinner(numberWin, finalArray[nameWinner - 1])
    const btnDraw = document.querySelector('#btn-sortear')
    btnDraw.disabled = true
})
