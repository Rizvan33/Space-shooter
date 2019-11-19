class Vie {

	constructor(x, y, nombre_vie, image) {
		this.x = x;
		this.y = y;
		this.image = image;
		this.nombre_vie = nombre_vie;
		this.width = 25;
		this.height = 25;


	}

	is_empty_enemies(world) {
		if (world.enemies.size === 0) {


			world.player.x = 300;
			world.player.y = 550;
			world.niveau += 1;
			world.nombre_enemies += 5;
			world.missile = new Set();
			world.enemies = initializeEnemies(world);

		}

	}

	player_meurt(world) {
		if (world.player.game === false) {

			world.player.x = 300;
			world.player.y = 550;
			this.nombre_vie += -1;
			world.player.game = true;
			world.missile = new Set();
			
			// pour que quand on meurt on fait reapparaitre les enemies dans de nouvelles coordonne pour pas mourrir directement successivement
			// if pour fin de partie evite erreur sur liste vide
			if (world.enemies.size !== 0) {
				world.enemies.forEach(function (valeur, clef, set) {
					let j = Math.floor((60) * Math.random());
					let k = Math.floor((42) * Math.random());
					valeur.x = j * 10;
					valeur.y = k * 10;


				});

			}


		}
	}

	update(world) {

		world.vie.is_empty_enemies(world);
		world.vie.player_meurt(world);

	}



	draw(contexte) {
		for (let i = 0; i < this.nombre_vie; i++) {
			contexte.drawImage(this.image, this.x - i * 30, this.y, this.width, this.height);
		}

	}

}
