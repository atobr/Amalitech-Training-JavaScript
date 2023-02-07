// This section of the code activates full time only option of search
// 
const check = document.getElementById('check-box');
const modeSet = document.getElementById('mode-select');
const checkMark = document.getElementById('check-mark');

const fullTime = function fullTimeOnlyOn(fullTimeSelect){
    if (fullTimeSelect.style.zIndex === '1'){
        check.style.backgroundColor = '#19202D';
        // check.style.backgroundColor = '#5964E0';
        fullTimeSelect.style.zIndex = '3';
        fullTimeSelect.style.opacity = 0.1;
} else {
        // check.style.backgroundColor = '#19202D';
        check.style.backgroundColor = '#5964E0';
        fullTimeSelect.style.zIndex = '1';
        fullTimeSelect.style.opacity = 1;
    }
}

// check.addEventListener('click', () => {
//     fullTime(check);
// });


// This section of code activates the dark mode of the page
// 
const dark = document.getElementsByClassName('check-dot')[0];
const appearance = document.querySelector('body');
const searchBar = document.getElementById('search-bar');
const inputDisplay1 = document.querySelectorAll('input')[0];
const inputDisplay2 = document.querySelectorAll('input')[1];


//This block of code toggles dark mode and light modes of the page
const mode = function darkMode(modeSelect){
    if (modeSelect.style.marginLeft === '5px'){
        dark.style.marginLeft = '30px';
        appearance.style.backgroundColor = '#121721';
        searchBar.style.backgroundColor = '#19202D';
        searchBar.style.color = '#FFFFFF';
        check.style.backgroundColor = '#FFFFFF';
        inputDisplay1.style.backgroundColor = '#19202D';
        inputDisplay2.style.backgroundColor = '#19202D';
    } else {
        dark.style.marginLeft = '5px';
        appearance.style.backgroundColor = '#F2F2F2';
        searchBar.style.backgroundColor = '#FFFFFF';
        searchBar.style.color = '#19202D';
        check.style.backgroundColor = '#19202D';
        inputDisplay1.style.backgroundColor = '#FFFFFF';
        inputDisplay2.style.backgroundColor = '#FFFFFF';
    }
}

dark.addEventListener('click', () => {
    mode(dark);
    check.addEventListener('click', () => {
        fullTime(check);
    });
});


//Fetching Json
// import {data} from './script.js';
// console.log(data.position);


// const pageContent = document.getElementById('page-content');
// const headerInfo = document.getElementById('header-info');
// const logoDiv = document.createElement('div');
// const logo = document.createElement('img');

// // logo.src = element.logo;
// // logoDiv.backgroundColor = element.logoBackground;
// logoDiv.appendChild(logo);
// logoDiv.appendChild(headerInfo);