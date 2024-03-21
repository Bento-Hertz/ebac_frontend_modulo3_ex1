const form = document.querySelector('#form');
const campoA = document.querySelector('#campoA');
const campoB = document.querySelector('#campoB'); 

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(campoB.value > campoA.value) {
        alert('Formulário válido');
    }
    else {
        alert('Formulário inválido');
    }
})

