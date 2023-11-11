import { Values } from './utils';

export const Preview = ({ values, text }: { values: Values; text: string }) => {
	return (
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
	);
};
