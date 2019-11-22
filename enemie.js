class Enemie {

	constructor(x, y, speed, image, niveau) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.image = image;
		this.width = 20;
		this.height = 20;
		this.niveau = niveau;
		//this.nombre_vie = nombre_vie;
	}

	update(world, enemie) {

		enemie.move();
		enemie.supprime_enemies(world, enemie);
		enemie.collision_vaisseau_enemies(world);
		enemie.collision_missiles_enemies(world);
		enemie.direction_horizontal();
		enemie.direction_vertical();

	}
	move() {
		if (this.niveau <= 2) {
			this.x += this.speed; // afin de deplacer les enemies de gauche a droite et inversement
		} else if (this.niveau <= 4) {
			this.y += this.speed; // afin de deplacer les enemies de gauche a droite et inversement
		} else {
			this.x += this.speed;
			this.y += this.speed; // afin de deplacer les enemies de gauche a droite et inversement
		}
	}



	supprime_enemies(world, enemie) {
		if (this.y === -100) {
			world.enemies.delete(enemie);
			world.score += 1;
		}
	}

	collision_vaisseau_enemies(world) {
		// collision vaisseau avec l'enemie
		if (this.x < world.player.x + world.player.width && this.x + this.width > world.player.x && this.y < world.player.y + world.player.height && this.height + this.y > world.player.y) {
			world.player.game = false;

		}
	}

	collision_missiles_enemies(world) {
		// collision enemie avec les differents missiles
		world.missile.forEach(function (valeur, clef, set) {

			if (valeur.x < this.x + this.width && valeur.x + valeur.width > this.x && valeur.y < this.y + this.height && valeur.height + valeur.y > this.y) {

				this.y = -100; //enemies
				valeur.y = -100; //missiles
			}
		}.bind(this));
	}

	direction_horizontal() {
		if (this.x > 600 || this.x < 0) {

			this.speed = -this.speed; // afin de faire changer le sens des enemies lorsqu ils touchent les limites du canvas a gauche et a droite

			this.y += 30; // afin de faire descendre legerement les enemies vers le vaisseau

		}

	}

	direction_vertical() {
		if (this.y > 600 || this.y < 0) {

			this.speed = -this.speed; // afin de faire changer le sens des enemies lorsqu il touche les limites du canvas en haut et en bas

		}

	}


	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.height);


	}

}
