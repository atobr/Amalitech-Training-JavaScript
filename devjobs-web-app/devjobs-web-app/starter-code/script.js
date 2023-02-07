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
};


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
});
check.addEventListener('click', () => {
    fullTime(check);
});


//Fetching Json
// let pageData;
const webData = async() =>{
    try{
        const dataInfo = await fetch('./data.json')
        if (dataInfo.ok){
            const data = await dataInfo.json();
            console.log(data);
            // let pageData = data;
            return data;
        }
    } catch (error){
        console.log(error);
    }
}
const myObject = webData();

//Adding content to page
let content = document.getElementById('content');

const element = myObject.then((pageData) => {
    for(let i=0; i < pageData.length; i++){
        let container = document.createElement('div');
        let p1 = document.createElement('img');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('a');
        let p5 = document.createElement('p');
        let p6 = document.createElement('p');
        let dot = document.createElement('div');

        //Setting classes for elements
        p1.className = 'logo';
        p2.className = 'postedAt';
        p3.className = 'contract';
        p4.className = 'position';
        p5.className = 'company';
        p6.className = 'location';
        dot.className = 'dot';

        //Inserting logo
        let imgDiv = document.createElement('div');
        imgDiv.className = 'logoDiv';
        imgDiv.appendChild(p1);
        imgDiv.style.backgroundColor = pageData[i].logoBackground;

        p1.src = pageData[i].logo;
        p2.innerHTML = pageData[i].postedAt;
        p3.innerHTML = pageData[i].contract;
        p4.innerHTML = pageData[i].position;
        p4.href = './details.html';
        p4.target = '_blank';
        p5.innerHTML = pageData[i].company;
        p6.innerHTML = pageData[i].location;

        let topDetails = document.createElement('div');
        topDetails.className = 'topDetails';
        topDetails.appendChild(p2);
        topDetails.appendChild(dot);
        topDetails.appendChild(p3);
    
        container.appendChild(imgDiv);
        container.appendChild(topDetails);
        container.appendChild(p4);
        container.appendChild(p5);
        container.appendChild(p6);
        content.appendChild(container);
        container.className = 'container';
    };
});


const dataReturn = myObject.then((pageData)=>{
    for(let i = 0; i < pageData.length; i++){
        let variable = document.getElementsByClassName('position');
        variable[i].addEventListener('click', ()=>{
            console.log(pageData[i]);
            return pageData[i];
        });
    };
});


//This block of code display rest of information when 'Load More' button is clicked
const loadMore = document.getElementById('load-more');
loadMore.addEventListener('click', () => {
    content.style.overflow = 'visible';
    content.style.marginBottom = '200px';
    loadMore.style.display = 'none';
    content.style.height = 'fit-content';
});


//Posting job details to page
// let element2 = element.then((detailsPage) => {
//     console.log(detailsPage);
//     const pageContent = document.getElementById('page-content');
//     const headerInfo = document.getElementById('header-info');
//     const logoDiv = document.createElement('div');
//     const logo = document.createElement('img');

//     logo.src = detailsPage.logo;
//     logoDiv.style.backgroundColor = detailsPage.logoBackground;
//     logoDiv.appendChild(logo);
//     logoDiv.appendChild(headerInfo);
// });