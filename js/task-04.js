
let counterValue = 0;
        const valueSpan = document.getElementById('value');
        const incrementButton = document.querySelector('[data-action="increment"]');
        const decrementButton = document.querySelector('[data-action="decrement"]');

        incrementButton.addEventListener('click', () => {
            counterValue += 1;
            updateCounterValue();
        });

        decrementButton.addEventListener('click', () => {
            counterValue -= 1;
            updateCounterValue();
        });

        function updateCounterValue() {
            valueSpan.textContent = counterValue;
        }



