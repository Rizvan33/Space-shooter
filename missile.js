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
	}

	update(world, missile) {

		missile.move();
		missile.temps_de_vie(world, missile);
		missile.supprime_missile(world, missile);
		missile.collision_vaisseau_missile(world);
	}

	move() {
		this.y -= this.speed; // afin que le missile avance verticalement
	}

	temps_de_vie() {
		this.life += 10;

	}

	supprime_missile(world, missile) {
		if (this.life > 300 || this.y === -100) {
			world.missile.delete(missile);
		}
	}

	collision_vaisseau_missile(world) {

		if (this.x < world.player.x + world.player.width && this.x + this.width > world.player.x && this.y < world.player.y + world.player.height && this.height + this.y > world.player.y) {
			world.player.game = false;
		}

	}

	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.height);

	}

}

