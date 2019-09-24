let Bulletes = function (speed, xBullet, yBullet) {
    ctx = document.getElementById('Canvas').getContext("2d");
    this.xBullet = xBullet;
    this.yBullet = yBullet;
    this.size = 2;
    this.speed = speed;

    this.getX = function () {
        return this.xBullet;
    };

    this.getY = function () {
        return this.yBullet;
    };

    this.move = function () {
        this.yBullet -= this.speed;
    };

    this.drawBullet = function () {
        ctx = document.getElementById('Canvas').getContext("2d");
        ctx.beginPath();
        ctx.arc(this.xBullet, this.yBullet, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.fill();
    }
};