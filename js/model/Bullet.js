class Bullet {

    constructor(player) {
        this.x = player.x + player.size;
        this.y = player.y + player.size/2;
        this.size = 5;
        this.speed = 10;
        this.alive = true
        this.world = null
    }

    setWorld(world) {
        this.world = world
    }

    collide(target) {
        this.alive = false;
    }

    update() {
        this.x += this.speed
    }

    draw(context) {
        if(!this.alive) return;
        
        context.beginPath();
        context.fillStyle = "#000000";
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.fill()
    }

}