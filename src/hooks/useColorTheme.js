import React from 'react';

function reducer(state, action) {
	switch (action.type) {
		case 'activate':
			return "dark";
		case 'desactivate':
			return "light";
		default:
			throw new Error();
	}
}

const useColorTheme = () => {
	let initialState = "dark";
	const [state, dispatch] = React.useReducer(reducer, initialState);
	// const ThemeContext = React.createContext(state);
	return [state, dispatch];
}

export default useColorTheme;
