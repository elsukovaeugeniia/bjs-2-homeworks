"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	const d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return arr;
	}

	if (d === 0) {
		const root = -b / (2 * a);
		arr.push(root);
		return arr;
	}

	if (d > 0) {
		const sqrtD = Math.sqrt(d);
		const root1 = (-b + sqrtD) / (2 * a);
		const root2 = (-b - sqrtD) / (2 * a);
		arr.push(root1, root2);
		return arr;
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}


	const P = (percent / 100) / 12;


	const S = amount - contribution;


	if (S <= 0) {
		return 0;
	}


	const monthlyPayment = S * (P + (P / (Math.pow(1 + P, countMonths) - 1)));


	const totalAmount = monthlyPayment * countMonths;


	return parseFloat(totalAmount.toFixed(2));
}