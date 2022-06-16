// slider script
const allSliderIndicator = document.querySelectorAll('.slider-indicator');

const allSliderWrapper = document.querySelectorAll('.slider-row');


// sildeshow function
let currentSlide = 0;
 slideShow();
function slideShow() {
    var indicatorBtn;
    for(let i = 0; i < allSliderIndicator.length; i++) {
        indicatorBtn = allSliderIndicator[i].querySelectorAll('button');
    
for(let x = 0; x < indicatorBtn.length; x++) {
    indicatorBtn[x].addEventListener('click', () => {
        indicatorBtn[currentSlide].classList.remove('active');
        indicatorBtn[x].classList.add('active');
        currentSlide = x;
        
        var sliderWrapper;
        for(let y = 0; y < allSliderWrapper.length; y++) {
            sliderWrapper = allSliderWrapper[y];
        
        sliderWrapper.style.transform = `translateX(-${10 * x}%)`;
        }
        
    })
}
}
}

/*               End Of Slider Script             */














/* const allBtn = document.querySelector('.all-btn');
const suitBtn = document.querySelector('.suit-btn');
const senatorBtn = document.querySelector('.senator-btn');
const shoeBtn = document.querySelector('.shoe-btn');
const tshirtBtn = document.querySelector('.t-shirt-btn');
const portfolioContainer = document.querySelector('.portfolio-container');
const appImgContainer = ['images/portfolio/portfolio-1.jpg', 'images/portfolio/portfolio-3.jpg', 'images/portfolio/portfolio-5.jpg'];
const cardImgContainer = ['images/portfolio/portfolio-2.jpg','images/portfolio/portfolio-4.jpg','images/portfolio/portfolio-6.jpg'];
const webImgContainer = ['images/portfolio/portfolio-7.jpg','images/portfolio/portfolio-8.jpg','images/portfolio/portfolio-9.jpg'];
const navBar = document.querySelector('.portfolio-nav');
const navBarItems = navBar.querySelectorAll('li') ;
const allImgContainer = portfolioContainer.querySelectorAll('.portfolio-img');

var allImgArray = [];
for(let i = 0; i < allImgContainer.length; i++) {
    allImgArray[i] = allImgContainer[i].src;
}

allImgBtn.addEventListener('click', () =>{
    display(allImgArray, allImgBtn);
})

appImgBtn.addEventListener('click', () =>{
    display(appImgContainer, appImgBtn);
})

cardImgBtn.addEventListener('click', () =>{
    display(cardImgContainer, cardImgBtn);
})

webImgBtn.addEventListener('click', () =>{
    display(webImgContainer, webImgBtn);
})


const display = (myArray, btn) => {
    portfolioContainer.innerHTML = '';

    for(let i = 0; i < navBarItems.length; i++) {
        navBarItems[i].classList.remove('active')
    }
    
    btn.classList.add('active');
    myArray.forEach(item =>{
    var divElem = document.createElement('div');
    divElem.classList.add('col-3');
    divElem.classList.add('app-img-container');
    
    var text;
    text = `
        <img src=${item} alt="">
        <div class="portfolio-hover-col">
            <div class="hover-col">
                <span class="material-icons btn">add</span>
                <span class="material-icons btn">attach_file</span>
            </div>
        </div>`;
    
        divElem.innerHTML = text;
        portfolioContainer.append(divElem);
    })
}
*/