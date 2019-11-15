class Missile {

	constructor(x, y, speed, image, life) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.image = image;
		this.life = 0;
		this.width = 5;
		this.height = 17;
	}

	update(world, missile) {

		this.y -= this.speed; // afin que le missile avance verticalement

		this.life += 10;
		if (this.life > 300 || this.y === -100) {
			/* dure de vie egale a la moitier du canvas*/
			// enlever les missiles mort
			world.missile.delete(missile);
		}

		// collision vaisseau avec missile
		if (this.x < world.player.x + world.player.width && this.x + this.width > world.player.x && this.y < world.player.y + world.player.height && this.height + this.y > world.player.y) {
			world.player.game = false;
		}


	}

	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.height);

	}

}
