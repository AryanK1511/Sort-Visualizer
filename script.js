// ==================== CREATING BARS AND IMPLEMENTING SORTING ALGORITHMS ====================
const barsContainer = document.querySelector(".bars-container");
const randomizeButton = document.querySelector(".randomize-btn");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const infoParagraph = document.querySelector(".info-para");
const bubbleSortButton = document.getElementById("bubble-sort-selection");
const selectionSortButton = document.getElementById("selection-sort-selection");
const insertionSortButton = document.getElementById("insertion-sort-selection");
const sortStartButton = document.querySelector(".start-btn");

let arr = [];
let bubbleSortButtonClicked = false;
let selectionSortButtonClicked = false;
let insertionSortButtonClicked = false;

// Function to generate a random number within the given range
function generateRandomNumber(start, end) {
    return (Math.floor(Math.random() * (end - start) + start));
}

// Function to create bars
function generateBars(numberOfBars = 25) {
    for (let i = 0; i < numberOfBars; i++) {
        const bar = document.createElement('div');
        const barHeight = generateRandomNumber(1, 30);
        bar.classList.add('bar');
        bar.style.transform = `translateX(${i * (800 / numberOfBars)}px)`;
        bar.style.height = `${(barHeight * 10) + 5}px`;
        bar.id = i;
        bar.style.width = `${800 / numberOfBars}px`;

        // Pushing the height as the value of an element in the array
        arr.push(bar.style.height);

        // Adding the bar to the website
        barsContainer.appendChild(bar);
    }
}

// Function to delete all the bars
function clearBars() {
    let bars = document.querySelectorAll(".bar");
    bars.forEach(bar => barsContainer.removeChild(bar));
    arr = [];
}

// Ensuring that the number of bars change according to the user's choice
dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('click', () => {
        const numberOfBarsRequestedByUser = dropdownItem.innerHTML;
        clearBars();
        generateBars(numberOfBarsRequestedByUser);
    })
})

// Makes sure that the bars are reset once the randomize button is clicked
randomizeButton.addEventListener('click', () => {
    clearBars();
    generateBars();
});

// Generates bars by default when the page is loaded
generateBars();

// Changing theinformation paragraph content acording to the button clicked
bubbleSortButton.addEventListener('click', () => {
    bubbleSortButtonClicked = true;
    insertionSortButton = false;
    selectionSortButton = false;
    infoParagraph.innerHTML = `<p class="info-para">Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems.
    <ul>
      <li>Worst-case time complexity: O(n^2)</li>
      <li>Average time complexity: O(n^2)</li>
      <li>Best-case time complexity: O(n)</li>
      <li>Worst-case space complexity: O(1)</li>
    </ul>
  </p>`;
})

selectionSortButton.addEventListener('click', () => {
    bubbleSortButtonClicked = false;
    insertionSortButton = false;
    selectionSortButton = true;
    infoParagraph.innerHTML = `<p class="info-para">Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.
    <ul>
      <li>Worst-case time complexity: O(n^2)</li>
      <li>Average time complexity: O(n^2)</li>
      <li>Best-case time complexity: O(n^2)</li>
      <li>Worst-case space complexity: O(1)</li>
    </ul>
  </p>`;
})

insertionSortButton.addEventListener('click', () => {
    bubbleSortButtonClicked = false;
    insertionSortButton = true;
    selectionSortButton = false;
    infoParagraph.innerHTML = `<p class="info-para">Insertion Sort is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.
    <ul>
      <li>Worst-case time complexity: O(n^2)</li>
      <li>Average time complexity: O(n^2)</li>
      <li>Best-case time complexity: O(n)</li>
      <li>Worst-case space complexity: O(1)</li>
    </ul>
  </p>`;
})

sortStartButton.addEventListener('click', () => {
    console.log("HJello");
})

// ==================== JS for dropdown menu on the homepage ====================
const dropdowns = document.querySelectorAll('.algo-dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
    const sortingHeading = document.querySelector('.heading');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.textContent = option.textContent;
            sortingHeading.textContent = option.textContent;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
        })
    })
})