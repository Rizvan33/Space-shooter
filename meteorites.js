class Meteorites {

	constructor(x, y, speed, image, niveau) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.image = image;
		this.width = 20;
		this.height = 20;
		this.niveau = niveau;
		
	}

	update(world, meteorite) {

		meteorite.move();
		meteorite.supprime_enemies(world, meteorite);

    }
    
	move() {
		if (this.niveau>=3 && this.niveau<5) {
            this.x += this.speed; 
            this.y -= this.speed; 
		} else if (this.niveau <= 7) {
            let v = Math.floor((2) * Math.random());
            if(v==0){
			    this.x -= this.speed;
                this.y -= this.speed;
            }
            else{
                this.x += this.speed; 
                this.y -= this.speed;
            }
		} else {
            let v2 = Math.floor((3) * Math.random());
            if(v2==0){
			    this.x -= this.speed;
                this.y -= this.speed;
            }
            else if (v2==1) {
                this.x += this.speed; 
                this.y -= this.speed;
            }
            else{
                this.x += this.speed;
            }
		}
	}

	supprime_enemies(world, meteorite) {
		if (this.y === -100) {
			world.meteorite.delete(meteorite);
			world.score += 1;
		}
	}

	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.height);

	}

}