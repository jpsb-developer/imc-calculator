const form = document.querySelector(".form");






form.addEventListener("submit", event => {
    event.preventDefault();
    const inputWeight = event.target.querySelector('#weight');
    const inputHeight = event.target.querySelector('#height');


    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    if(!weight){
        setResult('Weight invalid');
        return;
    }

});


const createParagraph = () => {
    const p = document.createElement("p");
    return p;
}


const setResult = (mensage, isValid) =>{
    const result = document.querySelector('.result');
    result.innerHTML = '';
    const p = createParagraph();
}

