import { useState, useEffect, useRef } from 'react';

import { Top } from './components/Top';
import { Stencil } from './components/Stencil';
import { getValues, Values } from './components/utils';
import { Demo } from './components/Demo';

function App() {
	const [height, setHeight] = useState(14);
	const [values, setValues] = useState<Values>(getValues(height));
	const [text, setText] = useState<string>(
		'Lorem ipsum dolor sit amet consectetur adipisicing elit'
	);
	const contentRef = useRef<HTMLElement>(null);

	function changeHeight(e: React.ChangeEvent<HTMLSelectElement>) {
		setHeight(Number(e.target.value));
	}

	useEffect(() => {
		setValues(getValues(Number(height)));
	}, [height]);

	useEffect(() => {
		contentRef.current!.classList.remove('load');

		const id = setTimeout(() => {
			contentRef.current!.classList.add('load');
		}, 100);

		return () => clearTimeout(id);
	}, []);

	return (
		<main>
			<section ref={contentRef} className='content'>
				<Top height={height} changeHeight={changeHeight} />
				<hr />
				<Stencil values={values} />
				<hr />
				<Demo values={values} text={text} setText={setText} />
			</section>
		</main>
	);
}

export default App;
