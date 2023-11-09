// import { useEffect } from 'react';

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
					'--fz': `${values.height * 5}px`,
					'--vertical': `${values.lineSpace.roundOff * 4}px`,
				}}
				className='preview'
			>
				{text.split(' ').map((word, i) => {
					return (
						<>
							<div
								style={{ '--width': `${values.wordSpace.roundOff * 5}px` }}
								className='space box'
							>
								<span className='line'></span>
								<span className='line'></span>
								<span></span>
								<span className='line'></span>
								<span className='line'></span>
							</div>
							<div className='word' key={i}>
								{word.split('').map((letter, j) => {
									return (
										<>
											<div
												style={{
													'--width': `${
														values.letterSpace.roundOff * 5
													}px`,
												}}
												className='gap box'
											>
												<span className='line'></span>
												<span className='line'></span>
												<span></span>
												<span className='line'></span>
												<span className='line'></span>
											</div>
											<div className='letter box' key={j}>
												<span className='line'></span>
												<span className='line'></span>
												<span>{letter}</span>
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
		</div>
	);
};
