
const element = {
    querry: document.querySelector('#name-input'),
    output: document.querySelector("#name-output")

};


element.querry.addEventListener('input', handlerSearch);

function handlerSearch(evt) {
    const inputValue = evt.target.value;
    const outputSpan = element.output;

    if (inputValue.trim() === '') {
        outputSpan.textContent = 'Anonymous';
    } else {
        outputSpan.textContent = inputValue;
    }
    console.dir(handlerSearch)
}
