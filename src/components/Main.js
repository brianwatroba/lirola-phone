import React, { useEffect, useState } from 'react';
import Phone from './Phone';
import Screen from './Screen';

const Main = () => {
	const [inputOpen, setInputOpen] = useState(false);
	const [entered, setEntered] = useState();
	const hideLoader = () => {
		const loader = document.querySelector('#loader');
		loader.style.display = 'none';
	};
	useEffect(() => {
		hideLoader();
	}, []);
	return (
		<Phone
			setInputOpen={setInputOpen}
			inputOpen={inputOpen}
			setEntered={setEntered}
		>
			<Screen inputOpen={inputOpen} entered={entered} />
		</Phone>
	);
};

export default Main;
