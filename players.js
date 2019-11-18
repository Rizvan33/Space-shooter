class Player {

	constructor(x, y, speed, game, image) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.game = game;
		this.image = image;
		this.keyboardManager = new KeyboardManager();
		this.width = 40;
		this.height = 40;

	}

	update(world) {

		world.player.evenement(world);
		world.player.sortie_canvas(world);


	}

	evenement(world) {
		world.move = this.keyboardManager.update(world);
		world.move.forEach(function (points) {
				if (points == "up") {

					this.y -= this.speed * world.delta;
				} else if (points == "down") {
					this.y += this.speed * world.delta;
				} else if (points == "left") {
					this.x -= this.speed * world.delta;
				} else if (points == "right") {
					this.x += this.speed * world.delta;
				} else if (points == 'space') {

					if (world.niveau < 2) {

						world.missile.add(new Missile(this.x + 18, this.y - 18, this.speed / 30, view("/images/laser.png"))); // -30 pour affiche le missile centre
						
						// 2 missiles si au dessus de niveau 6
					} else {

						world.missile.add(new Missile(this.x - 10, this.y - 20, this.speed / 30, view("/images/laser.png"))); // -30 pour affiche le missile centre
						world.missile.add(new Missile(this.x + 10, this.y - 20, this.speed / 30, view("/images/laser.png"))); // -30 pour affiche le missile centre

					}

				}
				
			} 
			

			.bind(this));
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
