const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

const sparkNumbers = 100;
const sprites = {
    sparks: [],
    particles: [],
};

class Spark {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.vx = Math.random() * 6 - 3;
        this.vy = Math.random() * 4 - 2;
        this.growth = (Math.abs(this.vx) + Math.abs(this.vy)) * 0.01; // 根据x/y轴的位置决定大小
        this.markedForDeletion = false;
        this.size = 0;
        this.randomColors = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
        this.color = 'rgb(' + this.randomColors[0] + ',' + this.randomColors[1] + ',' + this.randomColors[2] + ')';
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.size += this.growth;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.markedForDeletion = true;
        }
        if (!this.markedForDeletion) {
            for (let i = 0; i < 5; i++) {
                const particle = new Particle(this.x, this.y, this.size, this.color);
                sprites.particles.push(particle);
            }
        }
    }
    draw() {
        c.fillStyle = this.color;
        c.beginPath();
        // x, y, r, 起始角，结束角，顺/逆时针
        c.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        c.fill();
    }
}

class Particle {
    constructor(x, y, size, color) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = Math.random() * this.size;
        this.maxRadius = Math.random() * 5 + 5;
        this.markedForDeletion = false;
        this.speedX = 1;
    }
    update() {
        this.radius += 0.3;
        if (this.radius > this.maxRadius - 5) this.markedForDeletion = true;
    }
    draw() {
        c.save();
        c.globalAlpha = 1 - this.radius / this.maxRadius;
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
        c.restore();
    }
}

function animate() {
    const { sparks, particles } = sprites;
    c.clearRect(0, 0, canvas.width, canvas.height);

    if (sparks.length < sparkNumbers) sprites.sparks.push(new Spark());

    [...sprites.particles, ...sprites.sparks].forEach((sprite) => {
        sprite.update();
        sprite.draw();
    });

    sprites.sparks = sparks.filter((spark) => !spark.markedForDeletion);
    sprites.particles = particles.filter((particle) => !particle.markedForDeletion);

    requestAnimationFrame(animate);
};

window.onload = animate();