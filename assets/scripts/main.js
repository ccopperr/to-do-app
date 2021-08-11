let textInput = document.getElementById('add-textinput');
let addButton = document.getElementById('add-button');
let list = document.getElementById('list');
let element = document.getElementsByTagName('li');

addButton.addEventListener('click', () => {
    let txt = textInput.value;
    if(!txt.length) return alert('Yazı alanını boş bırakamazsınız.');
    let li = document.createElement('li');
    li.innerText = txt;
    list.insertBefore(li, list.childNodes[0]);
    textInput.value = "";
    saveElements();
});

list.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
    }
});

function saveElements() {
    let x = list.innerHTML;
    localStorage["kayitlar"] = x;
}

function getElements() {
    let lS = localStorage["kayitlar"];
    if(lS != undefined) {
        list.innerHTML = lS;
    }
}