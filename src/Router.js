import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginFrom';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ backgroundColor: '#eee', flex: 1 }}>
            <Scene key="root" hideNavBar>
                <Scene key="root">
                    <Scene key="login" component={LoginForm} title="Log In Bruh!" />
                </Scene>
                <Scene key="main">
                    <Scene key="employeeList" component={EmployeeList} title="Employees" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;