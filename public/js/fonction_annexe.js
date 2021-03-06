
function initializeWorld() {
    let world = {};

    world.player = new Player(300, 550, 500, true, view("/images/playerShip1_blue.png"));
    world.key = new KeyboardManager()
    world.key.update(world);
    world.niveau = 1;
    world.nombre_enemies = 5;
    world.vitesse_enemies = 2;
    world.enemies = new Set();
    world.enemies = initializeEnemies(world);
    world.missile = new Set();
    world.vie = new Vie(560, 560, 3, view("/images/vie.jpg"), true);
    world.score = 0;

    world.lastUpdate = Date.now();

    return world;

}

/*function size_meteorite() {
    let sm = Math.floor((3) * Math.random());
    if (sm == 0)
        view_met = new view("meteorBrown_big4.png");
    else if (sm == 1) {
        view_met = new view("meteorBrown_med1.png");
    }
    else {
        view_met = new view("meteorBrown_small2.png");
    }

    return view_met;
}*/
function initializeEnemies(world) {

    for (var i = 0; i < world.nombre_enemies; i++) {
        // pour cree aleatoirement les enemies
        let j = Math.floor((42) * Math.random());
        let k = Math.floor((58) * Math.random());
        /*let xm = Math.floor((42) * Math.random());
        let ym = Math.floor((58) * Math.random());
        let a = Math.floor((42) * Math.random());
        let b = Math.floor((58) * Math.random());*/

        if (0 <= i && i < 5) {
            world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/ufoGreen.png"), 1));
        } else if (5 <= i && i < 10) {

            world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("/images/ufoGreen.png"), 2));
        } else if (10 <= i && i < 15) {
           // world.meteorites.add(new Meteorites(xm * 10, ym * 10, world.vitesse_enemies, view(view_met), 3));
            world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/ufoBlue.png"), 3));
           /// world.pillule_vie.add(new Pillule_vie(a * 10, b * 10, world.vitesse_enemies, view("pill_blue.png"), 3));
        } else if (15 <= i && i < 20) {
           // world.meteorites.add(new Meteorites(xm * 10, ym * 10, world.vitesse_meteorites, view(view_met), 4));
            world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("/images/ufoBlue.png"), 4));
        } else if (20 <= i && i < 25) {
           // world.meteorites.add(new Meteorites(xm * 10, ym * 10, world.vitesse_meteorites, view(view_met), 5));
            world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/ufoRed.png"), 5));
           // world.pillule_vie.add(new Pillule_vie(a * 10, b * 10, world.vitesse_enemies, view("pill_blue.png"), 5));
        } else if (25 <= i && i < 30) {
           // world.meteorites.add(new Meteorites(xm * 10, ym * 10, world.vitesse_meteorites, view(view_met), 6));
            world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("/images/ufoRed.png"), 6));
        } else if (30 <= i && i < 35) {
            //world.meteorites.add(new Meteorites(xm * 10, ym * 10, world.vitesse_meteorites, view(view_met), 7));
            world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/ufoYellow.png"), 7));
           // world.pillule_vie.add(new Pillule_vie(a * 10, b * 10, world.vitesse_enemies, view("pill_blue.png"), 7));
        } else if (35 <= i && i < 40) {
            //world.meteorites.add(new Meteorites(xm * 10, ym * 10, world.vitesse_meteorites, view(view_met), 8));
            world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("/images/ufoYellow.png"), 8));
        } else {
           // world.meteorites.add(new Meteorites(xm * 10, ym * 10, world.vitesse_meteorites, view(view_met), 9));
            world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/enemyBlack5.png"), 9));
            //world.pillule_vie.add(new Pillule_vie(a * 10, b * 10, world.vitesse_enemies, view("pill_blue.png"), 9));
        }

    }
    return world.enemies;
}


function view(path) {
    let image = new Image();
    image.src = path;
    return image;
}


function dessine_texte_niveau(contexte, world) {

    contexte.fillStyle = "red";
    contexte.font = "30px Arial"
    contexte.fillText("Niveau " + world.niveau.toString(), 20, 580);

}

function dessine_texte_score(contexte, world) {

    contexte.fillStyle = "red";
    contexte.font = "30px Arial"
    contexte.fillText("Score " + world.score.toString(), 20, 30);

}


function fin_partie(world) {
    let contexte = document.getElementById('game_area').getContext('2d');
    // nettoie le canvas
    contexte.clearRect(0, 0, 600, 600);
    contexte.fillText("GAME OVER", 200, 200);
    contexte.fillText("Niveau " + world.niveau.toString(), 230, 300);
    contexte.fillText("Score " + world.score.toString(), 230, 400);
}






