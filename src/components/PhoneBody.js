import React from 'react';
import PhoneSVG from './PhoneSVG';
import './phone.css';

import getPdfUrl from '../utils/getPdfUrl';
import takePhoto from '../utils/takePhoto';

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
	const handleNumKeyPress = (e) => {
		const value = e.target.id;
		if (!isOpen.input && !isOpen.sending) {
			setIsOpen({ ...isOpen, input: true });
			setEntered((oldArray) => [...oldArray, value]);
		} else {
			if (entered.length < 11) setEntered((oldArray) => [...oldArray, value]);
		}
	};

	const handleCancelPress = async () => {
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
				setLoading(true);
				setIsOpen({ ...isOpen, input: false });
				setMessages({ ...messages, loading: 'DIALING' });
				const url = await getPdfUrl(entered.join(''));
				redirect(url);
			} catch (error) {
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
		if (entered.length > 0) {
			setEntered((oldArray) => oldArray.slice(0, -1));
		} else {
			setInputOpen(false);
		}
	};

	const handleLinkPress = (e) => {
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
				setHasPhoto(false);
			} else {
				setHasPhoto(true);
				takePhoto(videoRef, photoRef, videoContainerRef);
			}
		}
		if (!isOpen.camera) setIsOpen({ ...isOpen, camera: !isOpen.camera });
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
