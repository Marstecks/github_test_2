/*                 Qty Counter              */

const allInputDisplay = document.querySelectorAll('.qty-input');
const addBtn = document.querySelectorAll('.add-btn');
const subBtn = document.querySelectorAll('.sub-btn');
var inputDisplay;

changeBtns();

function changeBtns() {

    for(let x = 0; x < allInputDisplay.length; x++) {
    for(let i = 0; i < addBtn.length; i++) {
       addBtn[i].onclick = function () {
            change('add', allInputDisplay[x]);
        }
    }

    for(let i = 0; i < subBtn.length; i++) {
        subBtn[i].onclick = function () {
             change('sub', allInputDisplay[x])
         }
     }
    }
    }    
        var count = 0;
        function change(button, display) {
            if (button === 'add') {
                count++;
                display.value = count;
                if (count > 0) {
                display.style.color = 'green';
                }
                if (count === 0) {
                    display.style.color = 'black';
                }
            } else if (button === 'sub') {

                if ( count > 1) {
                    count--;
                    display.value = count;
                } else {
                    display.value = 1;
                }

                if (count === 0) {
                    display.style.color = 'black';
                }
            }
        }


