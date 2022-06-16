//     filter Script
const special_price_dropdown = document.querySelector('.product-section-dropdown-btn');
const filterContainer = document.querySelector('.filter-container');
const filterBtns = filterContainer.querySelectorAll('li');
const filter_btn_array = [];

for(let i = 0; i < filterBtns.length; i++) {
    filter_btn_array[i] = filterBtns[i].innerHTML;
}

const allImgContainer = document.querySelector('.allImg-container');
const allImg = allImgContainer.querySelectorAll('img');
const allImgArray = [];
for(let i = 0; i < allImg.length; i++ ) {
    allImgArray[i] = allImg[i].src;
}

const firstImg = allImgContainer.querySelectorAll('.first-item-batch');
var firstImgArray = [];
for(let i = 0; i < firstImg.length; i++ ) {
    firstImgArray[i] = firstImg[i].src;
}

const secondImg = allImgContainer.querySelectorAll('.second-item-batch');
const secondImgArray = [];
for(let i = 0; i < secondImg.length; i++ ) {
    secondImgArray[i] = secondImg[i].src;
}

const thirdImg = allImgContainer.querySelectorAll('.third-item-batch');
const thirdImgArray = [];
for(let i = 0; i < thirdImg.length; i++ ) {
    thirdImgArray[i] = thirdImg[i].src;
}

const fourthImg = allImgContainer.querySelectorAll('.fourth-item-batch');
const fourthImgArray = [];
for(let i = 0; i < fourthImg.length; i++ ) {
    fourthImgArray[i] = fourthImg[i].src;
}

filterBtns[0].addEventListener('click', () => {
    display(allImgArray, filterBtns[0]);
})

filterBtns[1].addEventListener('click', () => {
    display(firstImgArray, filterBtns[1]);
})

filterBtns[2].addEventListener('click', () => {
    display(secondImgArray, filterBtns[2]);
})

filterBtns[3].addEventListener('click', () => {
    display(thirdImgArray, filterBtns[3]);
})

filterBtns[4].addEventListener('click', () => {
    display(fourthImgArray, filterBtns[4]);
})

// Display Function
const display = (myArray, btn) => {
    allImgContainer.innerHTML = '';
    special_price_dropdown.innerHTML = btn.innerHTML;

    var divElem = document.createElement('div');
    divElem.classList.add('row');
    divElem.classList.add('px-4');
    divElem.classList.add('d-flex');
    divElem.classList.add('justify-content-between');

    for(let i = 0; i < filterBtns.length; i++) {
        filterBtns[i].classList.remove('active')
    }
    
    btn.classList.add('active');
    var text = '';
     for(let i = 0; i < myArray.length; i++){
    text += `
            <div class="product-container">
            <a href="product-page2.html"  class="text-decoration-none text-dark product-link" >
            <i class="bi bi-heart product-wishlist"></i>
            <img src=${myArray[i]} class="product-img fourth-item-batch">
              <div class="product-title">
                <p class="product-name"><b>Product Name</b></p>
                <p > $<span class="product-price">100.00</span> </p>
              </div>
              <button class="btn btn-primary product-btn"><i class="material-icons">add_shopping_cart</i> Add to cart</button>
              <div class="rating-container product-rating">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
                <i class="bi bi-star"></i>
              </div>
            </a>
            </div>`;
    
    }

    divElem.innerHTML = text;
    allImgContainer.append(divElem);
}

