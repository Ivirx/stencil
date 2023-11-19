import { Values } from './utils';

export const Points = ({ values, text }: { values: Values; text: string }) => {
	let currentValue = 0;

	function getWidth(letter: string) {
		const isNumber = !isNaN(Number(letter));

		if (isNumber)
			return letter === '1' ? values.numberOne.roundOff : values.number.roundOff;

		return letter.toLowerCase() === 'm' || letter.toLowerCase() === 'w'
			? values.letterMW.roundOff
			: letter.toLowerCase() === 'i'
			? values.letterI.roundOff
			: values.letter.roundOff;
	}

	return (
		<div className='points'>
			<div>
				{text && (
					<>
						<div className='zero-dot-zero letterSpace'>0</div>
						<span className='dot'>&#10022;</span>
					</>
				)}
				{text.split(' ').map((word, i, arr) => {
					const isLastWord = i === arr.length - 1;

					return (
						<>
							{word.split('').map((letter, j, arr) => {
								const isLastLetter = j === arr.length - 1;

								const alpha = getWidth(letter);

								const space = isLastLetter
									? values.wordSpace.roundOff
									: values.letterSpace.roundOff;

								const letterPoint = alpha + currentValue;
								const spacePoint = space + letterPoint;

								currentValue = spacePoint;

								return (
									<>
										<span className='letterSpace'>{letterPoint / 10}</span>
										<span className='dot'>&#10022;</span>
										<span
											className={`${
												isLastLetter ? 'wordSpace' : 'gapSpace'
											} ${isLastWord && isLastLetter ? 'last' : ''}`}
										>
											{spacePoint / 10}
										</span>
										<span
											className={`dot ${
												isLastWord && isLastLetter ? 'last' : ''
											}`}
										>
											&#10022;
										</span>
									</>
								);
							})}
						</>
					);
				})}
			</div>
			<p>All the measurements are in centimeter.</p>
		</div>
	);
};
