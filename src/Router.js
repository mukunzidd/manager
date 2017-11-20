import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginFrom';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ backgroundColor: '#eee', flex: 1 }}>
            <Scene key="root" hideNavBar>
                <Scene key="root">
                    <Scene key="login" component={LoginForm} title="Log In Bruh!" />
                </Scene>
                <Scene key="main">
                    <Scene
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        initial
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="New Employee" />
                    <Scene key="employeeEdit" component={EmployeeEdit} title="Editing Employee" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;