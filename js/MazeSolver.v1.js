class MazeSolver {
    constructor(mazeArray,
        entrancePositiion = { x: 0, y: 1 },
        exitPosition = { x: mazeArray[0].length - 1, y: mazeArray.length - 2 }
    ) {
        this.mazeArray = mazeArray;
        // 存储迷宫的最终解法
        this.path = [];
        // 记录进入离开点 展示动态过程
        // [{type:'enter', position:{x: 0,y: 1}}, {type: 'exit', position:{x: 0, y: 1}}]
        this.detailedPath = [];
        // 进入/出口坐标
        this.entrancePositiion = entrancePositiion;
        this.exitPosition = exitPosition;
        // 周围坐标转换
        this.directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        // 记录访问过的点
        this.visitedPositions = new Array(mazeArray.length);
        for (let i = 0; i < mazeArray.length; i++) {
            this.visitedPositions[i] = new Array(mazeArray[i].length).fill(false);
        }
    }
    // 判断访问是否合法 越界/墙体
    isLegalRoad(x, y) {
        if (x < 0 || x >= this.mazeArray[0].length) {
            return false;
        }
        if (y < 0 || y >= this.mazeArray.length) {
            return false;
        }
        if (this.mazeArray[y][x] === 1) {
            return false;
        }

        return true;
    }

    // 遍历尝试访问周围的点
    solvePoint(x, y) {
        this.visitedPositions[y][x] = true;
        this.path.push({ x, y });
        this.detailedPath.push({
            type: 'enter',
            position: { x, y }
        });

        // 判断当前点是否为目标
        if (x === this.exitPosition.x && y === this.exitPosition.y) {
            console.log('you win');
            return true;
        }

        for (const direction of this.directions) {
            let newX = x + direction[0];
            let newY = y + direction[1];

            if (this.isLegalRoad(newX, newY) && !this.visitedPositions[newY][newX]) {
                let isDone = this.solvePoint(newX, newY);
                // 递归终止
                if (isDone) return true;
            }
        }

        this.path.pop();
        this.detailedPath.push({
            type: 'exit',
            position: { x, y }
        });
        return false;
    }
    // 解迷宫的方法
    solveMaze() {
        let result = this.solvePoint(0, 1);
        if (result === false) {
            console.log('no solution for this maze');
        }
        return this.path;
    }
}

// function test() {
//     let mazeArray = [
//         [1, 1, 1, 1, 1, 1],
//         [0, 0, 1, 0, 1, 1],
//         [1, 0, 0, 0, 0, 1],
//         [1, 0, 1, 1, 1, 1],
//         [1, 0, 0, 0, 0, 0],
//         [1, 1, 1, 1, 1, 1],
//     ];
//     let mazeSolver = new MazeSolver(mazeArray);
//     let path = mazeSolver.solveMaze();
//     console.log(path);
// }

// test();