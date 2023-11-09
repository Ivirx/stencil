import { Values } from './utils';

export const Stencil = ({ values }: { values: Values }) => {
	return (
		<div className='stencil'>
			<h2>Stencil Values</h2>
			<table className='table'>
				<thead>
					<tr>
						<th>Value</th>
						<th>Actual</th>
						<th>Round Off</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Height</td>
						<td>{values.height}</td>
						<td>-</td>
					</tr>
					<tr>
						<th colSpan={3}>Width for Alphabets</th>
					</tr>
					<tr>
						<td>Letters</td>
						<td>{values.letter.value}</td>
						<td>{values.letter.roundOff}</td>
					</tr>
					<tr>
						<td>M & W</td>
						<td>{values.letterMW.value}</td>
						<td>{values.letterMW.roundOff}</td>
					</tr>
					<tr>
						<td>I</td>
						<td>{values.letterI.value}</td>
						<td>{values.letterI.roundOff}</td>
					</tr>
					<tr>
						<th colSpan={3}>Spacings</th>
					</tr>
					<tr>
						<td>Letter Gap</td>
						<td>{values.letterSpace.value}</td>
						<td>{values.letterSpace.roundOff}</td>
					</tr>
					<tr>
						<td>Word Gap</td>
						<td>{values.wordSpace.value}</td>
						<td>{values.wordSpace.roundOff}</td>
					</tr>
					<tr>
						<td>Line Spacings</td>
						<td>{values.lineSpace.value}</td>
						<td>{values.lineSpace.roundOff}</td>
					</tr>
					<tr>
						<th colSpan={3}>Numbers</th>
					</tr>
					<tr>
						<td>All Numbers</td>
						<td>{values.number.value}</td>
						<td>{values.number.roundOff}</td>
					</tr>
					<tr>
						<td>For - 1</td>
						<td>{values.numberOne.value}</td>
						<td>{values.numberOne.roundOff}</td>
					</tr>
				</tbody>
			</table>
			<p>All the measurements are in millimeter.</p>
		</div>
	);
};
