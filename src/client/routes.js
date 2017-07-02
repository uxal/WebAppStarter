/**
 * Created by dragos on 02/07/2017.
 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * Load the components below
 */
import HomeIndex from './components/home';

function dummyPageOne() {
    return (<div>This is the FIRST dummy page</div>);
}

function dummyPageTwo() {
    return (<div>This is the SECOND dummy Page</div>);
}


const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/one" component={dummyPageOne}/>
                    <Route path="/two" component={dummyPageTwo}/>
                    <Route path="/" component={HomeIndex}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default AppRouter;

