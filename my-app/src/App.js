import React, {Component} from 'react';
import './App.css';
import MainPage from './mainPage/jsx/mainPage';
import {
    Route,
    HashRouter,
    Switch
} from 'react-router-dom';
import Registration from './registration/jsx/registration';
import SignIn from './signIn/jsx/sigIn';
import AddPatient from './addPatient/jsx/addPatient'


class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                   <Switch>
                        <Route exact path='/' component={MainPage}/>
                        <Route path='/register' component={Registration}/>
                        <Route path='/login' component={SignIn}/>
                        <Route path='/add' component={AddPatient}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}


export default App;
