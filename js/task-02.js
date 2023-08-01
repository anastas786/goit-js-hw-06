
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector('#ingredients');
const ArrItem = [];


function createItemElement(arr) {
  arr.map((item) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = item;
    ArrItem.push(li);
  }).join('');

  ul.append(...ArrItem);

}


createItemElement(ingredients)


