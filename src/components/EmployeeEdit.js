import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate, employeeEdit, employeeDelete } from '../actions';
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
    onDecline() {
        this.setState({ showModal: false })
    }
    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
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
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
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

export default connect(mapStateToProps, { employeeUpdate, employeeEdit, employeeDelete })(EmployeeEdit);