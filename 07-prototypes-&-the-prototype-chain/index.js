// ============== 07 Prototypes & The Prototype Chain ============= //

function Rectangle(name, width, heigth) {
	this.name = name;
	this.width = width;
	this.heigth = heigth;
	this.area = function () {
		return this.width * this.heigth;
	};
}

const rect = new Rectangle('Rectangle 1', 10, 10);
console.log(rect);
