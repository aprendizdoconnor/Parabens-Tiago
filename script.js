function digitar(elementoId, texto, tempo = 100, callback) {
    const elemento = document.getElementById(elementoId);
    elemento.textContent = '';
    let i = 0;
    const intervalo = setInterval(() => {
        elemento.textContent += texto[i];
        i++;
        if (i === texto.length) {
            clearInterval(intervalo);
            if (callback) callback();
        }
    }, tempo);
}


digitar('mensagem1', '🎉 Feliz Aniversário, Tiago! 🎉', 100, () => {
    digitar('mensagem2', 'Que Deus te Abençoe, espero que seu Dia seja especial e abençoado! 💖', 80);
});

const button = document.getElementById('surpresa');
const msg = document.getElementById('surpresaMsg');

button.addEventListener('click', () => {
    msg.classList.toggle('hidden');
    if (!msg.classList.contains('hidden')) {
        digitar('mensagem3', '🥳 Que todos os seus sonhos se realizem, de forma honesta e seguindo os mandamentos de Deus na sua vida! 🥳', 80);
    }
});


particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80 },
        "color": { "value": ["#ff4081","#ff9a9e","#fad0c4"] },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.7 },
        "size": { "value": 4 },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
            "repulse": { "distance": 100 },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});

