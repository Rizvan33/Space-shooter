class Player {

	constructor(x, y, speed, game, image) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.game = game;
		this.image = image;
		this.width = 40;
		this.height = 40;


	}

	update(world) {
		world.player.sortie_canvas(world);
		world.player.evenement(world);

	}

	evenement(world) {


		if (true == world.key.y1) {
			this.y -= this.speed * world.delta;
		}
		if (true == world.key.y2) {
			this.y += this.speed * world.delta;
		}
		if (true == world.key.x1) {
			this.x -= this.speed * world.delta;
		}
		if (true == world.key.x2) {
			this.x += this.speed * world.delta;
		}
		if (true == world.key.missile) {

			if (world.niveau < 5) {

				world.missile.add(new Missile(world.player.x + 18, world.player.y - 18, world.player.speed / 30, view("/images/laser.png"))); // -30 pour affiche le missile centre
				//world.liste_missile.add([this.x, this.y - 40]); // -30 pour les prendres en compte dans l ordonne

				// 2 missiles si au dessus de niveau 5
			} else {

				world.missile.add(new Missile(world.player.x - 10, world.player.y - 20, world.player.speed / 30, view("/images/laser.png"))); // -30 pour affiche le missile centre
				world.missile.add(new Missile(world.player.x + 10, world.player.y - 20, world.player.speed / 30, view("/images/laser.png"))); // -30 pour affiche le missile centre

			}

		}
	}
	
	sortie_canvas(world) {
		//si le vaisseau veux sortir du canvas on l'empeche de sortir
		world.player.sortie_horizontal();
		world.player.sortie_vertical();

	}

	sortie_horizontal() {
		if (this.x > 600 - this.width) {
			this.x = 600 - this.width;
		}
		if (this.x < 0) {
			this.x = 0;
		}
	}

	sortie_vertical() {
		if (this.y > 600 - this.height) {
			this.y = 600 - this.height;
		}
		if (this.y < 0) {
			this.y = 0;
		}
	}

	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.height); // -20 pour affiche le vaisseau centre 
	}
}
