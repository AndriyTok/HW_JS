// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

const div = document.createElement('div');
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.marginTop = '30px';
div.style.alignItems = 'center';
document.body.append(div);

const label = document.createElement('label');
label.for = 'input';
label.innerText = 'Введіть свій вік:'
const input = document.createElement('input');
input.name = 'age';
input.type = 'text';
input.style.margin = '50px';
const button = document.createElement('button');
button.innerText = 'Підтвердити';

div.append(label, input, button)

const p = document.createElement('p');
p.style.width = '100%';
p.style.textAlign = 'center';
button.onclick = function() {
    let age = parseInt(input.value)

    if (age >= 18){
        p.innerHTML = 'Вам більше 18!';
    }
    else if(age < 18){
        p.innerText = 'Вам менше 18!';
    }
    div.appendChild(p);
}
