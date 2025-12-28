function createBalloons() {
    const balloons = ['🎈', '🎉', '🎊', '🎁', '🌟', '⭐', '💫'];
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = balloons[Math.floor(Math.random() * balloons.length)];

        const leftPos = (i / 15) * 100 + (Math.random() - 0.5) * 15;
        balloon.style.left = Math.max(0, Math.min(95, leftPos)) + '%';
        balloon.style.top = Math.random() * 100 + '%';
        balloon.style.animationDelay = Math.random() * 6 + 's';
        balloon.style.animationDuration = (Math.random() * 4 + 4) + 's';
        document.body.appendChild(balloon);
    }
}

function createConfetti() {
    const colors = ['#f093fb', '#667eea', '#764ba2', '#ffd700', '#ff6b6b', '#4ecdc4'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const leftPos = (i / 50) * 100 + (Math.random() - 0.5) * 10;
        confetti.style.left = Math.max(0, Math.min(100, leftPos)) + '%';
        confetti.style.top = (Math.random() * -100) + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 4 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
        document.body.appendChild(confetti);
    }
}

function explodeCake() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < 20; i++) {
        const emoji = document.createElement('div');
        emoji.textContent = ['🎉', '🎊', '✨', '💖', '🌟'][Math.floor(Math.random() * 5)];
        emoji.style.position = 'fixed';
        emoji.style.left = centerX + 'px';
        emoji.style.top = centerY + 'px';
        emoji.style.fontSize = '2em';
        emoji.style.pointerEvents = 'none';
        emoji.style.zIndex = '1000';
        document.body.appendChild(emoji);

        const angle = (Math.PI * 2 * i) / 20;
        const velocity = 200 + Math.random() * 100;

        let posX = 0;
        let posY = 0;
        let opacity = 1;

        const animation = setInterval(() => {
            posX += Math.cos(angle) * 5;
            posY += Math.sin(angle) * 5 + 2;
            opacity -= 0.02;

            emoji.style.transform = `translate(${posX}px, ${posY}px) rotate(${posX}deg)`;
            emoji.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(animation);
                emoji.remove();
            }
        }, 20);
    }
}

function launchFireworks() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const x = (i / 5) * window.innerWidth + Math.random() * 100;
            const y = Math.random() * window.innerHeight / 2;
            createFirework(x, y);
        }, i * 300);
    }
}

function createFirework(x, y) {
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#8b00ff'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = color;
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / 30;
        const velocity = 2 + Math.random() * 3;
        let posX = 0;
        let posY = 0;
        let opacity = 1;

        const animation = setInterval(() => {
            posX += Math.cos(angle) * velocity;
            posY += Math.sin(angle) * velocity + 1;
            opacity -= 0.01;

            particle.style.transform = `translate(${posX}px, ${posY}px)`;
            particle.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(animation);
                particle.remove();
            }
        }, 20);
    }
}

document.addEventListener('click', (e) => {
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = '✨';
        sparkle.style.left = e.clientX + (Math.random() - 0.5) * 50 + 'px';
        sparkle.style.top = e.clientY + (Math.random() - 0.5) * 50 + 'px';
        sparkle.style.fontSize = Math.random() * 20 + 20 + 'px';
        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    }
});

createBalloons();
createConfetti();
