import React, { Component } from 'react';
import { CardSection, Input } from './common';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
    render() {
        const { pickerTextStyle, pickerStyle } = styles;
        console.log(this.props);
        const { name, phone, shift } = this.props;
        return (
            <View>
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
            </View>
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

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
    console.log('Form State: ' + state);
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);