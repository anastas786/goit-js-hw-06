
const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', handleInputBlur);

function handleInputBlur(event) {
  const input = event.target;
  const inputValue = input.value.trim();
  const dataLength = parseInt(input.getAttribute('data-length'));

  if (inputValue.length === dataLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
