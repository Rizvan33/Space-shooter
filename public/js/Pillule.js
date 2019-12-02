class Pillule_vie {

	constructor(x, y, speed, image, niveau) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.image = image;
		this.width = 20;
		this.height = 20;
		this.niveau = niveau;
		
	}

	update(world, pillule_vie) {

		pillule_vie.move();
		pillule_vie.supprime_enemies(world, pillule_vie);
	}

	move() {
		if (this.niveau>=1 && this.niveau<5) {
            this.x += this.speed; 
            this.y -= this.speed; 
		} else if (this.niveau <= 7) {
            let v = Math.floor((7) * Math.random());
            if((v==0)||(v==1)){
		this.x -= this.speed;
                this.y -= this.speed;
            }
            if((v==2)||(v==3)){
                this.x += this.speed; 
                this.y -= this.speed;
            }
		} else {
            let v2 = Math.floor((7) * Math.random());
            if(v2==0){
		this.x -= this.speed;
                this.y -= this.speed;
            }
            else if (v2==1) {
                this.x += this.speed; 
                this.y -= this.speed;
            }
		}
	}

	supprime_enemies(world, pillule_vie) {
		if (this.y === -100) {
			world.pillule_vie.delete(pillule_vie);
		}
	}

	collision_vaisseau_pillule_vie(world, pillule_vie) {

		if (this.x == world.player.x && this.y == world.player.y) {
			world.player.life += 1;
      			world.pillule.delete(pillule_vie);
		}

	}

	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.height);

	}

}
