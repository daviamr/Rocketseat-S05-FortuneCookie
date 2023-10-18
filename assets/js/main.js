const cookie = document.getElementById('fortuneCookie');
const closedScreen = document.getElementById('closedBiscuit');
const openedScreen = document.getElementById('openedBiscuit');
const anotherCookieBtn = document.getElementById('anotherCookie');
const phrase = document.getElementById('phrase');
const audio = new Audio('./assets/audio/crack.mp4');

const phrasesList = [
    'A vida trará coisas boas se tiver paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Siga os bons e aprenda com eles.',
    'Espere pelo mais sábio dos conselhos: o tempo.',
    'Você é do tamanho do seu sonho.',
    'Nós somos o que pensamos.',
    'Você sempre será a sua melhor companhia!',
    'Acredite em milagres, mas não dependa deles.'
]

cookie.addEventListener('click', () => {
    audio.currentTime = .8;
    audio.play();
    handlerScreen();
});

anotherCookieBtn.addEventListener('click', handlerScreen);

function handlerScreen() {

    for (let i = 0; i < closedScreen.classList.length; i++) {
        if (closedScreen.classList[i] !== 'hide') {
            toggleHide(closedScreen);
            toggleHide(openedScreen);
        }
    }
    randomPhrase();
}

function toggleHide(tag) {
    return tag.classList.toggle('hide');
}

function randomPhrase() {
    let random = Math.floor(Math.random() * phrasesList.length);

    if (phrase) {
        phrase.innerText = `${phrasesList[random]}`;
    }
}