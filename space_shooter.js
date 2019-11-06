"use strict";

window.onload = function () {
    let world = initializeWorld();
    window.setInterval(function () {

        if (world.vie > 0) {
            gameLoop(world);
        } else {
            fin_partie(world)
        }
    }, 1000.0 / 60.0);
}


function initializeWorld() {
    let world = {};

    world.player = new Player(300, 550, 200, true, view("vaisseau.jpg"));
    world.nombre_enemies = 21;
    world.enemies = initializeEnemies(world);
    world.lastUpdate = Date.now();
    world.vie = 1;
    return world;

}

function view(path) {
    let image = new Image();
    image.src = path;
    return image;
}

function gameLoop(world) {
    // boucle principal de jeu

    update(world);
    draw(world);

}

function update(world) {


    // met a jour temps pour le delta
    world.now = Date.now();
    world.delta = (world.now - world.lastUpdate) / 1000;
    world.lastUpdate = world.now;

    // met a jour les coordonnes des enemies
    world.enemies.forEach((alien, index) => alien.update(world, index));

    // met a jour les coordonnes du joueur
    world.player.update(world);

}


function draw(world) {
    let contexte = document.getElementById('game_area').getContext('2d');
    // nettoie le canvas
    contexte.clearRect(0, 0, 600, 600);

    // dessine le joueur 
    world.player.draw(contexte);

    // dessine les enemies 
    world.enemies.forEach(alien => alien.draw(contexte));

}
