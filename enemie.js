class Enemie {

	constructor(x, y, speed, image) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.image = image;
	
	}

	update(world, index) {

		this.x += this.speed; // afin de deplacer les enemies de gauche a droite et inversement

		if (this.x > 600 || this.x < 0) {

			this.speed = -this.speed; // afin de faire changer le sens des enemies lorsqu ils touchent les limites du canvas a gauche et a droite

			this.y += 15; // afin de faire descendre legerement les enemies vers le vaisseau

		}

		if (this.y > 600 || this.y < 0) {

			this.speed = -this.speed; // afin de faire changer le sens des enemies lorsqu il touche les limites du canvas en haut et en bas

			this.speed += 0.1 * this.speed; // on augmente la vitesse de 10% lorsqu il touche en haut ou en bas
		}

		
		
	}

	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, 25, 25);


	}

}
