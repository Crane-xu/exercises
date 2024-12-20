class QueenSlover {
    constructor(n) {
        this.len = n;
        this.map = this.initialMap();
        // 可走位置
        this.directions = [[-2, -1], [-1, -2], [2, 1], [1, 2], [-2, 1], [-1, 2]];
        this.solutions = [];
    }
    // 初始化棋盘
    initialMap() {
        let map = new Array(this.len);
        for (let index = 0; index < this.len; index++) {
            map[index] = new Array(this.len).fill(0);
        }
        return map;
    }
    // 计算棋盘皇后数
    countQueens() {
        return this.map.flat().reduce((pre, cur) => {
            if (cur === 8) {
                pre ++;
            } 
            return pre;
        }, 0);
    }
    // 是否可落子 越界/已有落子/能被攻击到
    isLegalPlace(x, y) {
        if (x < 0 || x >= this.len) {
            return false;
        }
        if (y < 0 || y >= this.len) {
            return false;
        }
        if (this.map[x][y] === 1 || this.map[x][y] === 8) {
            return false;
        }
        return true;
    }
    // 是否还有空位
    hasVacancy() {
        let obj = {
            isEnd: true,
            position: [-1, -1]
        };
        for (let i = 0; i < this.len; i++) {
            for (let j = 0; j < this.len; j++) {
                if (this.map[i][j] === 0 && this.isLegalPlace(i, j)) {
                    obj.isEnd = false;
                    obj.position = [i, j];
                }
            }
        }
        return obj;
    }
    // 获取结果
    getSolutions() {
        return this.solutions;
    }
    // 打印棋盘
    printMap() {
        console.log('\n');
        for (let index = 0; index < this.len; index++) {
            console.log(this.map[index].join(" "));
        }
    }
    // 设置对角方向攻击范围
    setXRay(x, y) {
        for (let k = 1; k < this.len; k++) {
            let Xdirections = [[-k, k], [k, k], [-k, -k], [k, -k]];
            for (const direction of Xdirections) {
                let newX = x + direction[0];
                let newY = y + direction[1];
                if (this.isLegalPlace(newX, newY))
                    this.map[newX][newY] = 1;
            }
        }
    }
    // 设置垂直水平方向攻击范围
    setPlusSignRay(x, y) {
        for (let i = 0; i < this.len; i++) {
            for (let j = 0; j < this.len; j++) {
                if ((i === x || j === y) && this.isLegalPlace(i, j))
                    this.map[i][j] = 1;
            }
        }
    }
    // 设置攻击范围
    setRay(x, y) {
        this.setPlusSignRay(x, y);
        this.setXRay(x, y);
    }
    // 落子处理
    solvePlace(x, y) {
        this.map[x][y] = 8;
        this.setRay(x, y);
        for (const direction of this.directions) {
            let newX = x + direction[0];
            let newY = y + direction[1];
            if (this.isLegalPlace(newX, newY)) {
                this.solvePlace(newX, newY);
            }
        }
        const res = this.hasVacancy();
        if (!res.isEnd) {
            this.solvePlace(res.position[0], res.position[1]);
        } else {
            return;
        }
    }
    // [0, 0]--[n, n] 走一遍得到n皇后的解
    eachEntrance(){
        for (let i = 0; i < this.len; i++) {
            for (let j = 0; j < this.len; j++) {
                this.solvePlace(i, j);
                const queens = this.countQueens();
                if(queens === this.len)
                this.solutions.push(this.map);
                this.map = this.initialMap();
            }
        }
    }
    // 入口
    solveQueen() {
        this.eachEntrance();
    }
}

// let queenSlover = new QueenSlover(8);
// queenSlover.solveQueen();
// const maps = queenSlover.getSolutions();
// for (let i = 0; i < maps.length; i++) {
//     console.log('\n');
//     for (let idx = 0; idx < maps[i].length; idx++) {
//         console.log(maps[i][idx].join(" "));
//     }
// }
