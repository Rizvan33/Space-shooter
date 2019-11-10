class Vie {

	constructor(x, y, nombre_vie, image) {
		this.x = x;
		this.y = y;
		this.image = image;
		this.nombre_vie = nombre_vie;

	}

	update(world) {


	}
	// si le vaisseau est mort 
	if (world.player.game === false) {

		world.player.x = 300;
		world.player.y = 550;
		this.nombre_vie += -1;
		world.player.game = true;
		world.missile = new set();
    world.ennemies = inialise_enemies(wold.enemies);

}

draw(contexte) {
	for (let i = 0; i < this.nombre_vie; i++) {
		contexte.drawImage(this.image, this.x - i * 30, this.y, 25, 25);
	}

}

}
