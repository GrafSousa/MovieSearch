import React from 'react';
import { Provider } from 'react-redux';

import { Home } from './pages/Home';
import { createAppStore } from './Redux/index';
import GlobalStyle from './styles/global';

const { store } = createAppStore();

function App() {
	return (
		<>
			<Provider store={store}>
				<GlobalStyle />
				<Home />
			</Provider>
		</>
	);
}


export default App;
