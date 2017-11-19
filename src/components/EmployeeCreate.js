import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Picker, Text } from 'react-native';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Sunday' });
    }
    render() {
        const { name, phone, shift } = this.props;
        const { pickerTextStyle, pickerStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="John Doe"
                        value={name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="+250 784 587 487"
                        value={phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>
                <CardSection style={{ height: 80 }}>
                    <Text style={pickerTextStyle}>Shift</Text>
                    <Picker
                        style={pickerStyle}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Sunday" value="sun" />
                        <Picker.Item label="Monday" value="mon" />
                        <Picker.Item label="Tuesaday" value="tue" />
                        <Picker.Item label="Wednesday" value="wed" />
                        <Picker.Item label="Thursday" value="thu" />
                        <Picker.Item label="Friday" value="fri" />

                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Hire!
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    pickerStyle: {
        flex: 1,
        marginLeft: 60,
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);  