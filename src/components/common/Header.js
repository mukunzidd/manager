// import for making a component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};

// Styles
const styles = {
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    viewStyle: {
        height: 60,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 4,
        borderBottomColor: 'purple',
        shadowColor: '#eee',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        position: 'relative',
        elevation: 2,
    }
}

// make the component available to the other partsss of the app
export { Header };

