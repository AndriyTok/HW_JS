//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
//Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
function saveVisit() {
    let arrayOfSessions = JSON.parse(localStorage.getItem('sessions')) || [];

    let date = new Date();
    arrayOfSessions.push({
        day: date.getDate(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });
    localStorage.setItem('sessions', JSON.stringify(arrayOfSessions));
}
saveVisit();