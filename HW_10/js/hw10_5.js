// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.flexWrap = 'wrap';

const element = document.createElement('p')
element.id = 'text';
element.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
    'Accusantium dicta dolor enim eos, minima omnis voluptatum? Consequuntur nulla quidem similique.';
element.style.width = '100%';
element.style.textAlign = 'center'

const button = document.createElement('button');
button.innerText = 'Знищити елемент з id="text"!';
button.style.margin = '20px';

const button2 = document.createElement('button');
button2.innerText = 'Відновити елемент з id="text"!';
button2.style.margin = '20px';

document.body.append(element, button, button2);

button.onclick = function(){
    let element = document.getElementById('text');
    element.style.display = 'none';
}

button2.onclick = function(){
    let element = document.getElementById('text');
    element.style.display = 'block'
}
