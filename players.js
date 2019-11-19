class Player {

	constructor(x, y, speed, game, image) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.game = game;
		this.image = image;
		this.keyboardManager = new KeyboardManager();

	}

	update(world) {
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
						world.missile.add(new Missile(this.x, this.y - 30, this.speed / 40, view("laser.png"))); // -30 pour affiche le missile centre
					
				}
			}
			.bind(this));



		//si le vaisseau veux sortir du canvas on l'empeche de sortir
		if (this.x > 600) {
			this.x = 600;
		}
		if (this.x < 0) {
			this.x = 0;
		}
		if (this.y > 600) {
			this.y = 600;
		}
		if (this.y < 0) {
			this.y = 0;
		}
	}





	draw(contexte) {
		contexte.drawImage(this.image, this.x - 20, this.y - 20, 40, 40); // -20 pour affiche le vaisseau centre 


	}

}
