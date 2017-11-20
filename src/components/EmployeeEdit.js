import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeEdit extends Component {
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
        console.log(name, phone, shift);
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
            </Card>
        );
    }
}

mapStateToProps = (state) => {
    // console.log(state);
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);