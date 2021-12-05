import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import {FavoritesContextProvider} from "./store/favorites-context";

const app = (
	<FavoritesContextProvider>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</FavoritesContextProvider>
)

ReactDOM.render(app, document.getElementById('root'));
