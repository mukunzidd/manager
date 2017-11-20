import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, cardStyle, textStyle, btnStyle, btnContStyle } = styles;
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => { }}
        >
            <View style={containerStyle}>
                <CardSection style={cardStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>
                <CardSection style={btnContStyle}>
                    <Button style={btnStyle} onPress={onDecline}>Nope</Button>
                    <Button style={btnStyle} onPress={onAccept}>Yeah</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        flex: 1,
        position: 'relative',
        justifyContent: 'center'
    },
    btnContStyle: {
        flexDirection: 'row'
    },
    btnStyle: {
        margin: 5,
        padding: 2
    }
}

export { Confirm };