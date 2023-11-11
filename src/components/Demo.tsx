import { Values } from './utils';
import { Preview } from './Preview';
import { Points } from './Points';

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
			<div className='wrapper'>
				<Preview values={values} text={text} />
				<hr />
				<Points values={values} text={text} />
			</div>
		</div>
	);
};
