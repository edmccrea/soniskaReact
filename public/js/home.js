//Hamburger Nav
const hamNav = document.querySelector('.ham-nav');
const ham = document.querySelector('.ham');
const menuLinks = document.querySelectorAll('.menuLink');

ham.addEventListener('click', toggleHamburger);

function toggleHamburger() {
    hamNav.classList.toggle('showNav');
    ham.classList.toggle('showClose');
}

menuLinks.forEach(menuLink => menuLink.addEventListener('click', toggleHamburger))

//Change Nav Color on Scroll
const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

//About Section View Change
const contactBtn = document.querySelector('.contact-btn');
const equipmentBtn = document.querySelector('.equipment-btn');
const locationBtn = document.querySelector('.location-btn');
const contactContent = document.querySelector('.contact-content');
const equipmentContent = document.querySelector('.equipment-content');
const locationContent = document.querySelector('.location-content');
const contactUnderline = document.querySelector('.contact-underline')
const equipmentUnderline = document.querySelector('.equipment-underline')
const locationUnderline = document.querySelector('.location-underline')

const aboutPages = [contactContent, equipmentContent, locationContent];
const aboutBtns = [contactBtn, equipmentBtn, locationBtn];
const underlines = [contactUnderline, equipmentUnderline, locationUnderline]

function aboutSelector(pageName){
    for (let i = 0; i < aboutPages.length; i++) {
        if(aboutPages[i] === pageName) {
            aboutBtns[i].classList.add('about-active');
            underlines[i].classList.remove('about-inactive');
        } else {
            aboutBtns[i].classList.remove('about-active');
            underlines[i].classList.add('about-inactive');
        }
        
    }
}

function switchViews(pageName) {
   let { display: classStyle} = getComputedStyle(pageName);
   if (classStyle === 'none') {
       pageName.style.display = 'flex'
       for (let page of aboutPages) {
           if (page !== pageName) {
               page.style.display = 'none';
           }
       }
   }
   aboutSelector(pageName)
}


contactBtn.addEventListener('click', function() {
    switchViews(contactContent)
});
equipmentBtn.addEventListener('click', function() {
    switchViews(equipmentContent)
});
locationBtn.addEventListener('click', function() {
    switchViews(locationContent)
});

//Drag & Drop 

let dropArea = document.getElementById('drop-area')

;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
})
  
function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
}

;['dragenter', 'dragover'].forEach(eventName => {
dropArea.addEventListener(eventName, highlight, false)
})

;['dragleave', 'drop'].forEach(eventName => {
dropArea.addEventListener(eventName, unhighlight, false)
})

function highlight(e) {
dropArea.classList.add('upload-highlight')
}

function unhighlight(e) {
dropArea.classList.remove('upload-highlight')
}

dropArea.addEventListener('drop', handleDrop, false)

function handleDrop(e) {
  let dt = e.dataTransfer
  let files = dt.files

  handleFiles(files)
}

function uploadFile(file) {
    let url = '/files'
    let formData = new FormData()
  
    formData.append('file', file)
  
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(() => { /* Done. Inform the user */ })
    .catch(() => { /* Error. Inform the user */ })
}

function handleFiles(files) {
    ([...files]).forEach(uploadFile)
}
  
  
  