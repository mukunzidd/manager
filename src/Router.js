import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginFrom';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene
                    key="login"
                    component={LoginForm}
                    title="Log In Bruh!"
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;