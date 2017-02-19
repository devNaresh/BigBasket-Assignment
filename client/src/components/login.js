import React from 'react';
import Modal from 'react-responsive-modal';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {teal100} from 'material-ui/styles/colors'
import {Field, reduxForm} from 'redux-form';
import login from '../../public/login.png'


const styles = {
    modal: {
        width: "300px",
    },
    login:{
        height:'150px', 
        display: 'block', 
        margin: '0 auto'
    },
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


const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

const renderField = field => {
    return (
        <div>
            <TextField
                {...field.input}
                {...field.custom}
                type={field.type}
                hintText={field.label}
                fullWidth={true}
                errorText={field.meta.touched && field.meta.error}
                floatingLabelText={field.label}/>
        </div>
    );
};

let LoginForm = ({
    handleSubmit,
    submitting,
    showModal,
    onCloseClick,
    onLogInClick
}) => {

    return (
        <div>
        <Modal open={showModal} onClose={() => onCloseClick()} closeIconSize={20} modalStyle={styles.modal} little>
            <img src={login} alt="Login" style={styles.login}/>
            <form
                onSubmit={handleSubmit(onLogInClick)}>
                <Field name="username" type="text" component={renderField} label="Username"/>
                <Field
                    name="password"
                    type="password"
                    component={renderField}
                    label="Password"/>
                <br/>
                <div>
                    <FlatButton
                        backgroundColor={teal100}
                        style={{marginLeft: '35%'}}
                        type="submit"
                        disabled={submitting}>Log In</FlatButton>
                </div>
            </form>
        </Modal>
        </div>
    )
}
export default LoginForm = reduxForm({form: 'LoginForm', validate})(LoginForm)
