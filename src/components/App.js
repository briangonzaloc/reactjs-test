import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetail from '../pages/BadgeDetailsContainer';
import NotFound from '../pages/NotFound';
import Layout from './Layout';

function App() {
    return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/badges" component={Badges} />
                        <Route exact path="/badges/new" component={BadgeNew} />
                        <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                        <Route exact path="/badges/:badgeId" component={BadgeDetail} />
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
}

export default App;