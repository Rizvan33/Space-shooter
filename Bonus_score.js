class Bonus_score {

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

	update(world, Bonus_score) {

		Bonus_score.move();                        				
    Bonus_score.collision_vaisseau_Bonus_score(world);                      		
    Bonus_score.collision_missiles_Bonus_score(world);
		Bonus_score.supprime_enemies(world, Bonus_score);
	}

	move() {
		let v = Math.floor((4) * Math.random());
        if(v==0){
			      Bonus_score.diagonal_haut_gauche_bas_droite(;
		    if(v==1){
			      Bonus_score.diagonal_haut_droite_bas_gauche();
		    if(v==2){
			      Bonus_score.deplacement_vertical();
		    }
		    if(v==3){
			      Bonus_score.deplacement_horizontal();
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

supprime_Bonus_score(world, Bonus_score) {
             Bonus_score.diminue_vie(world)
             if (this.vie === 0) {
          		      world.Bonus_score.delete(Bonus_score);
              }
}
/*
supprime_Bonus_score(world, Bonus_score) {
		if (this.y === -100) {
			world.Bonus_score.delete(Bonus_score);
		}
	}
*/
collision_vaisseau_Bonus_score(world, Bonus_score) {

		if (this.x < world.player.x + world.player.width && this.x + this.width > world.player.x && this.y < world.player.y + world.player.height && this.height + this.y > world.player.y) {

			    world.score += 5;
          world.Bonus_score.delete(Bonus_score);
		}

	}
collision_missiles_Bonus_score(world) {
    world.missile.forEach(function (valeur, clef, set) {
 		if (valeur.x < this.x + this.width && valeur.x + valeur.width > this.x && valeur.y < this.y + this.height && valeur.height + valeur.y > this.y) {
			world.score += 5;
      		world.Bonus_score.delete(Bonus_score);
		}
}

	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.height);

	}

}
