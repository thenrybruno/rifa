## Índice

- #visão geral
- #links
- #construído com
- #o-que-aprendi
- #desenvolvimento contínuo
- #autor
- #agradecimentos

## Visão geral

Este projeto consiste em criar uma rifa para sortear um número ganhador através de sorteio automático realizado na própria página online.

## Links

- URL da solução: (https://github.com/thenrybruno/rifa)
- URL do site ativo: (https://thenrybruno.github.io/rifa/)

## Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas de CSS
- Flexbox
- Flexgrid
- Javascript

## O que eu aprendi

Na produção dessa página, foi possível aprimorar meus conhecimentos em HTML e CSS, e aprender um pouco mais algumas funcionalidades da linguagem de programação Javascript. Utilizar funções criadas por mim mesmo e funções nativas do próprio JS, foi de suma importância para a construção desta rifa.

```html
    <section id="numbers">
                <span class="cursor-pointer" data-number="1">1</span>
                <span class="cursor-pointer" data-number="2">2</span>
                <span class="cursor-pointer" data-number="3">3</span>
                <span class="cursor-pointer" data-number="4">4</span>
                <span class="cursor-pointer" data-number="5">5</span>
                <span class="cursor-pointer" data-number="6">6</span>
                <span class="cursor-pointer" data-number="7">7</span>
                <span class="cursor-pointer" data-number="8">8</span>
                <span class="cursor-pointer" data-number="9">9</span>
                <span class="cursor-pointer" data-number="10">10</span>
                <span class="cursor-pointer" data-number="11">11</span>
                <span class="cursor-pointer" data-number="12">12</span>
                <span class="cursor-pointer" data-number="13">13</span>
                <span class="cursor-pointer" data-number="14">14</span>
                <span class="cursor-pointer" data-number="15">15</span>
                <span class="cursor-pointer" data-number="16">16</span>
                <span class="cursor-pointer" data-number="17">17</span>
                <span class="cursor-pointer" data-number="18">18</span>
                <span class="cursor-pointer" data-number="19">19</span>
                <span class="cursor-pointer" data-number="20">20</span>
            </section>
```
``` css
    #numbers {
    background: rgb(2, 0, 36);
    background: linear-gradient(140deg, rgba(2, 0, 36, 1) 0%, rgba(102, 102, 232, 1) 35%, rgba(0, 212, 255, 1) 100%);
    display: grid;
    grid-template-columns: 5rem 5rem 5rem 5rem 5rem;
    grid-template-rows: 5rem 5rem 5rem 5rem 5rem;
    width: 28rem;
    max-height: 23rem;
    gap: .5rem;
    margin: 1.5rem 0;
    padding-top: .8rem;
    padding-left: .5rem;
    border-radius: 3rem;
}
```
```JS
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

    if (selectNumbers.length === 20) {
        orderNumber()
        disableInput()
        
    }
})
```

### Desenvolvimento contínuo

Nos próximos projetos na qual estarei trabalhando, continuarei focado em aperfeiçoar minhas habilidades em HTML, CSS e JS. Aprender cada dia mais sobre essas técnologias e muitas outras é um foco na qual não irei deixar para trás.

## Autor

- Portifólio - Bruno Luiz (https://thenrybruno.github.io/portifolio)
- Frontend Mentor - @thenrybruno (https://www.frontendmentor.io/profile/thenrybruno)
- Github - thenrybruno (https://github.com/thenrybruno)
- LinkdIn - Bruno Almeida (https://www.linkedin.com/in/bruno-almeida-1a320422b/)

## Agradecimentos

Gostaria de agradecer a OneBitCode e todos os professores pelos estudos fornecidos e dedicação em poder fornecer os melhores estudos, agradecer o professor Isaac Pontes por ser essa fera em Javascript e nos ajudar no dia a dia e em especial ao professor Leonardo Scorza fundador da OneBitCode.