const h1 = document.createElement('h1');
h1.innerText = 'Task 10.2';
h1.style.textAlign = 'center';
document.body.append(h1);

const div = document.createElement('div');
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.fontSize = '2em';

let p = document.createElement('p');
p.innerText = '1';
div.appendChild(p);

document.body.appendChild(div);

window.addEventListener('load', function() {
    if(sessionStorage.getItem('number')){
        let added_number = parseInt(sessionStorage.getItem('number'));
        added_number++;
        sessionStorage.setItem('number', added_number.toString());
        p.innerText = added_number.toString();
    } else {
        sessionStorage.setItem('number', '1');
    }
});
