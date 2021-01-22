class World {

    constructor(canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        canvas.style.border = "1px solid black";
        let context = canvas.getContext('2d');
        this.context = context;
        this.gameObjects = [];
    }


    setGameObjects(gameObjects) {
        this.gameObjects = gameObjects
    }

    checkCollision() {
        this.gameObjects.forEach(gameObject => {
            this.gameObjects.forEach(target => {
                let isAlive = gameObject.alive && target.alive;
                let horizontal = gameObject.x > target.x && gameObject.x < target.x + target.size;
                let vertical = gameObject.y > target.y && gameObject.y < target.y + target.size;
                if(isAlive && horizontal && vertical) {
                    gameObject.element.collide(target)
                    target.element.collide(gameObject)
                    console.log("colidiu")
                }
            })
        })
    }

    render() {
        //this.checkCollision()
        this.context.clearRect(0,0, screen.width, screen.height);

        this.gameObjects.forEach((gameObject) => {
            gameObject.draw(this.context)
        })
 
        requestAnimationFrame(this.render.bind(this))
    }

    start() {
        this.render();
    }
}