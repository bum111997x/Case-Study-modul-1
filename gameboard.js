let plane = new MyPlane(5, 175, 430);
let enemies = [];
let bulletes = [];

function createEnemy() {
    let num = Math.floor(Math.random() * 1000);
    if (num < 10) {
        let enemy = new EnemyPlane(1, Math.floor(Math.random() * 350) + 30, -10);
        enemies.push(enemy);
    }
}

function showEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].yEnemy > 550) {
            enemies.splice(i, 1);
        } else {
            enemies[i].move();
            enemies[i].draw();
        }
    }
}

function createBulletes() {
    let bullet = new Bulletes(15, plane.xPlane + 25, 430);
    bulletes.push(bullet);
    for (let i = 0; i < bulletes.length; i++) {
        if (i % 50 === 0) {
            bulletes[i].move();
            bulletes[i].drawBullet();
        }
    }
}

function vacham() {
    for (let i = 0; i < enemies.length; i++) {
        for (let j = 0; j < bulletes.length; j++) {
            if (bulletes[j].xBullet <= enemies[i].xEnemy + enemies[i].size * 2 &&
                bulletes[j].yBullet <= enemies[i].yEnemy + enemies[i].size * 2 &&
                bulletes[j].xBullet + bulletes[j].size * 2 >= enemies[i].xEnemy &&
                bulletes[j].yBullet + bulletes[j].size * 2 >= enemies[i].yEnemy) {
                enemies.splice(i, 1);
                bulletes.splice(j, 1);
                break;
            }
        }
    }
}

// function vacham1() {
//     for (let i = 0; i < enemies.length; i++) {
//         if (plane.xPlane <= enemies[i].xEnemy + enemies[i].size * 2 &&
//             plane.xPlane + plane.size >= enemies[i].xEnemy &&
//             plane.yPlane <= enemies[i].yPlane + enemies[i].size * 2 &&
//             plane.yPlane + plane.size >= enemies[i].yPlane) {
//             ctx.clearRect(plane.xPlane,plane.yPlane,plane.size,plane,size);
//         }
//     }
// }

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

function main() {
    clearScreen();
    createEnemy();
    showEnemies();
    createBulletes();
    plane.drawPlane();
    control(plane);
    vacham();
    // vacham1();
    requestAnimationFrame(main);
}

main();