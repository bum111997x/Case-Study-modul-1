let EnemyPlane = function (speed, x, y) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = 15;
    this.color = getRandomColor();

    this.getX = function () {
        return this.x;
    };

    this.getY = function () {
        return this.y;
    };

    this.move = function () {
        this.y += this.speed;
    };

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};