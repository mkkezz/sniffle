function Tester() {
	// {showTest() }
	let test = "I am test from function";
	this.showTest = function () {
		console.log(test);
	};
}

let tester = new Tester();
console.log(tester.test);

tester.showTest();

class Tester1 {
	constructor() {
		let test = "I am test from class";
		this.showTest = function () {
			console.log(test);
		};
	}
}

let tester1 = new Tester1();
console.log(tester1.test);

tester1.showTest();
