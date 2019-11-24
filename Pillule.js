class Pillule {

	constructor(x, y, image, image_super, life) {
		this.x = x;
		this.y = y;
		this.image = image;
		this.image_super = image_super;
		this.life = 0;
		this.width = 5;
		this.height = 17;
	}

	update(world, pillule) {

		pillule.temps_de_vie(world, missile);
		pillule.supprime_missile(world, missile);
		pillule.collision_vaisseau_missile(world);
	}

	temps_de_vie() {
		this.life += 10;
	}

	supprime_pillule(world, pillule) {
		if (this.life > 300 || this.y === -100) {
			world.pillule.delete(pillule);
		}
	}

	collision_vaisseau_pillule(world) {

		if (this.x < world.player.x + world.player.width && this.x + this.width > world.player.x && this.y < world.player.y + world.player.height && this.height + this.y > world.player.y) {
			world.player.life += 1;
      world.pillule.delete(pillule);
		}

	}

	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.height);

	}

}