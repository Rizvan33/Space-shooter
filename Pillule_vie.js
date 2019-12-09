class Pillule_vie {

	constructor(x, y, speed, image, niveau, width, height, vie) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.image = image;
		this.niveau = niveau;
		this.width = width;
		this.height = height;
		this.vie= vie;
		this.game=true;
		
		
	}

	update(world, pillule_vie) {

		pillule_vie.move();                        					
		pillule_vie.collision_vaisseau_pillule_vie(world);                      		
		pillule_vie.collision_missiles_pillule_vie(world);
		pillule_vie.supprime_enemies(world, pillule_vie);
	}

	move() {
		let v = Math.floor((4) * Math.random());
            	 if(v==0){
			pillule_vie.diagonal_haut_gauche_bas_droite();
		 if(v==1){
			pillule_vie.diagonal_haut_droite_bas_gauche();
		 if(v==2){
			pillule_vie.deplacement_vertical();
		 }
		 if(v==3){
			pillule_vie.deplacement_horizontal();
		 }
	}
diagonal_haut_gauche_bas_droite() {
              this.x += this.speed;
              this.y += this.speed;
             }
diagonal_haut_droite_bas_gauche() {

             this.x -= this.speed;
             this.y += this.speed;

             }
deplacement_vertical() {
             this.y += this.speed;
             }
deplacement_horizontal() {
             this.x += this.speed;

             }

diminue_vie(world) {
             if (this.game === false) {
                   this.vie += -1;
                   this.game = true;
             }
}

supprime_pillule_vie(world, pillule_vie) {
             pillule_vie.diminue_vie(world)
             if (this.vie === 0) {
          		      world.pillule_vie.delete(pillule_vie);
              }
}
/*
supprime_pillule_vie(world, pillule_vie) {
		if (this.y === -100) {
			world.pillule_vie.delete(pillule_vie);
		}
	}
*/
collision_vaisseau_pillule_vie(world, pillule_vie) {

		if (this.x < world.player.x + world.player.width && this.x + this.width > world.player.x && this.y < world.player.y + world.player.height && this.height + this.y > world.player.y) {

			world.vie.nombre_vie += 1;
      		world.pillule_vie.delete(pillule_vie);
		}

	}
collision_missiles_pillule_vie(world, pillule_vie) {
    world.missile.forEach(function (valeur, clef, set) {
 		if (valeur.x < this.x + this.width && valeur.x + valeur.width > this.x && valeur.y < this.y + this.height && valeur.height + valeur.y > this.y) {
			world.vie.nombre_vie += 1;
      		world.pillule_vie.delete(pillule_vie);
		}
}

	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.height);

	}

}
