function initializeEnemies(world) {
    world.enemies = [];
    for (let i = 0; i < world.nombre_enemies; i++) {
        // pour cree aleatoirement les enemies
        let j = Math.floor((42) * Math.random());
        let k = Math.floor((42) * Math.random());

        if (i % 2 == 0) {
            world.enemies.push(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("meteorite.png")));
        }
        if (i % 2 == 1) {
            world.enemies.push(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("meteorite.png")));
        }
    }
    return world.enemies
}


function fin_partie(world) {
    let contexte = document.getElementById('game_area').getContext('2d');
    // nettoie le canvas
    contexte.clearRect(0, 0, 600, 600);
    contexte.fillText("GAME OVER", 200, 200);
}
