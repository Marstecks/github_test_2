const dropDown = document.querySelector('.nav-drop-down');
const dropDownMenu = document.querySelector('.nav-drop-down-menu');

  dropDown.onclick = () => {
    dropDownFunc();
  }

  dropDownMenu.style.display = 'none'

  function dropDownFunc() {
    if(dropDownMenu.style.display == 'none') {
      dropDownMenu.style.display = 'block'
    } else {
      dropDownMenu.style.display = 'none';
    }
  }