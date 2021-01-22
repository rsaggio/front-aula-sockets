class Player {

    constructor(size, color, x , y) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speed = 5;
        this.world = null;
        this.alive = true
    }

    die() {
        this.alive = false
        alert("Fim de jogo")
        window.location.reload()
    }

    collide(target) {
        this.die()
    }

    draw(context) {
        if(!this.alive) return;
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size, this.size)
    }
}