import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import PhoneBody from "./PhoneBody";
import Screen from "./Screen";
import Camera from "./Camera";

import useBbox from "../hooks/useBbox";
import hideLoader from "../utils/hideLoader";
import takeScreenshot from "../utils/takeScreenshot";

const Main = () => {
    const [bbox, ref] = useBbox();
    const videoRef = useRef(null),
        photoRef = useRef(null),
        videoContainerRef = useRef(null);

    const initialScreenMessage = "READY";
    const [messages, setMessages] = useState({
        screen: initialScreenMessage,
        loading: "LOADING",
    });
    const [isOpen, setIsOpen] = useState({
        input: false,
        camera: false,
        sending: false,
    });
    const [entered, setEntered] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasPhoto, setHasPhoto] = useState(false);
    const [startingUp, setStartingUp] = useState(true);

    const screenshotRef = useRef(null);

    useEffect(() => {
        hideLoader();
        setTimeout(() => setStartingUp(false), 4000);
    }, []);

    return (
        <div ref={screenshotRef}>
            <PhoneContainer>
                <PhoneBody
                    hasPhoto={hasPhoto}
                    setHasPhoto={setHasPhoto}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    messages={messages}
                    setMessages={setMessages}
                    setEntered={setEntered}
                    entered={entered}
                    loading={loading}
                    setLoading={setLoading}
                    initialScreenMessage={initialScreenMessage}
                    bboxRef={ref}
                    videoRef={videoRef}
                    photoRef={photoRef}
                    videoContainerRef={videoContainerRef}
                    startingUp={startingUp}
                    takeScreenshot={takeScreenshot}
                />
            </PhoneContainer>
            <ScreenContainer bbox={bbox}>
                {isOpen.camera ? (
                    <Camera
                        hasPhoto={hasPhoto}
                        setHasPhoto={setHasPhoto}
                        videoRef={videoRef}
                        photoRef={photoRef}
                        videoContainerRef={videoContainerRef}
                        entered={entered}
                        isOpen={isOpen}
                    />
                ) : (
                    <Screen
                        bbox={bbox}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        messages={messages}
                        entered={entered}
                        loading={loading}
                        initialScreenMessage={initialScreenMessage}
                        startingUp={startingUp}
                    />
                )}
            </ScreenContainer>
        </div>
    );
};

const PhoneContainer = styled.div`
    position: relative;
    height: 85vh;
    background-color: #222;
    text-align: center;
    aligncontent: center;
    display: flex;
    justify-content: center;
`;

const ScreenContainer = styled.div`
    position: absolute;
    background-color: #8fa97a;
    z-index: 1000;
    width: ${(props) => props.bbox.width}px;
    height: ${(props) => props.bbox.height}px;
    top: ${(props) => props.bbox.top}px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
`;

export default Main;
