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

    handleControls(key) {
        
        if(!this.alive) return;

        switch(key) {
            case 'w':
                this.y -= this.speed
                break;
            case 's':
                this.y += this.speed
                break;
            case 'a':
                this.x -= this.speed
                break;
            case 'd':
                this.x += this.speed
                break;
            case ' ':
                this.shoot()
        }
    }

    shoot() {
        if(!this.alive) return;
        let bullet = new Bullet(this);
        this.world.addGameObject(bullet);
    }

    die() {
        this.alive = false
        alert("Fim de jogo")
        window.location.reload()
    }

    setWorld(world) {
        this.world = world
    }

    collide(target) {
        this.die()
    }

    update() {

    }

    draw(context) {
        if(!this.alive) return;
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size, this.size)
    }
}