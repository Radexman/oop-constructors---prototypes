// ================== 08 Add methods to prototype ================== //

function Rectangle(name, width, height) {
	this.name = name;
	this.width = width;
	this.height = height;
}

Rectangle.prototype.area = function () {
	return this.width * this.height;
};

Rectangle.prototype.perimiter = function () {
	return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
	return this.width === this.height;
};

Rectangle.prototype.changeName = function (newName) {
	return (this.name = newName);
};

const rect = new Rectangle('Rectangle', 10, 10);
const rect2 = new Rectangle('Rectangle 2', 30, 40);

console.log(rect);
console.log(rect.area());
console.log(rect.perimiter());
console.log(rect.isSquare());
console.log(rect.changeName('Test'));

console.log(rect2.area());
