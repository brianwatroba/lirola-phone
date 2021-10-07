import React from 'react';
import PhoneSVG from './PhoneSVG';
import './phone.css';

import getPdfUrl from '../utils/getPdfUrl';
import takePhoto from '../utils/takePhoto';

import keytone1 from '../sounds/keytone1.mp3';
import keytone2 from '../sounds/keytone2.mp3';
import keytone3 from '../sounds/keytone3.mp3';
import dialing from '../sounds/dialing.mp3';
import invalidnumber from '../sounds/invalidnumber.mp3';
import camerashutter from '../sounds/camerashutter.mp3';

const PhoneBody = ({
	isOpen,
	setIsOpen,
	setMessages,
	messages,
	setInputOpen,
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
}) => {
	const keyTone1 = new Audio(keytone1);
	const keyTone2 = new Audio(keytone2);
	const keyTone3 = new Audio(keytone3);
	const dialTone = new Audio(dialing);
	const invalidNumber = new Audio(invalidnumber);
	const cameraShutter = new Audio(camerashutter);

	const playSound = (key) => {
		switch (key) {
			case 'takePhoto':
				cameraShutter.play();
				break;
			case 'invalid':
				dialTone.pause();
				invalidNumber.play();
				break;
			case 'dialing':
				dialTone.play();
				break;
			case 'website':
				keyTone1.play();
				break;
			case 'instagram':
				keyTone2.play();
				break;
			case 'email':
				keyTone3.play();
				break;
			case 'ok':
				keyTone1.play();
				break;
			case 'camera':
				keyTone2.play();
				break;
			case 'back':
				keyTone3.play();
				break;
			case 'cancel':
				keyTone3.play();
				break;
			case '0':
				keyTone1.play();
				break;
			case '1':
				keyTone2.play();
				break;
			case '2':
				keyTone3.play();
				break;
			default:
				keyTone1.play();
				return;
		}
	};

	const handleNumKeyPress = (e) => {
		const value = e.target.id;
		playSound(value);
		if (!isOpen.input && !isOpen.sending) {
			setIsOpen({ ...isOpen, input: true });
			setEntered((oldArray) => [...oldArray, value]);
		} else {
			if (entered.length < 11) setEntered((oldArray) => [...oldArray, value]);
		}
	};

	const handleCancelPress = async () => {
		playSound('cancel');
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
		playSound('ok');
		if (isOpen.input) {
			try {
				setLoading(true);
				setIsOpen({ ...isOpen, input: false });
				setMessages({ ...messages, loading: 'DIALING' });
				playSound('dialing');
				const url = await getPdfUrl(entered.join(''));
				redirect(url);
			} catch (error) {
				playSound('invalid');
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
			setIsOpen({ ...isOpen, sending: true });
		} else if (isOpen.sending) {
			setLoading(true);
			setMessages({ ...messages, loading: 'SENDING' });
			setIsOpen({ camera: false, input: false, sending: false });
		}
	};

	const handleBackspacePress = () => {
		playSound('back');
		if (entered.length > 0) {
			setEntered((oldArray) => oldArray.slice(0, -1));
		} else {
			setIsOpen({ ...isOpen, input: false });
		}
	};

	const handleLinkPress = (e) => {
		const destination = e.target.id;
		playSound(destination);
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
				playSound('camera');
				setHasPhoto(false);
			} else {
				playSound('takePhoto');
				setHasPhoto(true);
				takePhoto(videoRef, photoRef, videoContainerRef);
			}
		}
		if (!isOpen.camera) {
			playSound('camera');
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
		/>
	);
};

export default PhoneBody;
