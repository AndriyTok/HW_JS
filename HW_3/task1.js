// 1) За допомогою циклу for і document.write()
// вивести 10 блоків div c довільним текстом всередині
// 2) За допомогою циклу for і document.write()
// вивести 10 блоків div c довільним текстом і індексом всередині
// 3) За допомогою циклу while
// вивести в документ 20 блоків h1 c довільним текстом всередині.
// 4) За допомогою циклу while
// вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//---------------------------PART_1.1--------------------------------
document.write('<h2>Part 1.1</h2>')
for (let i = 0; i < 10; i++) {
    document.write('<div class="task1_1"><p>Lorem ipsum dolor sit amet, consectetur.</p></div>')
}
//---------------------------PART_1.2--------------------------------
document.write('<h2>Part 1.2</h2>')
for (let i = 0; i < 10; i++) {
    document.write(`<div class="task1_2"><p>index:${i}</p><p>Lorem ipsum dolor sit.</p></div>`)
}
//---------------------------PART_1.3--------------------------------
document.write('<h2>Part 1.3</h2>')
let k=0;
while (k<20)
{
    document.write(`<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, veniam!</h1>`);
    k++;
}
//---------------------------PART_1.4--------------------------------
document.write('<h2>Part 1.4</h2>')
let n=0;
while (n<20)
{
    document.write(`<h1 class="blue">index:${n}<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, veniam!</h1>`);
    n++;
}