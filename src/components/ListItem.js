import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
    onNamePress() {
        Actions.employeeCreate({ employee: this.props.employee });
    }
    render() {
        const { name, shift, phone } = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onNamePress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={amastile.nameStyle}>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const amastile = {
    nameStyle: {
        fontSize: 18,
        padding: 5,
        paddingLeft: 10
    }
}

export default ListItem;