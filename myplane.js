ctx = document.getElementById('Canvas').getContext("2d");

let MyPlane = function (speed, x, y) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = 50;
    this.color = getRandomColor()

    this.getX = function () {
        return this.x;
    };

    this.getY = function () {
        return this.y;
    };

    this.moveLeft = function () {
        if (this.x > 0) {
            this.x -= this.speed;
        }
    };

    this.moveRight = function () {
        if (this.x < 350) {
            this.x += this.speed;
        }
    };

    this.drawPlane = function () {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};
