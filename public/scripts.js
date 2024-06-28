const audio = new Audio("Conga.mp3");

document.getElementById('gift').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('pdf').classList.remove('hidden');
    document.getElementById('pdf').style.opacity = 1;
    audio.play();
    createConfetti();
});



function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.classList.remove('hidden');
    for (let i = 0; i < 100; i++) {
        const confetto = document.createElement('div');
        confetto.className = 'confetto';
        confetto.style.left = `${Math.random() * 100}%`;
        confetto.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetto.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confetto);
    }
}

const styles = document.createElement('style');
styles.innerHTML = `
    .confetto {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: red;
        top: 0;
        animation: fall 5s linear infinite;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(styles);
