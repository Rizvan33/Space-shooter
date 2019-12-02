"use strict";

window.onload = function () {
	let world = initializeWorld();
	window.setInterval(function () {

		if (world.vie.nombre_vie > 0) {
			gameLoop(world);
		} else {
			fin_partie(world)
		}
	}, 1000.0 / 60.0);
}



function gameLoop(world) {
	// boucle principal de jeu

	update(world);
	draw(world);

}
// page de chargement a faire
function update(world) {

	// met a jour temps pour le delta
	world.now = Date.now();
	world.delta = (world.now - world.lastUpdate) / 1000;
	world.lastUpdate = world.now;

	// met a jour les coordonnes des enemies
	world.enemies.forEach(enemie => enemie.update(world, enemie));

	// met a jour la liste missile 
	world.missile.forEach(missile => missile.update(world, missile));

	// met a jour les coordonnes du joueur
	world.player.update(world);

	//met a jour les points de vie 
	world.vie.update(world);

}


function draw(world) {
	let contexte = document.getElementById('game_area').getContext('2d');
	// nettoie le canvas
	contexte.clearRect(0, 0, 600, 600);

	// dessine le joueur 
	world.player.draw(contexte);

	// dessine les enemies 
	world.enemies.forEach(enemie => enemie.draw(contexte));

	// dessine les missiles
	world.missile.forEach(missile => missile.draw(contexte));

	// dessine les vies
	world.vie.draw(contexte);

	// dessine texte niveau
	dessine_texte_niveau(contexte, world)
	
	// dessine texte score
	dessine_texte_score(contexte, world)

}

