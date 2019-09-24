let EnemyPlane = function (speed, xEnemy, yEnemy) {
    this.xEnemy = xEnemy;
    this.yEnemy = yEnemy;
    this.speed = speed;
    this.size = 25;

    this.getX = function () {
        return this.xEnemy;
    };

    this.getY = function () {
        return this.yEnemy;
    };

    this.move = function () {
        this.yEnemy += this.speed;
    };

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.xEnemy, this.yEnemy, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
    }
};