import React from 'react';
import styled from 'styled-components';
import useBbox from '../hooks/useBbox';
import './phone.css';

const Phone = ({ children }) => {
	const [bbox, ref] = useBbox();

	return (
		<PhoneContainer>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				fill="none"
				viewBox="0 0 359 871"
			>
				<g id="Full Style">
					<g id="Phone base">
						<path
							id="Antenna"
							fill="#C4C4C4"
							d="M32 22.5c0-9.862 0-14.794 2.724-18.113a11.998 11.998 0 011.663-1.663C39.707 0 44.637 0 54.5 0c9.862 0 14.794 0 18.113 2.724a11.998 11.998 0 011.663 1.663C77 7.707 77 12.637 77 22.5V117H32V22.5z"
						></path>
						<path
							id="Shell"
							fill="url(#paint0_radial)"
							d="M0 193C0 122.289 0 86.934 21.967 64.967 43.934 43 79.289 43 150 43h59c70.711 0 106.066 0 128.033 21.967C359 86.934 359 122.289 359 193v568c0 51.854 0 77.782-16.109 93.891C326.782 871 300.854 871 249 871H110c-51.855 0-77.782 0-93.89-16.109C0 838.782 0 812.854 0 761V193z"
						></path>
						<ellipse
							id="Ellipse 2"
							cx="178.634"
							cy="106.145"
							fill="#D6D3D3"
							rx="67.459"
							ry="21.047"
						></ellipse>
						<ellipse
							id="Ellipse 3"
							cx="178.633"
							cy="114.773"
							fill="#ADADAC"
							rx="11.333"
							ry="3.778"
						></ellipse>
						<ellipse
							id="Status light"
							fill="#949792"
							rx="16.175"
							ry="8.415"
							transform="matrix(.9857 -.16848 .17897 .98386 73.29 74.602)"
						></ellipse>
					</g>
					<g id="Keypad" style={{ mixBlendMode: 'hard-light' }}>
						<g id="#">
							<path
								id="Rect - #"
								fill="#323232"
								stroke="url(#paint1_linear)"
								strokeWidth="2"
								d="M230.9 783.719a9 9 0 019-9h57.549c8.638 0 15.64 7.002 15.64 15.64 0 12.313-9.982 22.296-22.296 22.296H239.9a9 9 0 01-9-9v-19.936z"
							></path>
							<text
								id="#_2"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="22"
								fontWeight="bold"
								letterSpacing="0em"
							>
								<tspan x="278.294" y="799.873">
									#
								</tspan>
							</text>
						</g>
						<g id="0">
							<rect
								id="Rect - 0"
								width="82.189"
								height="37.936"
								x="139.158"
								y="774.719"
								fill="#323232"
								stroke="url(#paint2_linear)"
								strokeWidth="2"
								rx="9"
							></rect>
							<text
								id="0_2"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="22"
								fontWeight="bold"
								letterSpacing="0em"
							>
								<tspan x="191.407" y="799.873">
									0
								</tspan>
							</text>
						</g>
						<g id="*">
							<path
								id="Rect - *"
								fill="#323232"
								stroke="url(#paint3_linear)"
								strokeWidth="2"
								d="M47.411 790.359c0-8.638 7.002-15.64 15.64-15.64h58.628a9 9 0 019 9v19.936a9 9 0 01-9 9H69.707c-12.314 0-22.296-9.983-22.296-22.296z"
							></path>
							<text
								id="*_2"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="32"
								fontWeight="bold"
								letterSpacing="0em"
							>
								<tspan x="99.799" y="809.663">
									*
								</tspan>
							</text>
							<text
								id="+"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="12"
								fontWeight="300"
								letterSpacing="0em"
							>
								<tspan x="77.354" y="794.374">
									+
								</tspan>
							</text>
						</g>
						<g id="9">
							<path
								id="Rect - 9"
								fill="#323232"
								stroke="url(#paint4_linear)"
								strokeWidth="2"
								d="M230.9 731.905a9 9 0 019-9h57.549c8.638 0 15.64 7.002 15.64 15.64 0 12.314-9.982 22.296-22.296 22.296H239.9a9 9 0 01-9-9v-19.936z"
							></path>
							<text
								id="9_2"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="22"
								fontWeight="bold"
								letterSpacing="0em"
							>
								<tspan x="278.294" y="749.141">
									9
								</tspan>
							</text>
							<text
								id="wxyz"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="12"
								fontWeight="300"
								letterSpacing="0em"
							>
								<tspan x="246.153" y="747.968">
									wxyz
								</tspan>
							</text>
						</g>
						<g id="8">
							<rect
								id="Rect - 8"
								width="82.189"
								height="37.936"
								x="139.158"
								y="722.905"
								fill="#323232"
								stroke="url(#paint5_linear)"
								strokeWidth="2"
								rx="9"
							></rect>
							<text
								id="8_2"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="22"
								fontWeight="bold"
								letterSpacing="0em"
							>
								<tspan x="191.407" y="749.141">
									8
								</tspan>
							</text>
							<text
								id="tuv"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="12"
								fontWeight="300"
								letterSpacing="0em"
							>
								<tspan x="164.379" y="747.968">
									tuv
								</tspan>
							</text>
						</g>
						<g id="7">
							<path
								id="Rect - 7"
								fill="#323232"
								stroke="url(#paint6_linear)"
								strokeWidth="2"
								d="M47.411 738.545c0-8.638 7.002-15.64 15.64-15.64h58.628a9 9 0 019 9v19.936a9 9 0 01-9 9H69.707c-12.314 0-22.296-9.982-22.296-22.296z"
							></path>
							<text
								id="7_2"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="22"
								fontWeight="bold"
								letterSpacing="0em"
							>
								<tspan x="100.202" y="749.141">
									7
								</tspan>
							</text>
							<text
								id="pqrs"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="12"
								fontWeight="300"
								letterSpacing="0em"
							>
								<tspan x="69.279" y="747.968">
									pqrs
								</tspan>
							</text>
						</g>
						<g id="6">
							<path
								id="Rect - 6"
								fill="#323232"
								stroke="url(#paint7_linear)"
								strokeWidth="2"
								d="M230.9 680.101a9 9 0 019-9h57.549c8.638 0 15.64 7.002 15.64 15.64 0 12.314-9.982 22.296-22.296 22.296H239.9a9 9 0 01-9-9v-19.936z"
							></path>
							<text
								id="6_2"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="22"
								fontWeight="bold"
								letterSpacing="0em"
							>
								<tspan x="278.294" y="696.253">
									6
								</tspan>
							</text>
							<text
								id="mno"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="12"
								fontWeight="300"
								letterSpacing="0em"
							>
								<tspan x="247.489" y="695.074">
									mno
								</tspan>
							</text>
						</g>
						<g id="5">
							<rect
								id="Rect - 5"
								width="82.189"
								height="37.936"
								x="139.158"
								y="671.101"
								fill="#323232"
								stroke="url(#paint8_linear)"
								strokeWidth="2"
								rx="9"
							></rect>
							<text
								id="5_2"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="22"
								fontWeight="bold"
								letterSpacing="0em"
							>
								<tspan x="191.407" y="696.253">
									5
								</tspan>
							</text>
							<text
								id="jkl"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="12"
								fontWeight="300"
								letterSpacing="0em"
							>
								<tspan x="166.939" y="695.074">
									jkl
								</tspan>
							</text>
						</g>
						<g id="4">
							<path
								id="Rect - 4"
								fill="#323232"
								stroke="url(#paint9_linear)"
								strokeWidth="2"
								d="M47.411 686.741c0-8.638 7.002-15.64 15.64-15.64h58.628a9 9 0 019 9v19.936a9 9 0 01-9 9H69.707c-12.314 0-22.296-9.982-22.296-22.296z"
							></path>
							<text
								id="4_2"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="22"
								fontWeight="bold"
								letterSpacing="0em"
							>
								<tspan x="100.202" y="696.253">
									4
								</tspan>
							</text>
							<text
								id="ghi"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="12"
								fontWeight="300"
								letterSpacing="0em"
							>
								<tspan x="73.287" y="695.074">
									ghi
								</tspan>
							</text>
						</g>
						<g id="3">
							<path
								id="Rect - 3"
								fill="#323232"
								stroke="url(#paint10_linear)"
								strokeWidth="2"
								d="M230.9 628.294a9 9 0 019-9h57.099c8.886 0 16.09 7.204 16.09 16.09 0 12.661-10.264 22.925-22.925 22.925H239.9a9 9 0 01-9-9v-21.015z"
							></path>
							<text
								id="3_2"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="22"
								fontWeight="bold"
								letterSpacing="0em"
							>
								<tspan x="279.376" y="644.447">
									3
								</tspan>
							</text>
							<text
								id="def"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="12"
								fontWeight="300"
								letterSpacing="0em"
							>
								<tspan x="252.016" y="644.348">
									def
								</tspan>
							</text>
						</g>
						<g id="2">
							<rect
								id="Rect - 2"
								width="82.189"
								height="39.015"
								x="139.158"
								y="619.294"
								fill="#323232"
								stroke="url(#paint11_linear)"
								strokeWidth="2"
								rx="9"
							></rect>
							<text
								id="2_2"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="22"
								fontWeight="bold"
								letterSpacing="0em"
							>
								<tspan x="191.407" y="644.447">
									2
								</tspan>
							</text>
							<text
								id="abc"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Roboto"
								fontSize="12"
								fontWeight="300"
								letterSpacing="0em"
							>
								<tspan x="162.515" y="643.426">
									abc
								</tspan>
							</text>
						</g>
						<g id="1">
							<path
								id="Rect - 1"
								fill="#323232"
								stroke="url(#paint12_linear)"
								strokeWidth="2"
								d="M47.411 635.377c0-8.886 7.204-16.09 16.09-16.09h58.178a9 9 0 019 9v21.015a9 9 0 01-9 9H70.337c-12.662 0-22.926-10.264-22.926-22.925z"
							></path>
							<text
								id="1_2"
								fill="#fff"
								xmlSpace="preserve"
								style={{ whiteSpace: 'pre' }}
								fontFamily="Helvetica Neue"
								fontSize="22"
								fontWeight="bold"
								letterSpacing="0em"
							>
								<tspan x="100.202" y="644.447">
									1
								</tspan>
							</text>
						</g>
					</g>
					<g id="Link Buttons">
						<g id="instagram">
							<g id="Ellipse 22">
								<mask id="path-39-inside-1" fill="#fff">
									<path d="M52.571 545.976c-1.93 0-2.896 0-3.495.701-.599.702-.462 1.562-.188 3.282 1.099 6.89 5.04 13.643 11.65 19.914 7.567 7.177 18.453 13.554 31.933 18.712.82.314 1.23.471 1.666.443.436-.028.83-.24 1.616-.664l40.311-21.75c3.204-1.729 4.806-2.593 4.834-3.753.029-1.16-1.66-2.182-5.038-4.226-1.846-1.117-3.448-2.315-4.78-3.578-1.746-1.656-3.002-3.401-3.745-5.189-.893-2.147-1.339-3.22-1.843-3.556-.504-.336-1.323-.336-2.96-.336h-69.96z"></path>
								</mask>
								<path
									fill="#C4C4C4"
									stroke="url(#paint13_linear)"
									strokeWidth="10"
									d="M52.571 545.976c-1.93 0-2.896 0-3.495.701-.599.702-.462 1.562-.188 3.282 1.099 6.89 5.04 13.643 11.65 19.914 7.567 7.177 18.453 13.554 31.933 18.712.82.314 1.23.471 1.666.443.436-.028.83-.24 1.616-.664l40.311-21.75c3.204-1.729 4.806-2.593 4.834-3.753.029-1.16-1.66-2.182-5.038-4.226-1.846-1.117-3.448-2.315-4.78-3.578-1.746-1.656-3.002-3.401-3.745-5.189-.893-2.147-1.339-3.22-1.843-3.556-.504-.336-1.323-.336-2.96-.336h-69.96z"
									mask="url(#path-39-inside-1)"
								></path>
							</g>
							<g
								id="noun_instagram_3350818 1"
								fill="#616161"
								clipPath="url(#clip0)"
							>
								<path
									id="Vector"
									d="M99.056 554.611H87.67a2.41 2.41 0 00-2.401 2.402V568.4a2.409 2.409 0 002.401 2.402h11.387a2.409 2.409 0 002.402-2.402v-11.387a2.408 2.408 0 00-2.402-2.402zm1.053 13.789a1.052 1.052 0 01-1.053 1.052H87.67a1.053 1.053 0 01-1.052-1.052v-11.387a1.051 1.051 0 011.052-1.052h11.387a1.05 1.05 0 011.053 1.052V568.4z"
								></path>
								<path
									id="Vector_2"
									d="M93.363 558.659a4.046 4.046 0 00-3.97 4.837 4.045 4.045 0 005.519 2.95 4.043 4.043 0 002.498-3.74 4.05 4.05 0 00-4.047-4.047zm0 6.746a2.695 2.695 0 01-2.493-1.666 2.698 2.698 0 112.493 1.666z"
								></path>
								<path
									id="Vector_3"
									d="M97.748 559.333a1.012 1.012 0 100-2.024 1.012 1.012 0 000 2.024z"
								></path>
							</g>
						</g>
						<g id="email">
							<g id="Ellipse 23">
								<mask id="path-43-inside-2" fill="#fff">
									<path d="M105.769 589.141c-3.357 1.896-5.036 2.844-4.88 4.165.156 1.322 1.979 1.844 5.624 2.889 19.599 5.62 42.379 8.782 65.86 9.112 1.87.026 2.806.04 3.401-.546.596-.587.598-1.531.601-3.419l.056-29.186c.003-1.871.005-2.806-.552-3.388-.557-.582-1.52-.621-3.446-.701-7.446-.307-14.596-1.459-20.737-3.349-.872-.268-1.308-.402-1.718-.358-.409.045-.789.259-1.548.688l-42.661 24.093z"></path>
								</mask>
								<path
									fill="#C4C4C4"
									stroke="url(#paint14_linear)"
									strokeWidth="10"
									d="M105.769 589.141c-3.357 1.896-5.036 2.844-4.88 4.165.156 1.322 1.979 1.844 5.624 2.889 19.599 5.62 42.379 8.782 65.86 9.112 1.87.026 2.806.04 3.401-.546.596-.587.598-1.531.601-3.419l.056-29.186c.003-1.871.005-2.806-.552-3.388-.557-.582-1.52-.621-3.446-.701-7.446-.307-14.596-1.459-20.737-3.349-.872-.268-1.308-.402-1.718-.358-.409.045-.789.259-1.548.688l-42.661 24.093z"
									mask="url(#path-43-inside-2)"
								></path>
							</g>
							<g
								id="noun_Email_1046988 1"
								clipPath="url(#clip1)"
								opacity="0.75"
							>
								<g id="Group">
									<path
										id="Vector_4"
										fill="#3A3A3A"
										d="M143.595 577.584c-.905 0-1.651.895-1.651 1.982v8.807c0 1.087.746 1.982 1.651 1.982h13.945c.906 0 1.652-.895 1.652-1.982v-8.807c0-1.087-.746-1.982-1.652-1.982h-13.945zm.402 1.321h13.142l-6.319 6.317c-.098.098-.406.098-.505 0l-6.318-6.317zm-.952.764l4.472 4.473-4.472 4.163v-8.636zm15.046 0v8.636l-4.473-4.163 4.473-4.473zm-9.714 5.333l1.233 1.231c.562.562 1.354.562 1.915 0l1.233-1.231 4.324 4.032h-13.028l4.323-4.032z"
									></path>
								</g>
							</g>
						</g>
						<g id="website">
							<g id="Ellipse 24">
								<mask id="path-45-inside-3" fill="#fff">
									<path d="M252.576 589.142c3.357 1.895 5.036 2.843 4.88 4.165-.156 1.321-1.979 1.844-5.625 2.889-19.598 5.62-42.378 8.781-65.859 9.112-1.871.026-2.806.039-3.402-.547-.595-.586-.597-1.53-.6-3.418l-.055-28.785c-.004-1.871-.005-2.807.552-3.389.558-.582 1.521-.621 3.446-.698 7.649-.309 14.994-1.491 21.297-3.435.871-.268 1.306-.403 1.716-.358.41.044.79.258 1.549.687l42.101 23.777z"></path>
								</mask>
								<path
									fill="#C4C4C4"
									stroke="url(#paint15_linear)"
									strokeWidth="10"
									d="M252.576 589.142c3.357 1.895 5.036 2.843 4.88 4.165-.156 1.321-1.979 1.844-5.625 2.889-19.598 5.62-42.378 8.781-65.859 9.112-1.871.026-2.806.039-3.402-.547-.595-.586-.597-1.53-.6-3.418l-.055-28.785c-.004-1.871-.005-2.807.552-3.389.558-.582 1.521-.621 3.446-.698 7.649-.309 14.994-1.491 21.297-3.435.871-.268 1.306-.403 1.716-.358.41.044.79.258 1.549.687l42.101 23.777z"
									mask="url(#path-45-inside-3)"
								></path>
							</g>
							<g id="noun_website_4150876 1" opacity="0.75">
								<path
									id="Vector_5"
									fill="#3A3A3A"
									d="M212.117 581.885a7.287 7.287 0 10-10.704 8.167 7.28 7.28 0 009.959-2.636 7.285 7.285 0 00.745-5.525v-.006zm-6.12 7.862l-.206.03a6.026 6.026 0 01-1.433 0l-.2-.03-.298-.061a21.207 21.207 0 01-.461-2.944c.558 0 1.117.048 1.682.048.564 0 1.123 0 1.675-.048a21.22 21.22 0 01-.467 2.944l-.292.061zm-6.854-4.778c0-.097-.043-.194-.055-.292-.012-.097 0-.145-.036-.218a5.451 5.451 0 010-1.421c0-.073 0-.146.03-.218.03-.073.036-.195.055-.292a21.207 21.207 0 012.944-.461c-.042.564-.042 1.129-.042 1.688 0 .558 0 1.123.048 1.675a21.059 21.059 0 01-2.944-.461zm5.003-7.207l.218-.036c.236-.028.473-.043.71-.043.232.001.463.015.693.043l.218.036.286.055c.222.969.376 1.953.461 2.944a33.581 33.581 0 00-3.358 0 21.33 21.33 0 01.486-2.938l.286-.061zm2.75 5.993c0 .607 0 1.183-.055 1.766a31.545 31.545 0 01-3.533 0c-.055-.583-.055-1.159-.055-1.766 0-.608 0-1.184.055-1.767a32.03 32.03 0 013.533 0c.055.583.055 1.159.055 1.767zm1.166-1.676c.991.084 1.975.239 2.944.461 0 .097.043.195.055.292.012.097 0 .145.036.218.062.472.062.949 0 1.421 0 .073 0 .146-.03.219-.031.072-.037.194-.055.291-.969.223-1.953.377-2.944.461 0-.558.048-1.117.048-1.681 0-.565-.006-1.13-.054-1.682zm2.507-.874a24.868 24.868 0 00-2.592-.353 24.868 24.868 0 00-.353-2.592 6.075 6.075 0 012.945 2.945zm-8.045-2.945c-.162.857-.28 1.723-.352 2.592-.869.072-1.735.19-2.592.353a6.077 6.077 0 012.944-2.945zm-2.944 8.045c.857.163 1.723.28 2.592.352.072.869.19 1.735.352 2.592a6.075 6.075 0 01-2.944-2.944zm8.044 2.944c.163-.857.281-1.723.353-2.592.869-.072 1.735-.19 2.592-.352a6.073 6.073 0 01-2.945 2.944z"
								></path>
							</g>
						</g>
						<g id="back">
							<g id="Ellipse 21">
								<mask id="path-47-inside-4" fill="#fff">
									<path d="M305.772 545.976c1.931 0 2.896 0 3.495.701.599.702.462 1.562.188 3.282-1.099 6.89-5.04 13.643-11.651 19.914-7.567 7.177-18.452 13.554-31.932 18.712-.82.314-1.231.471-1.667.443-.436-.028-.829-.24-1.615-.664l-40.31-21.749c-3.204-1.729-4.806-2.593-4.834-3.753-.029-1.16 1.66-2.182 5.038-4.226 1.846-1.117 3.449-2.316 4.781-3.579 1.745-1.656 3.001-3.401 3.745-5.189.892-2.147 1.339-3.22 1.843-3.556.504-.336 1.322-.336 2.959-.336h69.96z"></path>
								</mask>
								<path
									fill="#C4C4C4"
									stroke="url(#paint16_linear)"
									strokeWidth="10"
									d="M305.772 545.976c1.931 0 2.896 0 3.495.701.599.702.462 1.562.188 3.282-1.099 6.89-5.04 13.643-11.651 19.914-7.567 7.177-18.452 13.554-31.932 18.712-.82.314-1.231.471-1.667.443-.436-.028-.829-.24-1.615-.664l-40.31-21.749c-3.204-1.729-4.806-2.593-4.834-3.753-.029-1.16 1.66-2.182 5.038-4.226 1.846-1.117 3.449-2.316 4.781-3.579 1.745-1.656 3.001-3.401 3.745-5.189.892-2.147 1.339-3.22 1.843-3.556.504-.336 1.322-.336 2.959-.336h69.96z"
									mask="url(#path-47-inside-4)"
								></path>
							</g>
							<g id="noun_Backspace_471426 2" opacity="0.75">
								<path
									id="Vector_6"
									fill="#3A3A3A"
									d="M259.433 555.172a1.16 1.16 0 00-.842-.359 1.163 1.163 0 00-.842.359l-5.137 5.138a1.172 1.172 0 00-.36.842 1.166 1.166 0 00.36.842l5.051 5.008a1.191 1.191 0 101.684-1.684l-3.109-3.065h19.083v3.929a1.165 1.165 0 002.332 0v-5.095a1.179 1.179 0 00-.342-.824 1.174 1.174 0 00-.824-.341h-20.119l3.065-3.066a1.162 1.162 0 00.266-1.299 1.166 1.166 0 00-.266-.385z"
								></path>
							</g>
						</g>
					</g>
					<g id="Control Buttons">
						<g id="camera">
							<g id="Rectangle 21">
								<mask id="path-49-inside-5" fill="#fff">
									<path d="M138.158 506.321c0-4.714 0-7.071 1.465-8.536 1.464-1.464 3.821-1.464 8.535-1.464h64.189c4.714 0 7.071 0 8.536 1.464 1.464 1.465 1.464 3.822 1.464 8.536v26.126c0 9.428 0 14.142-2.929 17.071-2.928 2.929-7.643 2.929-17.071 2.929h-44.189c-9.428 0-14.142 0-17.071-2.929-2.929-2.929-2.929-7.643-2.929-17.071v-26.126z"></path>
								</mask>
								<path
									fill="#FDFDFD"
									stroke="url(#paint17_linear)"
									strokeWidth="12"
									d="M138.158 506.321c0-4.714 0-7.071 1.465-8.536 1.464-1.464 3.821-1.464 8.535-1.464h64.189c4.714 0 7.071 0 8.536 1.464 1.464 1.465 1.464 3.822 1.464 8.536v26.126c0 9.428 0 14.142-2.929 17.071-2.928 2.929-7.643 2.929-17.071 2.929h-44.189c-9.428 0-14.142 0-17.071-2.929-2.929-2.929-2.929-7.643-2.929-17.071v-26.126z"
									mask="url(#path-49-inside-5)"
								></path>
							</g>
							<g id="noun_Camera_78831 1" fill="#000">
								<path
									id="Vector_7"
									d="M179.711 530.256a6.12 6.12 0 100-12.24 6.12 6.12 0 000 12.24z"
								></path>
								<path
									id="Vector_8"
									d="M194.671 514.271h-6.073a1.36 1.36 0 01-1.131-.605l-1.912-2.869a1.361 1.361 0 00-1.132-.606h-9.425c-.454 0-.879.227-1.131.606l-1.912 2.869a1.363 1.363 0 01-1.132.605h-6.072a2.04 2.04 0 00-2.04 2.04v17a2.04 2.04 0 002.04 2.04h29.92a2.04 2.04 0 002.039-2.04v-17a2.04 2.04 0 00-2.039-2.04zm-14.96 18.025c-4.5 0-8.16-3.66-8.16-8.16 0-4.498 3.66-8.16 8.16-8.16 4.499 0 8.16 3.662 8.16 8.16 0 4.5-3.661 8.16-8.16 8.16zm10.2-14.951a.673.673 0 01-.674.672h-.013a.673.673 0 01-.674-.672v-.015c0-.372.302-.673.674-.673h.013c.372 0 .674.301.674.673v.015z"
								></path>
							</g>
						</g>
						<g id="ok">
							<path
								id="Rectangle 16"
								fill="#FDFDFD"
								stroke="url(#paint18_linear)"
								strokeWidth="5"
								d="M41.356 508.096a9.274 9.274 0 019.274-9.275h65.653c2.427 0 3.997.005 5.153.161 1.084.146 1.424.381 1.614.571.191.191.426.53.572 1.615.155 1.156.161 2.725.161 5.153v23.46c0 2.284-.005 3.761-.144 4.855-.131 1.03-.344 1.363-.511 1.545l1.845 1.687-1.845-1.686a2.37 2.37 0 01-.159.158c-.182.167-.515.38-1.545.511-1.094.139-2.571.144-4.856.144H70.255c-15.96 0-28.9-12.939-28.9-28.899z"
							></path>
							<g id="noun_call_1975558 (1) 1" clipPath="url(#clip2)">
								<path
									id="Vector_9"
									fill="#6AC376"
									d="M91.996 505.965c.275-.029.638-.016 1.091.04.453.055.813.125 1.078.21.531.16 1.135.723 1.812 1.69.619.901.978 1.819 1.076 2.755.029.274.039.543.03.806a6.624 6.624 0 01-.098.897c-.057.334-.106.584-.145.747-.04.163-.114.457-.223.879-.11.423-.175.681-.196.776a13.878 13.878 0 01-.985 2.801c-.667 1.386-1.62 2.845-2.862 4.379-1.242 1.533-2.471 2.77-3.688 3.71a13.923 13.923 0 01-2.535 1.546c-.089.04-.328.157-.719.353-.39.195-.661.329-.813.401-.152.073-.385.172-.701.297-.316.126-.601.22-.857.283a5.91 5.91 0 01-.795.138c-.935.098-1.907-.062-2.917-.48-1.087-.461-1.764-.935-2.03-1.421a6.062 6.062 0 01-.43-1.011c-.149-.431-.237-.784-.266-1.058a.857.857 0 01.012-.325c.042-.19.4-.5 1.074-.93.181-.133.44-.314.775-.544.336-.231.64-.443.912-.636.273-.193.528-.379.766-.558.038-.035.156-.137.354-.307.198-.17.367-.298.506-.385.14-.086.282-.137.424-.152.203-.022.472.097.808.354.335.258.648.544.938.857.29.314.592.601.907.861.315.26.564.38.747.361a1.03 1.03 0 00.335-.113c.132-.065.232-.119.3-.162.067-.043.181-.127.343-.252.162-.125.252-.194.271-.206 1.312-.919 2.413-1.929 3.305-3.03.891-1.1 1.65-2.388 2.276-3.862.008-.021.056-.124.145-.308.088-.184.147-.313.175-.388a3.4 3.4 0 00.097-.326c.036-.143.05-.26.04-.351-.02-.183-.189-.402-.508-.656a9.214 9.214 0 00-1.03-.709 7.479 7.479 0 01-1.034-.739c-.322-.275-.494-.514-.515-.717a1.002 1.002 0 01.061-.446c.056-.154.146-.346.271-.575.125-.229.2-.366.227-.41.126-.27.255-.558.387-.865.132-.307.276-.648.432-1.024.155-.376.279-.667.37-.872.281-.749.51-1.163.687-1.244a.88.88 0 01.315-.079z"
								></path>
							</g>
						</g>
						<g id="cancel">
							<path
								id="Rectangle 11"
								fill="#FDFDFD"
								stroke="url(#paint19_linear)"
								strokeWidth="5"
								d="M236.718 506.321c0-2.428.005-3.997.16-5.153.146-1.085.382-1.425.572-1.615.19-.19.53-.426 1.614-.571 1.157-.156 2.726-.161 5.154-.161h61.335a9.274 9.274 0 019.274 9.274c0 15.961-12.938 28.9-28.899 28.9h-42.476c-2.046 0-3.368-.004-4.356-.117-.937-.108-1.254-.285-1.421-.416a2.502 2.502 0 01-.424-.424c-.132-.168-.309-.485-.416-1.421-.114-.988-.117-2.311-.117-4.357v-23.939z"
							></path>
							<g id="noun_Hang Up_5012 2" fill="#D04033" clipPath="url(#clip3)">
								<path
									id="Vector_10"
									d="M286.917 513.768c-6.879-6.878-18.03-6.876-24.903.001-1.681 1.681-.231 6.401-.231 6.401a.86.86 0 00.998.575l6.455-1.502c.423-.097.768-.532.768-.966l.001-3.449a.79.79 0 01.788-.788h7.753a.79.79 0 01.789.788l-.001 3.248a.976.976 0 00.777.923l7.145 1.232a.738.738 0 00.867-.648s.475-4.134-1.206-5.815z"
								></path>
								<path
									id="Vector_11"
									d="M276.344 517.115h-3.275v4.108h-2.457l4.083 7.071 4.084-7.071h-2.435v-4.108z"
								></path>
							</g>
						</g>
					</g>
					<g id="Screen Frame">
						<rect
							id="Screen base"
							width="305.114"
							height="337.319"
							x="26.076"
							y="148.947"
							fill="#EAEAEB"
							stroke="#CBCBCB"
							strokeWidth="2.5"
							rx="43.75"
						></rect>
						<g id="Lirola Logo and Text">
							<g id="Lirola Title">
								<path
									id="Lirola Text"
									fill="#323232"
									d="M163.327 184.672l.713-3.989h-7.694l2.304-13.108h-5.604l-3.016 17.097h13.297zm8.145 0l3.016-17.097h-5.604l-3.016 17.097h5.604zm11.176-13.108h2.612c.618 0 1.101.119 1.449.357.364.237.546.593.546 1.068 0 .016-.008.071-.024.166-.016.08-.023.143-.023.19-.095.57-.388.982-.879 1.235-.475.253-1.164.38-2.066.38h-2.208l.593-3.396zm.452 7.148c.997 0 1.686.127 2.065.38.38.237.57.657.57 1.258 0 .333-.055.776-.166 1.33-.174 1.045-.261 1.884-.261 2.517 0 .079.008.182.024.309v.166h5.675l.095-.522c-.285 0-.428-.19-.428-.57 0-.238.087-.847.262-1.829.031-.174.063-.372.095-.593.126-.665.19-1.235.19-1.71 0-.871-.175-1.48-.523-1.828-.348-.349-.934-.681-1.757-.998.997-.269 1.797-.775 2.398-1.519.618-.744 1.021-1.631 1.211-2.66.079-.443.119-.839.119-1.187 0-1.282-.53-2.216-1.591-2.802-1.045-.586-2.794-.879-5.248-.879h-8.073l-3.016 17.097h5.604l1.045-5.96h1.71zm20.856-7.409c.95 0 1.638.309 2.066.926.443.618.665 1.417.665 2.399 0 .459-.048.926-.143 1.401-.269 1.503-.752 2.699-1.448 3.585-.697.887-1.623 1.33-2.779 1.33-.949 0-1.63-.301-2.042-.902-.396-.618-.593-1.417-.593-2.399 0-.506.047-1.044.142-1.614a9.81 9.81 0 01.475-1.686 6.363 6.363 0 01.807-1.52 3.796 3.796 0 011.211-1.092 3.205 3.205 0 011.639-.428zm.783-4.179c-1.313 0-2.556.206-3.728.617a9.958 9.958 0 00-3.158 1.805 10.38 10.38 0 00-2.351 2.802c-.617 1.092-1.037 2.303-1.258 3.633a11.447 11.447 0 00-.214 2.161c0 2.216.665 3.934 1.995 5.153 1.345 1.219 3.198 1.828 5.556 1.828a11.15 11.15 0 003.633-.593 10.504 10.504 0 003.182-1.781 10.49 10.49 0 002.399-2.897c.649-1.14 1.1-2.414 1.353-3.823.111-.618.166-1.219.166-1.805 0-.982-.15-1.9-.451-2.755a6.25 6.25 0 00-1.377-2.255c-.618-.649-1.409-1.156-2.375-1.52-.965-.38-2.089-.57-3.372-.57zm21.918 17.548l.712-3.989h-7.693l2.303-13.108h-5.604l-3.016 17.097h13.298zm12.751-5.818h-3.538l2.826-6.126.712 6.126zm-6.269 5.818l1.045-2.256h5.58l.261 2.256h5.581l-3.111-17.097h-5.699l-9.142 17.097h5.485z"
								></path>
							</g>
							<g id="lirolalogo">
								<g id="Layer 2">
									<g id="Layer 1" fill="#323232">
										<path
											id="Vector_12"
											d="M127.5 191c-2.092 0-4.122-.41-6.033-1.218a15.545 15.545 0 01-8.249-8.248A15.416 15.416 0 01112 175.5c0-2.092.41-4.122 1.218-6.033a15.55 15.55 0 018.249-8.249A15.408 15.408 0 01127.5 160c2.092 0 4.122.41 6.034 1.218a15.545 15.545 0 018.248 8.249 15.391 15.391 0 011.219 6.033c0 2.092-.41 4.122-1.219 6.033a15.545 15.545 0 01-8.248 8.249A15.416 15.416 0 01127.5 191zm0-30.287c-1.997 0-3.933.39-5.756 1.162a14.836 14.836 0 00-7.869 7.869 14.676 14.676 0 00-1.162 5.756c0 1.997.39 3.933 1.162 5.756a14.836 14.836 0 007.869 7.869 14.676 14.676 0 005.756 1.162c1.997 0 3.933-.39 5.756-1.162a14.836 14.836 0 007.869-7.869 14.676 14.676 0 001.162-5.756c0-1.997-.39-3.933-1.162-5.756a14.836 14.836 0 00-7.869-7.869 14.676 14.676 0 00-5.756-1.162z"
										></path>
										<path
											id="Vector_13"
											d="M116.623 177.801l6.342 3.215a.022.022 0 00.013.004c.005 0 .009 0 .014-.002.004-.002.008-.004.011-.008a.044.044 0 00.008-.011l6.291-16.588a.033.033 0 01.04-.019.03.03 0 01.018.015.03.03 0 01.003.023l-5.219 22.066a.067.067 0 01-.017.031.067.067 0 01-.066.016.064.064 0 01-.029-.019l-7.445-8.672a.032.032 0 01-.007-.019.025.025 0 01.006-.02.031.031 0 01.016-.012.038.038 0 01.021 0z"
										></path>
										<path
											id="Vector_14"
											d="M138.375 177.478l-6.16 3.55a.033.033 0 01-.013.004l-.014-.001-.012-.007a.044.044 0 01-.008-.011l-7.171-16.227a.028.028 0 00-.016-.016.029.029 0 00-.024-.001.033.033 0 00-.017.016.03.03 0 00-.002.023l6.393 21.755a.064.064 0 00.05.045.053.053 0 00.035-.003.06.06 0 00.029-.021l6.969-9.057a.036.036 0 00.006-.02.03.03 0 00-.007-.02.034.034 0 00-.017-.011.03.03 0 00-.021.002z"
										></path>
									</g>
									<path
										id="Vector_15"
										stroke="#323232"
										strokeWidth="2"
										d="M127.5 191c8.56 0 15.5-6.94 15.5-15.5 0-8.56-6.94-15.5-15.5-15.5-8.56 0-15.5 6.94-15.5 15.5 0 8.56 6.94 15.5 15.5 15.5z"
									></path>
								</g>
							</g>
						</g>
						<rect
							id="screen backdrop"
							width="263.361"
							height="259.043"
							x="48"
							y="200"
							fill="#BEBEBE"
							rx="7"
						></rect>
						<rect
							id="screenedge"
							width="249.912"
							height="243.741"
							x="55"
							y="208"
							rx="2"
							ref={ref}
						></rect>
					</g>
				</g>
				<defs>
					<radialGradient
						id="paint0_radial"
						cx="0"
						cy="0"
						r="1"
						gradientTransform="rotate(-62.03 609.118 274.664) scale(1533.19 655.345)"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="gray"></stop>
						<stop offset="1"></stop>
					</radialGradient>
					<linearGradient
						id="paint1_linear"
						x1="271.994"
						x2="271.994"
						y1="664.705"
						y2="813.655"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1" stopColor="#323232"></stop>
					</linearGradient>
					<linearGradient
						id="paint2_linear"
						x1="180.253"
						x2="180.253"
						y1="669.562"
						y2="813.655"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1" stopColor="#323232"></stop>
					</linearGradient>
					<linearGradient
						id="paint3_linear"
						x1="89.585"
						x2="89.045"
						y1="671.181"
						y2="813.655"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1" stopColor="#323232"></stop>
					</linearGradient>
					<linearGradient
						id="paint4_linear"
						x1="271.994"
						x2="271.994"
						y1="619.907"
						y2="761.841"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1" stopColor="#323232"></stop>
					</linearGradient>
					<linearGradient
						id="paint5_linear"
						x1="180.253"
						x2="180.253"
						y1="619.907"
						y2="761.841"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1" stopColor="#323232"></stop>
					</linearGradient>
					<linearGradient
						id="paint6_linear"
						x1="89.585"
						x2="89.045"
						y1="617.208"
						y2="761.841"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1" stopColor="#323232"></stop>
					</linearGradient>
					<linearGradient
						id="paint7_linear"
						x1="271.994"
						x2="271.994"
						y1="564.325"
						y2="710.037"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1" stopColor="#323232"></stop>
					</linearGradient>
					<linearGradient
						id="paint8_linear"
						x1="180.253"
						x2="180.253"
						y1="577.277"
						y2="710.037"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1" stopColor="#323232"></stop>
					</linearGradient>
					<linearGradient
						id="paint9_linear"
						x1="89.585"
						x2="89.045"
						y1="573.499"
						y2="710.037"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1" stopColor="#323232"></stop>
					</linearGradient>
					<linearGradient
						id="paint10_linear"
						x1="271.994"
						x2="271.994"
						y1="523.311"
						y2="659.309"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1" stopColor="#323232"></stop>
					</linearGradient>
					<linearGradient
						id="paint11_linear"
						x1="180.253"
						x2="180.253"
						y1="523.311"
						y2="659.309"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1" stopColor="#323232"></stop>
					</linearGradient>
					<linearGradient
						id="paint12_linear"
						x1="89.045"
						x2="89.045"
						y1="523.305"
						y2="659.302"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1" stopColor="#323232"></stop>
					</linearGradient>
					<linearGradient
						id="paint13_linear"
						x1="98.444"
						x2="97.208"
						y1="564.875"
						y2="631.88"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#C4C4C4"></stop>
						<stop offset="1"></stop>
					</linearGradient>
					<linearGradient
						id="paint14_linear"
						x1="148.411"
						x2="149.627"
						y1="585.864"
						y2="653.442"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#C4C4C4"></stop>
						<stop offset="1"></stop>
					</linearGradient>
					<linearGradient
						id="paint15_linear"
						x1="207.235"
						x2="209.058"
						y1="588.728"
						y2="644.275"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#C4C4C4"></stop>
						<stop offset="1"></stop>
					</linearGradient>
					<linearGradient
						id="paint16_linear"
						x1="264.674"
						x2="265.292"
						y1="567.739"
						y2="609.546"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#C4C4C4"></stop>
						<stop offset="1" stopColor="#323232"></stop>
					</linearGradient>
					<linearGradient
						id="paint17_linear"
						x1="180.253"
						x2="180.253"
						y1="508.194"
						y2="964.217"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1"></stop>
					</linearGradient>
					<linearGradient
						id="paint18_linear"
						x1="83.122"
						x2="83.122"
						y1="511.432"
						y2="637.715"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1" stopColor="#5C5C5C"></stop>
					</linearGradient>
					<linearGradient
						id="paint19_linear"
						x1="276.299"
						x2="276.299"
						y1="517.908"
						y2="640.953"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff"></stop>
						<stop offset="1" stopColor="#5C5C5C"></stop>
					</linearGradient>
					<clipPath id="clip0">
						<path
							fill="#fff"
							d="M0 0H16.19V16.19H0z"
							transform="translate(85.268 554.611)"
						></path>
					</clipPath>
					<clipPath id="clip1">
						<path
							fill="#fff"
							d="M0 0H18.349V22.019H0z"
							transform="translate(141.393 572.96)"
						></path>
					</clipPath>
					<clipPath id="clip2">
						<path
							fill="#fff"
							d="M0 0H21.587V21.587H0z"
							transform="rotate(-96 276.903 229.809)"
						></path>
					</clipPath>
					<clipPath id="clip3">
						<path
							fill="#fff"
							d="M0 0H26.984V26.984H0z"
							transform="translate(261.202 504.961)"
						></path>
					</clipPath>
				</defs>
			</svg>
			<ScreenContainer bbox={bbox}>{children}</ScreenContainer>
		</PhoneContainer>
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
	background-color: green;
	z-index: 1000;
	width: ${(props) => props.bbox.width}px;
	height: ${(props) => props.bbox.height}px;
	top: ${(props) => props.bbox.top}px;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
`;

export default Phone;
