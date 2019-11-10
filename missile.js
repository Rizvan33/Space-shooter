class Missile {

	constructor(x, y, speed, image, image_super, life) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.image = image;
		this.image_super = image_super;
		this.life = 0;
	}

	update(world, missile) {

		this.y -= this.speed; // afin que le missile avance verticalement

		this.life += 10;
		if (this.life > 300) { // dure de vie egale a la moitier du canvas
			world.missile.delete(missile);
		}

		// collision vaisseau avec missile
		if (this.x < world.player.x + 40 && this.x + 5 > world.player.x && this.y < world.player.y + 40 &&
			17 + this.y > world.player.y) {
			world.player.game = false;
		}

	
	}

	draw(contexte) {

		contexte.drawImage(this.image, this.x, this.y, 5, 17);

	}

}
