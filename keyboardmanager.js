"use strict";

class KeyboardManager {
	constructor() {
		this.keyCodes = {
			"LEFT": 37,
			"UP": 38,
			"RIGHT": 39,
			"DOWN": 40,
			"SPACE": 32,
			//"SECRET": 71,
			"ENTRE": 13

		}; //initialise le keyboard
		this.x1 = false;
		this.x2 = false;
		this.y1 = false;
		this.y2 = false;
		this.missile = false;

	}

	update(world) {
		//console.log(world.key.keyCodes.ENTRE);
		window.addEventListener('keydown', function (event) {
			var e = event.keyCode;

			if (e == this.keyCodes.RIGHT) {
				this.x2 = true;
			}
			if (e == this.keyCodes.UP) {
				this.y1 = true;
			}
			if (e == this.keyCodes.LEFT) {
				this.x1 = true;
			}
			if (e == this.keyCodes.DOWN) {
				this.y2 = true;
			}
			if (e == this.keyCodes.SPACE) {
				this.missile = true;
			}

		}.bind(this));

		window.addEventListener('keyup', function (event) {
			var e = event.keyCode;

			if (e == this.keyCodes.RIGHT) {
				this.x2 = false;
			}
			if (e == this.keyCodes.UP) {
				this.y1 = false;
			}
			if (e == this.keyCodes.LEFT) {
				this.x1 = false;
			}
			if (e == this.keyCodes.DOWN) {
				this.y2 = false;
			}
			if (e == this.keyCodes.SPACE) {
				this.missile = false;
			}

		}.bind(this));

	}

}
