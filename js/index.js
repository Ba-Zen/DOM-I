const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navA = document.querySelectorAll('a');
let mainHeader = document.querySelector('h1');
let headerButton = document.querySelector('button');
let headerImg = document.getElementById('cta-img');
let H4 = document.querySelectorAll('h4');
let pG = document.querySelectorAll('p');
let middleImg = document.getElementById('middle-img');


//Doesn't work after adding items- returns nav is not defined 
// let newA = document.createElement('a');
// let newB = document.createElement('a');
// newA.textContent = "One";
// newB.textContent = "Two";
// nav.appendChild(newA);
// nav.appendChild(newB);
// newA.style.color = "green";
// newB.style.color = "green";


navA[0].textContent = siteContent['nav']['nav-item-1'];
navA[1].textContent = siteContent['nav']['nav-item-2'];
navA[2].textContent = siteContent['nav']['nav-item-3'];
navA[3].textContent = siteContent['nav']['nav-item-4'];
navA[4].textContent = siteContent['nav']['nav-item-5'];
navA[5].textContent = siteContent['nav']['nav-item-6'];


navA.forEach(col=>col.style.color = "green");

mainHeader.textContent = siteContent['cta']['h1'];

headerButton.textContent = siteContent['cta']['button'];

headerImg.setAttribute('src', siteContent['cta']['img-src']);

H4[0].textContent = siteContent['main-content']['features-h4'];
H4[1].textContent = siteContent['main-content']['about-h4'];
H4[2].textContent = siteContent['main-content']['services-h4'];
H4[3].textContent = siteContent['main-content']['product-h4'];
H4[4].textContent = siteContent['main-content']['vision-h4'];
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


pG[0].textContent = siteContent['main-content']['features-content'];
pG[1].textContent = siteContent['main-content']['about-content'];
pG[2].textContent = siteContent['main-content']['services-content'];
pG[3].textContent = siteContent['main-content']['product-content'];
pG[4].textContent = siteContent['main-content']['vision-content'];

H4[5].textContent = siteContent['contact']['contact-h4'];
pG[5].textContent = siteContent['contact']['address'];
pG[6].textContent = siteContent['contact']['phone'];
pG[7].textContent = siteContent['contact']['email'];

pG[8].textContent = siteContent['footer']['copyright'];