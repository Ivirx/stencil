export type Values = {
	height: number;
	letter: {
		value: number;
		roundOff: number;
	};
	letterMW: {
		value: number;
		roundOff: number;
	};
	letterI: {
		value: number;
		roundOff: number;
	};
	letterSpace: {
		value: number;
		roundOff: number;
	};
	wordSpace: {
		value: number;
		roundOff: number;
	};
	lineSpace: {
		value: number;
		roundOff: number;
	};
	number: {
		value: number;
		roundOff: number;
	};
	numberOne: {
		value: number;
		roundOff: number;
	};
};

const calcValues = {
	letter: 0.6,
	letterMW: 0.8,
	letterI: 0.1,
	letterSpace: 0.2,
	wordSpace: 0.6,
	lineSpace: 1.4,
	number: 0.5,
	numberOne: 0.2,
};

type Category = keyof typeof calcValues;

function calculate(category: Category, height: number): { value: number; roundOff: number } {
	let value = height * calcValues[category];
	value = Math.round(value * 100) / 100;
	const roundOff = Math.ceil(value);

	return { value, roundOff };
}

export function getValues(height: number): Values {
	return {
		height,
		letter: calculate('letter', height),
		letterMW: calculate('letterMW', height),
		letterI: calculate('letterI', height),
		letterSpace: calculate('letterSpace', height),
		wordSpace: calculate('wordSpace', height),
		lineSpace: calculate('lineSpace', height),
		number: calculate('number', height),
		numberOne: calculate('numberOne', height),
	};
}
