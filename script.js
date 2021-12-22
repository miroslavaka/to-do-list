let input = document.querySelector('#input');
let btn = document.querySelector('#add-item');

btn.addEventListener('click', showres);
let newul = document.createElement('ul');

function showres() {
    let newli = document.createElement('li');
    newul.appendChild(newli);
    let text = document.createTextNode(input.value);
    newli.appendChild(text);
    document.querySelector('.result-container').appendChild(newul);

    let newspan = document.createElement('span');
    newspan.className = 'close';
    newli.appendChild(newspan);
    let close = document.createTextNode("\u00D7");

    newspan.appendChild(close);

    let deletebtn = document.querySelectorAll('.close');

    input.value = '';

    for (let i = 0; i < deletebtn.length; i++) {
         deletebtn[i].addEventListener('click', function () {
         this.parentElement.style.display = 'none';
      });
    }
}