
const menu_open_btn = document.querySelector('.menu-btn-open');
const menu_close_btn = document.querySelector('.menu-btn-close');
const menu_container = document.querySelector('.main-navbar');


menu_open_btn.addEventListener('click', () => {
    menuBox('open');
})
menu_close_btn.addEventListener('click', () => {
    menuBox('close');
})


const menuBox = (mode) => {
    if(mode === 'open'){
        menu_container.style.right = '0px';
    } else {
        menu_container.style.right = '-950px';
    }
    }
