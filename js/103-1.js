class Turntable {
    binary = Array.from({ length: 6 }, () => Array(64).fill(null));
    cicles = [];
    resultRef;
    constructor() {
        for (let index = 0; index < 64; index++) {
            const bs = index.toString(2).padStart(6, '0');
            for (let i = 0; i < 6; i++) {
                this.binary[i][index] = bs[i];
            }
        }
        for (let index = 0; index < 6; index++) {
            this.cicles.push(document.querySelector(`.cicle-${index + 1}`));
        }
        this.resultRef = {
            title: document.querySelector(".result span"),
            diction: document.querySelector(".result p"),
        };
    }
    element(b, i, index) {
        const style = `transform:rotateY(${i * 5.625}deg) translate3d(0,0,${335 + index * 15}px); transition: transform 2s;`;
        let className = "binary-one";
        const chlid = [document.createElement('span')];
        if (b === '0') {
            className = "binary-zero";
            chlid.push(document.createElement('span'));
        }
        const div = document.createElement('div');
        div.className = className;
        div.dataset.style = style;
        chlid.forEach(c => div.appendChild(c));
        return div;
    }
    start() {
        for (let index = 0; index < 6; index++) {
            const divs = Array.from(this.cicles[index].children);
            divs.forEach(d => {
                d.style = d.dataset.style;
            });
        }
    }
    reset() {
        for (let index = 0; index < 6; index++) {
            this.cicles[index].style.transform = `rotateX(45deg)`;
            this.resultRef.title.innerText = "";
            this.resultRef.diction.innerText = "";
        }
    }
    async rotate() {
        this.reset();
        let s = "";
        for (let index = 0; index < 6; index++) {
            const r = Math.floor(Math.random() * 100);
            s += this.binary[index][64 - r % 64];
            this.cicles[index].style.transform = `rotateX(45deg) rotateY(${r * 5.625}deg)`;
        }
        const { results } = await import("./103-2.js");
        setTimeout(() => {
            const res = results[parseInt(s, 2)];
            this.resultRef.title.innerText = res.title;
            this.resultRef.diction.innerText = res.diction;
        }, 2000);
    }
    init() {
        for (let index = 0; index < 6; index++) {
            const divs = this.binary[index].map((b, i) => this.element(b, i, index));
            divs.forEach(d => this.cicles[index].appendChild(d));
        }
        document.getElementById("start-rotate").addEventListener("click", () => {
            this.rotate();
        });
        document.getElementById("reset-rotate").addEventListener("click", () => {
            this.reset();
        });

        setTimeout(() => { this.start(); }, 100);
    }
}