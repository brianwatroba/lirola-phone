import React, { useEffect, useRef } from 'react';
import useSound from 'use-sound';

import PhoneSVG from './PhoneSVG';
import './phone.css';

import getPdfUrl from '../utils/getPdfUrl';
import takePhoto from '../utils/takePhoto';
import spriteMap from '../utils/spriteMap';
const audioSprite =
	'https://s3.us-east-2.amazonaws.com/www.spyfall.app/sprite.mp3';

const PhoneBody = ({
	isOpen,
	setIsOpen,
	setMessages,
	messages,
	setEntered,
	entered,
	setLoading,
	initialScreenMessage,
	bboxRef,
	hasPhoto,
	setHasPhoto,
	videoRef,
	videoContainerRef,
	photoRef,
	startingUp,
	takeScreenshot,
}) => {
	const [play] = useSound(audioSprite, { sprite: spriteMap, interrupt: true });

	const handleNumKeyPress = (e) => {
		const value = e.target.id;
		play({ id: 'key1' });
		if (!isOpen.input && !isOpen.sending) {
			setIsOpen({ ...isOpen, input: true });
			setEntered((oldArray) => [...oldArray, value]);
		} else {
			if (entered.length < 11) setEntered((oldArray) => [...oldArray, value]);
		}
	};

	const handleCancelPress = async () => {
		play({ id: 'key2' });
		setLoading(false);
		setEntered([]);
		setHasPhoto(false);
		setIsOpen({ camera: false, input: false, sending: false });
		// if (isOpen.input) {
		// 	setIsOpen({ ...isOpen, input: false });
		// }
		// if (isOpen.camera) {
		// 	setIsOpen({ ...isOpen, camera: false });
		// }
		// if (isOpen.sending) {
		// 	setIsOpen({ ...isOpen, sending: false });
		// }
	};

	const handleOkPress = async () => {
		if (isOpen.input) {
			try {
				play({ id: 'dialing' });
				setLoading(true);
				setIsOpen({ ...isOpen, input: false });
				setMessages({ ...messages, loading: 'DIALING' });
				const url = await getPdfUrl(entered.join(''));
				redirect(url);
				setEntered([]);
			} catch (error) {
				play({ id: 'invalid' });
				setLoading(false);
				setIsOpen({ ...isOpen, input: false });
				setEntered([]);
				setMessages({ ...messages, screen: 'INVALID NUMBER' });
				setTimeout(
					() =>
						setMessages({ ...messages, screen: 'Searching for service...' }),
					2000
				);
			}
		} else if (hasPhoto) {
			play({ id: 'key2' });
			takeScreenshot();

			// setIsOpen({ ...isOpen, sending: true });
		} else if (isOpen.sending) {
			play({ id: 'key2' });

			// setLoading(true);
			// setMessages({ ...messages, loading: 'SENDING' });
			setIsOpen({ camera: false, input: false, sending: false });
		}
	};

	const handleBackspacePress = () => {
		play({ id: 'key3' });
		if (entered.length > 0) {
			setEntered((oldArray) => oldArray.slice(0, -1));
		} else {
			setIsOpen({ ...isOpen, input: false });
		}
	};

	const handleLinkPress = (e) => {
		play({ id: 'key2' });
		const destination = e.target.id;
		const confirmed = (msg) => {
			const ok = window.confirm(msg);
			return ok;
		};

		switch (destination) {
			case 'instagram':
				if (confirmed(`Go to Jesse's Instagram?`))
					redirect('https://www.instagram.com/jesselirola');
				break;
			case 'website':
				if (confirmed(`Go to Jesse's portfolio site?`))
					redirect('https://www.jesselirola.com');
				break;
			case 'email':
				if (confirmed(`Open email to message Jesse?`))
					redirect('mailto:jesse@jesselirola.com');
				break;
			default:
				return;
		}
	};

	const handleCameraPress = () => {
		if (isOpen.camera) {
			if (hasPhoto) {
				play({ id: 'key1' });
				setHasPhoto(false);
			} else {
				play({ id: 'shutter' });
				setHasPhoto(true);
				takePhoto(videoRef, photoRef, videoContainerRef);
			}
		}
		if (!isOpen.camera) {
			play({ id: 'key1' });
			setIsOpen({ ...isOpen, camera: !isOpen.camera });
		}
	};

	const redirect = (url) => {
		setIsOpen({ ...isOpen, input: false });
		setLoading(true);
		setMessages({ ...messages, loading: 'REDIRECTING' });
		setTimeout(() => {
			setLoading(false);
			setMessages({ ...messages, screen: initialScreenMessage });
			window.location.href = url;
		}, 1200);
	};

	return (
		<PhoneSVG
			bboxRef={bboxRef}
			hasPhoto={hasPhoto}
			handleBackspacePress={handleBackspacePress}
			handleCameraPress={handleCameraPress}
			handleCancelPress={handleCancelPress}
			handleLinkPress={handleLinkPress}
			handleNumKeyPress={handleNumKeyPress}
			handleOkPress={handleOkPress}
			startingUp={startingUp}
		/>
	);
};

export default PhoneBody;
