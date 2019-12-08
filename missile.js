class Missile {

	constructor(x, y, speed, image, image_super, life) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.image = image;
		this.image_super = image_super;
		this.life = 0;
		this.width = 5;
		this.height = 17;
		this.game = true;
	}

	update(world, missile) {

		missile.move();
		missile.temps_de_vie(world, missile);
		missile.supprime_missile(world, missile);
	}

	move() {
		this.y -= this.speed; // afin que le missile avance verticalement
	}

	temps_de_vie() {
		this.life += 30;

	}

	supprime_missile(world, missile) {
		if (this.life > 300 || this.game === false) {
			world.missile.delete(missile);
		}
	}

	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.height);

	}

}
