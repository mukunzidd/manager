import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate, employeeEdit } from '../actions';
import Communications from 'react-native-communications';
import { Text } from 'react-native';

class EmployeeEdit extends Component {
    state = { showModal: false }
    componentWillMount() {
        console.log(this.props.employeeUpdate);
        // Challenge use an NewAction
        // Lodashing
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeEdit({ name, phone, shift, uid: this.props.employee.uid });
    }
    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your working shift will be on ${shift}`);
    }
    onFirePress() {
        this.setState({ showModal: true })
    }
    render() {
        console.log(this.props.employeeUpdate);
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onFirePress.bind(this)}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={() => console.log('Fired')}
                    onDecline={() => console.log('Naaaaht fired')}
                >
                    Are you outta ya mind u wanna fire him?
                </Confirm>
            </Card>
        );
    }
}

mapStateToProps = (state) => {
    // console.log(state);
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeEdit })(EmployeeEdit);