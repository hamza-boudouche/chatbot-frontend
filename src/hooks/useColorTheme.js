import React from 'react';

function reducer(state, action) {
	switch (action.type) {
		case 'activate':
			console.log("activating ...");
			return "dark";
		case 'desactivate':
			console.log("desactivating ...");
			return "light";
		default:
			throw new Error();
	}
}

const useColorTheme = () => {
	let initialState = "dark";
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const ThemeContext = React.createContext(state);
	return [ThemeContext, dispatch];
}

export default useColorTheme;
