const description = document.querySelector('.description');
const descripBtn = document.querySelector('.descrip-toggle-btn');

descripBtn.addEventListener('click', () => {
  descripFunc();
});

function descripFunc() {
    if(description.style.maxHeight == '150px' || descripBtn.style.transform == `rotate(${0}deg)`) {
        description.style.maxHeight = '1000px';
        descripBtn.style.transform = `rotate(${180}deg)`
    } else {
        description.style.maxHeight = '150px';
        descripBtn.style.transform = `rotate(${0}deg)`
    }
}




//description.classList.toggle('description-toggle');
//descripBtn.classList.toggle('rotate-descripBtn');