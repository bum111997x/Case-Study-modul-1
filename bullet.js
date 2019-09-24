let Bulletes = function (speed, x, y) {
    ctx = document.getElementById('Canvas').getContext("2d");
    this.x = x;
    this.y = y;
    this.size = 3;
    this.speed = speed;
    this.color = getRandomColor();

    this.getX = function () {
        return this.x;
    };

    this.getY = function () {
        return this.y;
    };

    this.move = function () {
        this.y -= this.speed;
    };

    this.drawBullet = function () {
        ctx = document.getElementById('Canvas').getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size + 4);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};