import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import { Home } from './pages/Home';
import { createAppStore } from './Redux/index';
import GlobalStyle from './styles/global';

const { store } = createAppStore();

function App() {
	return (
		<>
			<Provider store={store}>
				<Home />
				<GlobalStyle />
				<ToastContainer autoClose={3000} />
			</Provider>
		</>
	);
}


export default App;
