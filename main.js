document.addEventListener('DOMContentLoaded', () => {
    const numberContainer = document.querySelector('.lotto-numbers');
    const generatorBtn = document.getElementById('generator-btn');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check saved theme or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
    updateThemeBtnText(currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        const theme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeBtnText(theme);
    });

    function updateThemeBtnText(theme) {
        themeToggleBtn.textContent = theme === 'dark' ? 'White Mode' : 'Dark Mode';
    }

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
