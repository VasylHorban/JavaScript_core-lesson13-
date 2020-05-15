document.getElementById('red').addEventListener('click', makeRed);

function makeRed() {
    let links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        let href = JSON.stringify(links[i].getAttribute('href'));
        if (href.includes('http://') || href.includes('ftp://')) {
            links[i].classList.add('external-red');
        }
    }
}
