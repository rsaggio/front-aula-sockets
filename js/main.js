let canvas = document.getElementById("screen")
let world = new World(canvas, 800, 600);

world.start();

let player = new Player(50, 'grey', 0, 300)
world.addGameObject(player)

let player2 = new Player(50, 'red', 750, 300)
world.addGameObject(player2)


window.addEventListener('keydown', (event) => {
    player.handleControls(event.key)    
})

