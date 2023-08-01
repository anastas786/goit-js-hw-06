
const numbCategories = document.querySelectorAll('.item');

console.log(`Number of categories : ${numbCategories.length}`);

numbCategories.forEach(function (number) {
    console.log(`Category: ${number.firstElementChild.textContent}`);

    console.log(`Elements: ${number.querySelectorAll('li').length}`);

})


