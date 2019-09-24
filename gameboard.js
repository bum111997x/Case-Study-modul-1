let plane = new MyPlane(5, 175, 430);
let enemies = [];
let bulletes = [];
let score = 0;

function createEnemy() {
    let num = Math.floor(Math.random() * 1000);
    if (num < 50) {
        let enemy = new EnemyPlane(20, Math.floor(Math.random() * 350) + 30, -10);
        enemies.push(enemy);
    }
}

function showEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].move();
        enemies[i].draw();
    }
}

function createBulletes() {
    let reload = 5;
    let count = 0;
    let bullet = new Bulletes(10, (plane.x + 25), 430);
    bulletes.push(bullet);
    for (let i = 0; i < bulletes.length; i++) {
        bulletes[i].move();
        bulletes[i].drawBullet();
    }
}

function crash(obj1, obj2) {
    let top1 = obj1.y;
    let bottom1 = obj1.y + obj1.size;
    let left1 = obj1.x - obj1.size;
    let right1 = obj1.x + obj1.size;
    let top2 = obj2.y;
    let bottom2 = obj2.y + obj2.size;
    let left2 = obj2.x - obj2.size;
    let right2 = obj2.x + obj2.size;
    if (left1 <= right2 && right1 > left2 && top1 <= bottom2 && bottom1 > top2) {
        return true;
    }
}

function crash1(obj1, obj2) {
    let top1 = obj1.y;
    let bottom1 = obj1.y + obj1.size;
    let left1 = obj1.x;
    let right1 = obj1.x + obj1.size;
    let top2 = obj2.y;
    let bottom2 = obj2.y + obj2.size;
    let left2 = obj2.x;
    let right2 = obj2.x + obj2.size;
    if (left1 <= right2 && right1 > left2 && top1 <= bottom2 && bottom1 > top2) {
        return true;
    }
}

function bulletVsEnemy() {
    for (let i = 0; i < enemies.length; i++) {
        for (let j = 0; j < bulletes.length; j++) {
            if (crash(bulletes[j], enemies[i])) {
                enemies.splice(i, 1);
                bulletes.splice(j, 1);
                score += 1;
                break;
            }
        }
    }
}

function planeVsEnemy() {
    for (let i = 0; i < enemies.length; i++) {
        if (crash1(plane, enemies[i])) {
            document.write("Điểm của bạn là: " + score);
            alert("You lose!");
        }
    }
}


function control() {
    window.addEventListener('keydown', dichuyen);
}

function dichuyen(value) {
    switch (value.which) {
        case 37:
            plane.moveLeft();
            clearScreen();
            plane.drawPlane();
            break;
        case 39:
            plane.moveRight();
            clearScreen();
            plane.drawPlane();
            break;
    }
}

function clearScreen() {
    ctx.clearRect(0, 0, 400, 500);
}

function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = getRandomHex();
    let yellow = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + yellow + "," + blue + ")";
}

function main() {
    clearScreen();
    createEnemy();
    showEnemies();
    createBulletes();
    plane.drawPlane();
    control(plane);
    bulletVsEnemy();
    planeVsEnemy();
    requestAnimationFrame(main);
}

main();