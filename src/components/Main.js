import React, { useEffect, useState } from 'react';
import Phone from './Phone';
import Screen from './Screen';
import Camera from './Camera';

const Main = () => {
	const [inputOpen, setInputOpen] = useState(false);
	const [entered, setEntered] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loadingMessage, setLoadingMessage] = useState('');
	const [screenMessage, setScreenMessage] = useState('Searching...');
	const [cameraOpen, setCameraOpen] = useState(false);
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
			cameraOpen={cameraOpen}
			setCameraOpen={setCameraOpen}
		>
			{cameraOpen ? (
				<Camera />
			) : (
				<Screen
					inputOpen={inputOpen}
					entered={entered}
					loading={loading}
					loadingMessage={loadingMessage}
					screenMessage={screenMessage}
					setCameraOpen={setCameraOpen}
				/>
			)}
		</Phone>
	);
};

export default Main;
