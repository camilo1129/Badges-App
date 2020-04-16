import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew.js';
import Badges from '../pages/Badges.js';


function App() {
    return (
        <BrowserRouter>
            <Route path="/badges" component={Badges} />
            <Route path="/badges/new" component={BadgeNew} />
        </BrowserRouter>
    );
}

export default App;