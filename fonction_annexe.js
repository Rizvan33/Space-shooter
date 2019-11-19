<<<<<<< HEAD
function initializeWorld() {
	let world = {};

	world.player = new Player(300, 550, 500, true, view("/images/playerShip1_blue.png"));
	world.niveau = 1;
	world.nombre_enemies = 5;
    world.vitesse_enemies = 2;
    world.vitesse_meteorites= 3
	world.enemies = new Set();
    world.enemies = initializeEnemies(world);
    world.meteorites = new Set();
	world.meteorites = initializeEnemies(world);
	world.missile = new Set();
	world.liste_missile = new Set(); // cree une liste qui contiendra les coordonnes des missiles

	world.vie = new Vie(560, 560, 3, view("/images/vie.jpg"), true);
	world.score = 0;

	world.lastUpdate = Date.now();

	return world;

}
function sizeMeteorite(){
    this.view = new View
}

function initializeEnemies(world) {

	for (var i = 0; i < world.nombre_enemies; i++) {
		// pour cree aleatoirement les enemies
		let j = Math.floor((42) * Math.random());
        let k = Math.floor((58) * Math.random());
        
        let xm = Math.floor((42) * Math.random());
		let ym = Math.floor((58) * Math.random());

		if (0 <= i && i < 5) {
			world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/enemies/ufoGreen.png"), 1));
        
        } else if (5 <= i && i < 10) {
			world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("/images/enemies/ufoGreen.png"), 2));
        
        } else if (10 <= i && i < 15) {
            world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/enemies/ufoBlue.png"), 3));
            world.meteorites.add(new Meteorites(xm * 10, ym * 10, world.vitesse_enemies, view(""), 3));
        
        } else if (15 <= i && i < 20) {
            world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("/images/enemies/ufoBlue.png"), 4));
            world.meteorites.add(new Meteorites(xm * 10, ym * 10, world.vitesse_meteorites, view(""), 4));

		} else if (20 <= i && i < 25) {
            world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/enemies/ufoRed.png"), 5));
            world.meteorites.add(new Meteorites(xm * 10, ym * 10, world.vitesse_meteorites, view(""), 5));
        
        } else if (25 <= i && i < 30) {
            world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("/images/enemies/ufoRed.png"), 6));
            world.meteorites.add(new Meteorites(xm * 10, ym * 10, world.vitesse_meteorites, view(""), 6));
        
        } else if (30 <= i && i < 35) {
            world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/enemies/ufoYellow.png"), 7));
            world.meteorites.add(new Meteorites(xm * 10, ym * 10, world.vitesse_meteorites, view(""), 7));
        
        } else if (35 <= i && i < 40) {
            world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("/images/enemies/ufoYellow.png"), 8));
            world.meteorites.add(new Meteorites(xm * 10, ym * 10, world.vitesse_meteorites, view(""), 8));
        
        } else {
            world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/enemies/enemyBlack5.png"), 9));
            world.meteorites.add(new Meteorites(xm * 10, ym * 10, world.vitesse_meteorites, view(""), 9));
		}

	}
	return world.enemies;
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

=======
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
>>>>>>> 36413c0d84ef45cdd6f6828ac0e453c973d0355e
}


function fin_partie(world) {
    let contexte = document.getElementById('game_area').getContext('2d');
    // nettoie le canvas
    contexte.clearRect(0, 0, 600, 600);
    contexte.fillText("GAME OVER", 200, 200);
}
