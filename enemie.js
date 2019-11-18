class Enemie {

	constructor(x, y, speed, image, niveau) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.image = image;
		this.width = 20;
		this.height = 20;
		this.niveau = niveau;
		
	}

	update(world, enemie) {

		enemie.move();
		enemie.supprime_enemies(world, enemie);

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

	

	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.height);


	}

}

