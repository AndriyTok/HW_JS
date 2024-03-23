//second part of third task
function readSessions() {
    let ul = document.createElement('ul');
    let sessionsArray = JSON.parse(localStorage.getItem('sessions'));
    for (const session of sessionsArray) {
        let li = document.createElement('li');
        li.innerText = 'Day:' + session.day + ' Time:' + session.hour + ':' + session.minutes + ':' + session.seconds;
        ul.appendChild(li);
    }
    document.body.append(ul);
}

readSessions();

// readSessions(document.body);
readSessions(document.getElementsByClassName('target')[0]);
