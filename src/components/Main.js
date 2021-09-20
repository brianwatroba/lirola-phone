import React, { useEffect, useState } from 'react';
import Phone from './Phone';
import Screen from './Screen';

const Main = () => {
	const [inputOpen, setInputOpen] = useState(false);
	const [entered, setEntered] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loadingMessage, setLoadingMessage] = useState('');
	const [screenMessage, setScreenMessage] = useState('Searching...');
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
			entered={entered}
			loading={loading}
			setLoading={setLoading}
			loadingMessage={loadingMessage}
			setLoadingMessage={setLoadingMessage}
			screenMessage={screenMessage}
			setScreenMessage={setScreenMessage}
		>
			<Screen
				inputOpen={inputOpen}
				entered={entered}
				loading={loading}
				loadingMessage={loadingMessage}
				screenMessage={screenMessage}
			/>
		</Phone>
	);
};

export default Main;
