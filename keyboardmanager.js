"use strict";

class KeyboardManager {
	constructor() {
		this.keyCodes = {
			"LEFT": 37,
			"UP": 38,
			"RIGHT": 39,
			"DOWN": 40,
			"SPACE": 32,
			"ENTRE": 13

		};

	}

	update(world) {
		window.addEventListener('keydown', function (event) {
			var e = event.keyCode;
			if (e == this.keyCodes.RIGHT) {
				world.move.add("right");
			}
			if (e == this.keyCodes.UP) {
				world.move.add("up");
			}
			if (e == this.keyCodes.LEFT) {
				world.move.add("left");
			}
			if (e == this.keyCodes.DOWN) {
				world.move.add("down");
			}
			if (e == this.keyCodes.SPACE) {
				world.move.add("space");
			}
			if (e == this.keyCodes.ENTRE) {
				world.move.add("entre");
			}

		}.bind(this));

		window.addEventListener('keyup', function (event) {
			var e = event.keyCode;
			if (e == this.keyCodes.RIGHT) {
				world.move.delete("right");
			}
			if (e == this.keyCodes.UP) {
				world.move.delete("up");
			}
			if (e == this.keyCodes.LEFT) {
				world.move.delete("left");
			}
			if (e == this.keyCodes.DOWN) {
				world.move.delete("down");
			}
			if (e == this.keyCodes.SPACE) {
				world.move.delete("space");
			}
			if (e == this.keyCodes.ENTRE) {
				world.move.delete("entre");
			}

		}.bind(this));

		return world.move;

	}

}
