const pageID = document.URL.substring(document.URL.lastIndexOf('='), document.URL.length).slice(1);

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
const detailsPageData = myObject.then((pageData) =>{
    const pageObject = pageData.filter(data =>{
        return data.id === parseInt(pageID);
    });
    console.log(pageObject);
    return pageObject;
});

//Adding content to page
const pageContent = document.getElementById('page-content');
const element = detailsPageData.then((pageData) =>{
    const companyLogo = document.getElementById('company-logo');
    const companyName = document.getElementById('company-name');
    const roleSummary = document.getElementById('role-summary');
    const footerRole = document.getElementById('role');
    const applyBtn = document.getElementsByClassName('apply');
    const companySite = document.getElementById('company-link');
    
    const logo = document.createElement('img');
    const company = document.createElement('div');
    const site = document.createElement('div');
    const postedAt = document.createElement('div');
    const contract = document.createElement('div');
    const topInfo = document.createElement('div');
    const position = document.createElement('div');
    const location  = document.createElement('div');
    const description = document.createElement('div');
    const heading1 = document.createElement('p');
    const requirement = document.createElement('div');
    const heading2 = document.createElement('p');
    const jobRole = document.createElement('div');


    logo.className = 'logo';
    company.className = 'company';
    site.className = 'site';
    postedAt.className = 'posted-at';
    contract.className = 'contract';
    topInfo.className = 'top-info';
    position.className = 'position';
    location.className = 'location';
    description.className = 'description';
    heading1.className = 'heading';
    requirement.className = 'heading';
    heading2.className = 'heading';
    jobRole.className = 'job-role';


    site.innerHTML = pageData[0].website; //Company site. eg->scoot.com
    companyLogo.style.backgroundColor = pageData[0].logoBackground;
    company.innerHTML = pageData[0].company;
    logo.src = pageData[0].logo;
    postedAt.innerHTML = pageData[0].postedAt;
    contract.innerHTML = pageData[0].contract;
    position.innerHTML = pageData[0].position;
    location.innerHTML = pageData[0].location;
    description.innerHTML = pageData[0].description;
    heading1.innerHTML = 'Requirements';
    requirement.innerHTML = pageData[0].requirements.content;
    const requirementItems = document.createElement('ul');
    footerRole.innerHTML = pageData[0].position; 
    for (let i=0; i<pageData[0].requirements.items.length; i++){
        const item = document.createElement('li');
        item.innerHTML = pageData[0].requirements.items[i];
        requirementItems.appendChild(item);
    };
    heading2.innerHTML = 'What You Will Do';
    jobRole.innerHTML = pageData[0].role.content;
    const jobRoleItems = document.createElement('ol');
    for (let i=0; i<pageData[0].role.items.length; i++){
        const item = document.createElement('li');
        item.innerHTML = pageData[0].role.items[i];
        jobRoleItems.appendChild(item);
    };
    for (let i = 0; i < applyBtn.length; i++){
        applyBtn[i].href = pageData[0].apply;
        applyBtn[i].target = '_blank';
    };
    companySite.href = pageData[0].website;
    companySite.target = '_blank';


    companyName.appendChild(company);
    companyName.appendChild(site);
    companyLogo.appendChild(logo);
    topInfo.appendChild(postedAt);
    topInfo.appendChild(contract);
    roleSummary.appendChild(topInfo);
    roleSummary.appendChild(position);
    roleSummary.appendChild(location);
    pageContent.appendChild(description);
    pageContent.appendChild(heading1);
    pageContent.appendChild(requirementItems);
    pageContent.appendChild(heading2);
    pageContent.appendChild(jobRoleItems);
});


//Code for dark mode
const dark = document.getElementsByClassName('check-dot')[0];
const mode = function(modeSelect){
    if (modeSelect.style.marginLeft === '5px'){
        localStorage.setItem('theme', 'dark');
        document.querySelector('body').className = 'dark';
        dark.style.marginLeft = '30px';
        const company = document.getElementsByClassName('company');
        for (let i = 0; i < company.length; i++){
            company[i].className = 'company dark';
        };
        document.getElementById('company-link').className = 'dark';
        document.getElementById('page-content').className = 'dark';
        document.getElementById('information-bar').className = 'dark';
        document.querySelector('footer').className = 'dark';
        document.getElementById('role').className = 'dark';
        const heading = document.getElementsByClassName('heading');
        for(let i = 0; i < heading.length; i++){
            heading[i].className = 'heading dark';
        };
        const position = document.getElementsByClassName('position');
        for (let i = 0; i < position.length; i++){
            position[i].className = 'position dark';
        };
    } else {
        localStorage.setItem('theme', 'light');
        document.querySelector('body').className = 'light';
        dark.style.marginLeft = '5px';
        document.getElementById('company-site').className = 'light';
        document.getElementById('company-link').className = 'light';
        const company = document.getElementsByClassName('company');
        for (let i = 0; i < company.length; i++){
            company[i].className = 'company light';
        };
        document.getElementById('page-content').className = 'light';
        document.getElementById('information-bar').className = 'light';
        document.querySelector('footer').className = 'light';
        document.getElementById('role').className = 'light';
        const position = document.getElementsByClassName('position');
        for (let i = 0; i < position.length; i++){
            position[i].className = 'position light';
        };
        const heading = document.getElementsByClassName('heading');
        for(let i = 0; i < heading.length; i++){
            heading[i].className = 'heading light';
        };
    };
};
dark.addEventListener('click', () => {
    mode(dark);
});


//Maintaining dark/light theme after refresh
element.then(()=>{
    if (localStorage.theme === 'dark'){
        localStorage.setItem('theme', 'dark');
        document.querySelector('body').className = 'dark';
        dark.style.marginLeft = '30px';
        document.getElementById('company-site').className = 'dark';
        document.getElementById('company-link').className = 'dark';
        const company = document.getElementsByClassName('company');
        for (let i = 0; i < company.length; i++){
            company[i].className = 'company dark';
        };
        document.getElementById('page-content').className = 'dark';
        document.getElementById('information-bar').className = 'dark';
        document.querySelector('footer').className = 'dark';
        document.getElementById('role').className = 'dark';
        const heading = document.getElementsByClassName('heading');
        for (let i = 0; i < heading.length; i++){
            heading[i].className = 'heading dark';
        };
        const position = document.getElementsByClassName('position');
        for (let i = 0; i < position.length; i++){
            position[i].className = 'position dark';
        };
    } else {
        localStorage.setItem('theme', 'light');
        document.querySelector('body').className = 'light';
        dark.style.marginLeft = '5px';
        document.getElementById('company-site').className = 'light';
        document.getElementById('company-link').className = 'light';
        const company = document.getElementsByClassName('company');
        for (let i = 0; i < company.length; i++){
            company[i].className = 'company light';
        };
        document.getElementById('page-content').className = 'light';
        document.getElementById('information-bar').className = 'light';
        document.querySelector('footer').className = 'light';
        document.getElementById('role').className = 'light';
        const position = document.getElementsByClassName('position');
        for (let i = 0; i < position.length; i++){
            position[i].className = 'position light';
        };
        const heading = document.getElementsByClassName('heading');
        for(let i = 0; i < heading.length; i++){
            heading[i].className = 'heading light';
        };
    };
});

