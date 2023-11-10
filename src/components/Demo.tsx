import { Values } from './utils';

export const Demo = ({
	values,
	text,
	setText,
}: {
	values: Values;
	text: string;
	setText: React.Dispatch<React.SetStateAction<string>>;
}) => {
	let currentValue = 0;

	return (
		<div className='demo'>
			<h2>Preview</h2>
			<div className='text'>
				<label htmlFor='text'>Text</label>
				<textarea
					name='text'
					id='text'
					rows={4}
					placeholder='Your text goes here . . .'
					value={text}
					onChange={(e) => setText(e.target.value)}
				></textarea>
			</div>
			<div
				style={{
					// @ts-ignore
					'--fz': `${values.height}px`,
					'--vertical': `${values.lineSpace.roundOff}px`,
				}}
				className='preview'
			>
				{text.split(' ').map((word) => {
					return (
						<>
							<div
								// @ts-ignore
								style={{ '--width': `${values.wordSpace.roundOff}px` }}
								className='space box'
							>
								<span className='line'></span>
								<span className='line'></span>
								<span className='alpha invisible'>V</span>
								<span className='line'></span>
								<span className='line'></span>
							</div>
							<div className='word'>
								{word.split('').map((letter) => {
									return (
										<>
											<div className='gap box'>
												<span className='line'></span>
												<span className='line'></span>
												<span className='alpha invisible'>I</span>
												<span className='line'></span>
												<span className='line'></span>
											</div>
											<div className='letter box'>
												<span className='line'></span>
												<span className='line'></span>
												<span className='alpha'>{letter}</span>
												<span className='line'></span>
												<span className='line'></span>
											</div>
										</>
									);
								})}
							</div>
						</>
					);
				})}
			</div>
			<div className='points'>
				<h2>Points</h2>
				<div>
					{text.split(' ').map((word, i, arr) => {
						const isLastWord = i === arr.length - 1;

						return (
							<>
								{word.split('').map((letter, j, arr) => {
									const isLastLetter = j === arr.length - 1;

									const alpha =
										letter.toLowerCase() === 'm' ||
										letter.toLowerCase() === 'w'
											? values.letterMW.roundOff
											: letter.toLowerCase() === 'i'
											? values.letterI.roundOff
											: values.letter.roundOff;

									const space = isLastLetter
										? values.wordSpace.roundOff
										: values.letterSpace.roundOff;

									const letterPoint = alpha + currentValue;
									const spacePoint = space + letterPoint;

									currentValue = spacePoint;

									return (
										<>
											<span className='letterSpace'>
												{letterPoint / 10}
											</span>
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
		</div>
	);
};
