//зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let data = [];
for (let i = 0; i < 100; i++){
    data.push({id:i, name: `Item ${i + 1}`});
}
localStorage.setItem('data', JSON.stringify(data));

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.flexWrap = 'wrap';

const prev_button = document.createElement('button');
prev_button.classList.add('Previous');
prev_button.innerText = 'Previous!';
prev_button.style.margin = '20px';
const next_button = document.createElement('button');
next_button.classList.add('Next');
next_button.innerText = 'Next!';
next_button.style.margin = '20px';
const div = document.createElement('div');
div.classList.add('Content');
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.width = '100%';
div.style.height = '60vh';
document.body.append(prev_button, div,  next_button)

let currentIndex = 0;
const itemsPerPage = 10;

function showItems(startIndex) {
    let data = JSON.parse(localStorage.getItem('data'));
    let endIndex = startIndex + itemsPerPage;
    if (endIndex > data.length){
        endIndex = data.length;
    }
    div.innerHTML = '';
    let ul = document.createElement('ul')
    for (let i = startIndex; i < endIndex; i++)
    {
        let item = data[i];
        let li = document.createElement('li');
        li.innerText = `ID: ${item.id}, Name:${item.name}`;
        ul.appendChild(li);
    }
    div.appendChild(ul);
}

prev_button.onclick = function(){
    if (currentIndex > 0){
        currentIndex -= itemsPerPage;
        if (currentIndex < 0){
            currentIndex = 0;
        }
    }
    showItems(currentIndex);
}

next_button.onclick = function () {
    let data = JSON.parse(localStorage.getItem('data'));
    if (currentIndex + itemsPerPage < data.length) {
        currentIndex += itemsPerPage;
        showItems(currentIndex)
    }
};

showItems(currentIndex);