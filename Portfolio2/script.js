let text = document.querySelector('.text--animation');

const changeText = () => {
    setTimeout(() => {
        text.textContent = 'Dian Grigorov';
        animatedText();

    }, 0);
    setTimeout(() => {
        text.textContent = 'Web Developer';
        animatedText();
    },3000)
}
changeText()

function animatedText () {
    let splitText = text.textContent.split('');
    text.textContent = '';
    splitText.forEach((letter) => {
        text.innerHTML += '<span>' + letter + '</span>'
    })

    let char = 0;
    let timer = setInterval(onTick, 100);
    function onTick() {
        const span = text.querySelectorAll('span')[char];
        console.log(span);
        span.classList.add('fade');
        char++;
        if (char === splitText.length) {
            complete();
            return;
        }
    }
    function complete() {
        clearInterval(timer);
        timer = null;
    }
};

