const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circlesArray = [];
const numberOfCircles = 50;

// Класс для создания светящихся кругов
class Circle {
    constructor(x, y, radius, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
        this.draw();
    }
}

function init() {
    circlesArray = [];
    for (let i = 0; i < numberOfCircles; i++) {
        let radius = Math.random() * 50 + 20;
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;
        let color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`;
        let speedX = (Math.random() - 0.5) * 0.5;
        let speedY = (Math.random() - 0.5) * 0.5;

        circlesArray.push(new Circle(x, y, radius, color, speedX, speedY));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circlesArray.length; i++) {
        circlesArray[i].update();
    }
}

init();
animate();

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

// Динамическое изменение цвета кнопок при наведении
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.color = '#000';
        button.style.backgroundColor = '#00ffcc';
        button.style.boxShadow = '0 0 15px #00ffcc';
    });

    button.addEventListener('mouseleave', () => {
        button.style.color = '#f1f1f1';
        button.style.backgroundColor = '#222';
        button.style.boxShadow = '0 0 10px #00ffcc';
    });
});

