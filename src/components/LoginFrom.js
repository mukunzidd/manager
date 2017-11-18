import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {

    onEmailChange(email) {
        this.props.emailChanged(email);
    }
    onPasswordChange(password) {
        this.props.passwordChanged(password);
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
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

// Map state to props
const mapStateToProps = state => {
    const { email, password } = state.auth;
    return {
        email: email,
        password: password
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);