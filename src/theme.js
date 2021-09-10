import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		phoneShell: '#5C5C5C',
		numKey: '#323232',
	},
	fonts: ['Press Start 2P', 'Roboto'],
	fontSizes: {
		small: '1em',
		medium: '2em',
		large: '3em',
	},
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
