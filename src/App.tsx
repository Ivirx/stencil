import { useState, useEffect, useRef } from 'react';

import { Top } from './components/Top';

function App() {
	const [height, setHeight] = useState(10);
	const contentRef = useRef<HTMLElement>(null);

	function changeHeight(e: React.ChangeEvent<HTMLSelectElement>) {
		setHeight(Number(e.target.value));
	}

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
			</section>
		</main>
	);
}

export default App;
