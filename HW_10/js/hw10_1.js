// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const h1 = document.createElement('h1')
h1.innerText = 'Task 10.1';
h1.style.textAlign = 'center'
document.body.append(h1)

const form = document.createElement('form')
form.name = 'form1';
form.style.textAlign = 'center';
form.style.display = 'flex';
form.style.justifyContent = 'center'
form.style.flexWrap = 'wrap'

const element_creator = (element, type, name, text) => {
    const form_element = document.createElement(`${element}`);
    form_element.type = type;
    form_element.name = name;
    form_element.textContent = text;
    form_element.style.width = '50%'; //for each input to start from new line
    form_element.style.margin = '5px';
    form.append(form_element)
    return form_element;
}

const name1 = element_creator('input', 'text', 'name');
const surname = element_creator('input', 'text', 'surname');
const age = element_creator('input', 'text', 'age');
const button = element_creator('button', 'button', 'submit', 'Submit');

button.onclick = function (){
          const div = document.createElement('div');
          div.innerHTML = `<p>Ім'я: ${name1.value}</p>
                           <p>Прізвище: ${surname.value}</p>
                           <p>Вік:${age.value}</p>`;
          div.style.textAlign = 'center';
          document.body.append(div);
      }
document.body.append(form);
