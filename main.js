document.addEventListener('DOMContentLoaded', () => {
    const numberContainer = document.querySelector('.lotto-numbers');
    const generatorBtn = document.getElementById('generator-btn');

    generatorBtn.addEventListener('click', () => {
        generateLottoNumbers();
    });

    function generateLottoNumbers() {
        numberContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach(number => {
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('number');
            numberDiv.textContent = number;
            numberContainer.appendChild(numberDiv);
        });
    }
});