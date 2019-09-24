ctx = document.getElementById('Canvas').getContext("2d");

let MyPlane = function (speed, xPlane, yPlane) {
    this.xPlane = xPlane;
    this.yPlane = yPlane;
    this.speed = speed;
    this.size = 50;

    this.getX = function () {
        return this.xPlane;
    };

    this.getY = function () {
        return this.yPlane;
    };

    this.moveLeft = function () {
        if (this.xPlane > 0) {
            this.xPlane -= this.speed;
        }
    };

    this.moveRight = function () {
        if (this.xPlane < 350) {
            this.xPlane += this.speed;
        }
    };

    this.drawPlane = function () {
        ctx.beginPath();
        ctx.rect(this.xPlane, this.yPlane, this.size, this.size);
        ctx.fillStyle = "green";
        ctx.fill();
    }
};