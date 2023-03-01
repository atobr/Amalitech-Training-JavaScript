//Code for full time option select
const check = document.getElementById('check-box');
const modeSet = document.getElementById('mode-select');
const checkMark = document.getElementById('check-mark');

const fullTime = function fullTimeOnlyOn(fullTimeSelect){
    if (fullTimeSelect.style.zIndex === '1'){
        fullTimeSelect.style.zIndex = '3';
        fullTimeSelect.style.opacity = 0.1;
        checkMark.style.display = 'none';
        localStorage.setItem('contract', 'part time');
} else {
        document.querySelector(`#check-box.${localStorage.theme}`).style.backgroundColor = '#5964E0';
        fullTimeSelect.style.zIndex = '1';
        fullTimeSelect.style.opacity = 1;
        checkMark.style.display = 'block';
        localStorage.setItem('contract', 'full time');
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
        p4.href = `./details.html?id=${pageData[i].id}`;
        p4.value = pageData[i];
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
});

//Code for dark mode
const dark = document.getElementsByClassName('check-dot')[0];
const mode = function(modeSelect){
    if (modeSelect.style.marginLeft === '5px'){
        localStorage.setItem('theme', 'dark');
        document.querySelector('form').className = 'dark';
        document.querySelector('body').className = 'dark';
        document.getElementById('check-box').className = 'dark';
        document.getElementById('filter').className = 'dark';
        document.getElementById('search-options').className = 'dark';
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
        document.getElementById('filter').className = 'light';
        document.getElementById('search-options').className = 'light';
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


//Maintaining dark/light mode after refresh
element.then(() =>{
    if (localStorage.theme === 'dark'){
        localStorage.setItem('theme', 'dark');
        document.querySelector('form').className = 'dark';
        document.querySelector('body').className = 'dark';
        document.getElementById('check-box').className = 'dark';
        document.getElementById('filter').className = 'dark';
        document.getElementById('search-options').className = 'dark';
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
        document.getElementById('filter').className = 'light';
        document.getElementById('search-options').className = 'light';
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
});

//Returning data after search
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click',(event)=>{   
    event.preventDefault();
    searchDisplay();
    if (localStorage.status === 'on'){
        document.getElementById('search-options').style.visibility = 'hidden';
        document.getElementById('backdrop').style.display = 'none';
        localStorage.status = 'off';
    }
});

//Reurn data after search for mobile view
const mobileSearch = document.getElementById('search-background');
localStorage.setItem('status', 'off');
mobileSearch.addEventListener('click', () => {
    searchDisplay();
    document.getElementById('search-options').style.visibility = 'hidden';
});


//Function for display of search results
function searchDisplay(){
    //Cleaning old data to make way for new data
    document.getElementById('search-results').remove();   
    const searchResultsDiv = document.createElement('div');
    searchResultsDiv.id = 'search-results';
    document.querySelector('body').appendChild(searchResultsDiv);

    const mainSearch= document.getElementById('main-search').value.toUpperCase();
    const locationSearch = document.getElementById('location-search').value.toUpperCase();
          
    const search = myObject.then((pageData) => {
        if (mainSearch !== '' && locationSearch !== ''){
            let searchData = pageData.filter(data => {
                if (localStorage.contract === 'full time'){
                    return (data.location.toUpperCase().includes(locationSearch) && (data.company.toUpperCase().includes(mainSearch)) || data.position.toUpperCase().includes(mainSearch) && data.contract.toLowerCase() === localStorage.contract);
                } else {
                    return (data.location.toUpperCase().includes(locationSearch) && (data.company.toUpperCase().includes(mainSearch) || data.position.toUpperCase().includes(mainSearch)));
                };
            });
            return searchData;
        } else if(mainSearch === '' && locationSearch !== ''){
            let searchData = pageData.filter(data => {
                if (localStorage.contract === 'full time'){
                    return (data.location.toUpperCase().includes(locationSearch)  && data.contract.toLowerCase() === localStorage.contract);
                } else {
                    return (data.location.toUpperCase().includes(locationSearch));
                };
            });
            return searchData;
        } else if(mainSearch !== '' && locationSearch === ''){
            let searchData = pageData.filter(data => {
                if (localStorage.contract === 'full time'){
                    return ((data.company.toUpperCase().includes(mainSearch) || data.position.toUpperCase().includes(mainSearch)) && data.contract.toLowerCase() === localStorage.contract);
                } else {
                    return (data.company.toUpperCase().includes(mainSearch) || data.position.toUpperCase().includes(mainSearch));
                };
            });
            return searchData;
        } else if(mainSearch === '' && locationSearch === ''){
            let searchData = pageData.filter(data => {
                if (localStorage.contract === 'full time'){
                    return (data && data.contract.toLowerCase() === localStorage.contract);
                } else {
                    return data;
                };
            });
            return searchData;
        };
    });

    //Display of search results on page
    search.then((searchData) => {
        const searchResults = document.getElementById('search-results');
        document.getElementById('content').style.display = 'none';
        document.getElementById('load-more').style.display = 'none';
        document.getElementById('search-results').style.display = 'flex';
        for(let i=0; i < searchData.length; i++){
            const container = document.createElement('div');
            const p1 = document.createElement('img');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            const p4 = document.createElement('a');
            const p5 = document.createElement('p');
            const p6 = document.createElement('p');
            let dot = document.createElement('div');
    
            //Setting classes for elements
            p1.className = 'logo';
            p2.className = 'postedAt';
            p3.className = 'contract';
            p4.className = `position ${localStorage.theme}`;
            p5.className = 'company';
            p6.className = 'location';
            dot.className = 'dot';
    
            //Inserting logo
            const imgDiv = document.createElement('div');
            imgDiv.className = 'logoDiv';
            imgDiv.appendChild(p1);
            imgDiv.style.backgroundColor = searchData[i].logoBackground;
    
            p1.src = searchData[i].logo;
            p2.innerHTML = searchData[i].postedAt;
            p3.innerHTML = searchData[i].contract;
            p4.innerHTML = searchData[i].position;
            p4.href = `./details.html?id=${searchData[i].id}`;
            p4.value = searchData[i];
            p5.innerHTML = searchData[i].company;
            p6.innerHTML = searchData[i].location;
    
            const topDetails = document.createElement('div');
            topDetails.className = 'topDetails';
            topDetails.appendChild(p2);
            topDetails.appendChild(dot);
            topDetails.appendChild(p3);
        
            container.appendChild(imgDiv);
            container.appendChild(topDetails);
            container.appendChild(p4);
            container.appendChild(p5);
            container.appendChild(p6);
            searchResults.appendChild(container);
            container.className = `container ${localStorage.theme}`;
        };
    });
};

//Code for clicking on site icon
const filter = document.getElementById('filter');
filter.addEventListener('click', () => {
    document.getElementById('search-options').style.visibility = 'visible';
    document.getElementById('search-options').style.opacity = 1;
    document.getElementById('backdrop').style.display = 'block';
    document.getElementById('main-search').placeholder = 'Enter job desc...';
    localStorage.setItem('status', 'on');
});
const backdrop = document.getElementById('backdrop');
backdrop.addEventListener('click', ()=>{
    backdrop.style.display = 'none';
    document.getElementById('search-options').style.visibility = 'hidden';
    document.getElementById('search-options').style.opacity = 0;
});


//This block of code display rest of information when 'Load More' button is clicked
const loadMore = document.getElementById('load-more');
loadMore.addEventListener('click', () => {
    content.style.overflow = 'visible';
    content.style.marginBottom = '50px';
    loadMore.style.display = 'none';
    content.style.height = 'fit-content';
});

//Changing placeholder text
const tabletScreen = window.matchMedia('(max-width: 768px)');
if (tabletScreen.matches){
    document.getElementById('main-search').placeholder = 'Filter by title...';
};
