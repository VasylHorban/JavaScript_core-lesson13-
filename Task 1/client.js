let userName;
getName();

function getName() {
    userName = prompt('Введіть Ваше ім`я.');
    checkName();
}

function checkName() {
    if (userName != '' && userName != null ) {
        let isYour = confirm(`Вас звати ${userName} ?`);
        if (isYour) {
            document.write(`Привіт ${userName} !`);
        } else {
            getName();
        }
    } else {
        getName();
    }
}
