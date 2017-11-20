import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        const { name, shift, phone } = this.props.employee;
        return (
            <CardSection>
                <Text style={amastile.nameStyle}>{name}</Text>
            </CardSection>
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