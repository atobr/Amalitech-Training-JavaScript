//Cpde for full time option select
const check = document.getElementById('check-box');
const modeSet = document.getElementById('mode-select');
const checkMark = document.getElementById('check-mark');

const fullTime = function fullTimeOnlyOn(fullTimeSelect){
    if (fullTimeSelect.style.zIndex === '1'){
        check.style.backgroundColor = '#19202D';
        fullTimeSelect.style.zIndex = '3';
        fullTimeSelect.style.opacity = 0.1;
} else {
        check.style.backgroundColor = '#5964E0';
        fullTimeSelect.style.zIndex = '1';
        fullTimeSelect.style.opacity = 1;
    }
};

check.addEventListener('click', () => {
    fullTime(check);
});


//Fetching data
const webData = async() =>{
    try{
        const dataInfo = await fetch('./data.json')
        if (dataInfo.ok){
            const data = await dataInfo.json();
            console.log(data);
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
        p4.className = 'position light';
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
        p4.value = pageData[i];
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
        container.className = 'container light';
    };
    // console.log(document.getElementsByClassName('check-dot')[0]);
    // return document.getElementsByClassName('check-dot')[0];
});

//Code for dark mode
const dark = document.getElementsByClassName('check-dot')[0];
const mode = function(modeSelect){
    if (modeSelect.style.marginLeft === '5px'){
        localStorage.setItem('theme', 'dark');
        document.querySelector('form').className = 'dark';
        document.querySelector('body').className = 'dark';
        document.getElementById('check-box').className = 'dark';
        dark.style.marginLeft = '30px';
        const inputSection = document.getElementsByClassName('input');
        for (let i = 0; i < inputSection.length; i++){
            inputSection[i].className = 'input dark';
        };
        const position = document.getElementsByClassName('position');
        for (let i = 0; i < position.length; i++){
            position[i].className = 'position dark';
        };
        const jobs = document.getElementsByClassName('container');
        for (let i = 0; i < jobs.length; i++){
            jobs[i].className = 'container dark';
        };
    } else {
        localStorage.setItem('theme', 'light');
        document.querySelector('form').className = 'light';
        document.querySelector('body').className = 'light';
        document.getElementById('check-box').className = 'light';
        dark.style.marginLeft = '5px';
        const inputSection = document.getElementsByClassName('input');
        for (let i = 0; i < inputSection.length; i++){
            inputSection[i].className = 'input light';
        };
        const position = document.getElementsByClassName('position');
        for (let i = 0; i < position.length; i++){
            position[i].className = 'position light';
        };
        const jobs = document.getElementsByClassName('container');
        for (let i = 0; i < jobs.length; i++){
            jobs[i].className = 'container light';
        };
    };
};
dark.addEventListener('click', () => {
    mode(dark);
});

//Returning data after search
const searchButton = document.getElementById('search-button');
const mainSearch= document.getElementById('main-search').value;
const locationSearch = document.getElementById('location-search').value;
    searchButton.addEventListener('click',()=>{        
        // const search =myObject.then((pageData) => {
        //     for (let i=0; i < pageData.length; i++){
        //         if (locationSearch in pageData[i] && mainSearch in pageData[i]){
        //             console.log(pageData[i]);
        //             return pageData[i];
        //         };
        //     };
        // });
        // event.preventDefault();
        console.log(mainSearch);
        console.log(locationSearch);
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