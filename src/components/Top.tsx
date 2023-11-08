export const Top = ({
	height,
	changeHeight,
}: {
	height: number;
	changeHeight: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
	return (
		<>
			<h1>Stencil</h1>
			<div className='select'>
				<label htmlFor='height'>Select 'Height'</label>
				<select name='height' id='height' value={height} onChange={changeHeight}>
					<option value='2.5'>2.5</option>
					<option value='3.5'>3.5</option>
					<option value='5'>5</option>
					<option value='7'>7</option>
					<option value='10'>10</option>
					<option value='14'>14</option>
					<option value='20'>20</option>
				</select>
				<p>All the measurements are in millimeter.</p>
			</div>
		</>
	);
};
