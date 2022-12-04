// ==================== CREATING BARS AND IMPLEMENTING SORTING ALGORITHMS ====================
const barsContainer = document.querySelector(".bars-container");
const randomizeButton = document.querySelector(".randomize-btn");

// Function to generate a random number within the given range
function generateRandomNumber(start, end) {
    return (Math.floor(Math.random() * (end - start) + start));
}

// Function to create bars
function generateBars(numberOfBars) {
    for (let i = 0; i < numberOfBars; i++) {
        const bar = document.createElement('div');
        const barHeight = generateRandomNumber(1, 30);
        bar.classList.add('bar');
        bar.style.height = `${barHeight * 10}px`;
        bar.style.transform = `translateX(${i * 30}px)`;
        barsContainer.appendChild(bar);
    }
}

// Function to delete all the bars
function clearBars() {
    let bars = document.querySelectorAll(".bar");
    bars.forEach(bar => barsContainer.removeChild(bar));
}

randomizeButton.addEventListener('click', () => {
    clearBars();
    generateBars(20);
});

generateBars(20);

// ==================== JS for dropdown menu on the homepage ====================
const dropdowns = document.querySelectorAll('.algo-dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.textContent = option.textContent;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            })
            option.classList.add('active');
        })
    })
})