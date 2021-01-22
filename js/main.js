let canvas = document.getElementById("screen");
let world = new World(canvas, 800, 600);

world.start();

let socket = io("localhost:3000");
let playerId = null;

socket.on('render', (data) => {

    let gameObjects = [];

    data.forEach((data) => {
        let object = null;
        if(data.type == "player") {
            object = new Player(data.size, data.color, data.x, data.y)
        }else if(data.type == "bullet") {
            object = new Bullet(data)
        }
       
        gameObjects.push(object);
    })

    world.setGameObjects(gameObjects);
    
})

socket.on('player-id', data => {
    playerId = data;
    console.log(playerId);
})
let dead = false
socket.on('die', () => {
    if(dead) return;
    document.write("<h1>Você morreu. Aguarde")
    setTimeout(() => {
        window.location.reload();
    },
    5000)
    dead = true
})

window.addEventListener('keydown', (event) => {
    let movementData = {playerId: playerId, key: event.key};
    socket.emit('player-move', movementData);
});
