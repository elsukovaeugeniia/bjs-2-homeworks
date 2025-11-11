function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];


		if (element < min) {
			min = element;
		}


		if (element > max) {
			max = element;
		}


		sum += element;
	}


	const avg = parseFloat((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	return arr.reduce((sum, element) => sum + element, 0);
}

function differenceMaxMinWorker(...arr) {

	if (arr.length === 0) {
		return 0;
	}

	const max = Math.max(...arr);
	const min = Math.min(...arr);

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (const element of arr) {
		if (element % 2 === 0) {
			sumEvenElement += element;
		} else {
			sumOddElement += element;
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (const element of arr) {
		if (element % 2 === 0) {
			sumEvenElement += element;
			countEvenElement++;
		}
	}

	if (countEvenElement === 0) return 0;

	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {

	if (arrOfArr.length === 0) {
		return 0;
	}


	let maxWorkerResult = func(...arrOfArr[0]);


	for (let i = 1; i < arrOfArr.length; i++) {

		const currentResult = func(...arrOfArr[i]);


		if (currentResult > maxWorkerResult) {
			maxWorkerResult = currentResult;
		}
	}

	return maxWorkerResult;
}
