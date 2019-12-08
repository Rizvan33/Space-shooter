function lost_in_space() {
	let world = initializeWorld();
	window.setInterval(function () {

		if (world.vie.nombre_vie > 0) {
			gameLoop(world);
		} else {
			fin_partie(world)
		}
	}, 1000.0 / 60.0);
}

function initializeWorld() {
	let world = {};
	world.time = 0;
	world.player = new Player(300, 550, 500, true, view("/images/playerShip1_blue.png"));
	world.key = new KeyboardManager()
	world.key.update(world);
	world.niveau = 1;
	world.nombre_enemies = 5;
	world.vitesse_enemies = 2;
	world.enemies = new Set();
	world.meteorites = new Set();
	world.enemies = initializeEnemies(world);
	world.missile = new Set();
	world.liste_missile = new Set(); // cree une liste qui contiendra les coordonnes des missiles

	world.vie = new Vie(560, 560, 3, view("/images/vie.jpg"), true);
	world.score = 0;

	world.lastUpdate = Date.now();

	return world;

}

function initializeEnemies(world) {

	for (var i = 0; i < world.nombre_enemies; i++) {
		// pour cree aleatoirement les enemies
		let j = Math.floor((42) * Math.random());
		let k = Math.floor((58) * Math.random());

		if (0 <= i && i < 5) {
			world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/enemies/ufoGreen.png"), 1, 1));

		} else if (5 <= i && i < 8) {

			world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("/images/enemies/ufoGreen.png"), 2, 1));
		} else if (8 <= i && i < 11) {

			world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/enemies/ufoBlue.png"), 3, 2));

		} else if (11 <= i && i < 14) {

			world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("/images/enemies/ufoBlue.png"), 4, 2));
		} else if (14 <= i && i < 17) {

			world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/enemies/ufoRed.png"), 5, 3));

		} else if (17 <= i && i < 20) {

			world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("/images/enemies/ufoRed.png"), 6, 3));
		} else if (20 <= i && i < 23) {

			world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/enemies/ufoYellow.png"), 7, 4));

		} else if (23 <= i && i < 26) {

			world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("/images/enemies/ufoYellow.png"), 8, 4));
		} else {

			world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("/images/enemies/enemyBlack5.png"), 9, 5));

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





