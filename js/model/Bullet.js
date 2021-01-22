class Bullet {

    constructor(data) {
        this.x = data.x;
        this.y = data.y;
        this.size = data.size;
        this.speed = data.speed;
        this.alive = data.alive
    }

    collide(target) {
        this.alive = false;
    }

    draw(context) {
        if(!this.alive) return;
        
        context.beginPath();
        context.fillStyle = "#000000";
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.fill()
    }

}