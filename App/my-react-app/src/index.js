import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import kontakt from './kontakt.js';
import galeria from './galeria.js';
import ponuka from './ponuka.js';



ReactDOM.render(
<BrowserRouter>
<div>
<Route exact path="/" component={App} />
<Route path="/kontakt" component={kontakt} />
<Route path="/galeria" component={galeria} />
<Route path="/ponuka" component={ponuka} />
</div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();