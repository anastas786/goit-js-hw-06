



// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input), підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// < input type = "text" id = "name-input" placeholder = "Please enter your name" />
//     <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


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
