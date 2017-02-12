import React from 'react';
import ReactModal from 'react-modal';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {teal100} from 'material-ui/styles/colors'
import {Field, reduxForm} from 'redux-form';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)'
    },
    content: {
        width: "25%",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

const styles = {
    buttonStyle: {
        width: 'auto',
        height: 'auto',
        padding: '6px',
        marginLeft: '90%',
        position: 'absolute',
        bottom: 50,
        left: 20
    },
    buttonIconStyle: {
        fontSize: '18px',
        margin: '0 auto',
        position: 'relative'
    }
};

const renderField = field => {
    return (
        <div>
            <TextField
                {...field.input}
                {...field.custom}
                type={field.type}
                hintText={field.label}
                fullWidth={true}
                errorText={field.touched && field.error}
                floatingLabelText={field.label}/>
        </div>
    );
};

let LoginForm = ({
    error,
    handleSubmit,
    pristine,
    reset,
    submitting,
    showModal,
    onCloseClick,
    onLogInClick
}) => {

    return (
        <ReactModal
            isOpen={showModal}
            closeTimeoutMS={5}
            style={customStyles}
            contentLabel="Modal">
            <div
                id="container"
                style={{
                position: 'relative'
            }}>
                <IconButton
                    onClick={() => onCloseClick()}
                    style={styles.buttonStyle}
                    iconClassName="material-icons"
                    iconStyle={styles.buttonIconStyle}>close</IconButton>
                <h1 style={{
                    textAlign: 'center'
                }}>
                    Log In
                </h1>
            </div>
            <Divider/>
            <br/>
            <form
                onSubmit={handleSubmit(onLogInClick)}>
                <Field name="username" type="text" component={renderField} label="Username"/>
                <Field
                    name="password"
                    type="password"
                    component={renderField}
                    label="Password"/> {error && <strong>{error}</strong>}
                <br/>
                <div>
                    <FlatButton
                        backgroundColor={teal100}
                        style={{
                        marginLeft: '35%'
                    }}
                        type="submit"
                        disabled={submitting}>Log In</FlatButton>
                </div>
            </form>
        </ReactModal>
    )
}
export default LoginForm = reduxForm({form: 'LoginForm'})(LoginForm)
