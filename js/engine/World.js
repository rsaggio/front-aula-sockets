class World {

    constructor(canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        canvas.style.border = "1px solid black";
        let context = canvas.getContext('2d');
        this.context = context;
        this.gameObjects = [];
        this.nextId = 0
    }


    addGameObject(gameObject) {
        gameObject.setWorld(this)
        this.gameObjects.push({id: ++this.nextId, element: gameObject});
    }

    checkCollision() {
        this.gameObjects.forEach(gameObject => {
            this.gameObjects.forEach(target => {
                let isAlive = gameObject.element.alive && target.element.alive;
                let horizontal = gameObject.element.x > target.element.x && gameObject.element.x < target.element.x + target.element.size;
                let vertical = gameObject.element.y > target.element.y && gameObject.element.y < target.element.y + target.element.size;
                if(isAlive && horizontal && vertical) {
                    gameObject.element.collide(target.element)
                    target.element.collide(gameObject.element)
                    console.log("colidiu")
                }
            })
        })
    }

    render() {
        this.checkCollision()
        this.context.clearRect(0,0, screen.width, screen.height);

        this.gameObjects.forEach((gameObject) => {
            gameObject.element.update()
            gameObject.element.draw(this.context)
        })
 
        requestAnimationFrame(this.render.bind(this))
    }

    start() {
        this.render();
    }
}