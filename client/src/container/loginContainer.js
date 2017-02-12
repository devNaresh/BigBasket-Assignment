import {connect} from 'react-redux';
import LoginForm from '../components/login';
import {HIDE_LOGGIN_MODAL, adminSignIn} from '../actions/userAction'

const mapStateToProps = ({user}) => {
    return {showModal :user.logginModal}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseClick: ()=>dispatch({type:HIDE_LOGGIN_MODAL}),
        onLogInClick: (value)=>{
            dispatch(adminSignIn({username:value.username, password:value.password}))}
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default LoginContainer