import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { View, Text } from 'react-native';

class LoginForm extends Component {

    onEmailChange(email) {
        this.props.emailChanged(email);
    }
    onPasswordChange(password) {
        this.props.passwordChanged(password);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View>
                    <Text style={styles.errorStyle}> {this.props.error}</Text>
                </View>
            );
        }
    }

    render() {
        const { email, password } = this.props;
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@mail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

// Styles
const styles = {
    errorStyle: {
        alignSelf: 'center',
        color: 'red',
        padding: 10,
    }
}

// Map state to props
const mapStateToProps = state => {
    const { email, password, error } = state.auth;
    return {
        email: email,
        password: password,
        error: error
    };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);