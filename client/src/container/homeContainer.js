import {connect} from 'react-redux';
import Home from '../components/home';
import {SHOW_LOGGIN_MODAL, adminSignOut} from '../actions/userAction'

const mapStateToProps = ({user, inventory}) => {
    return {user, inventory}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignInClick: (isAdmin)=>{
            if(isAdmin){
                dispatch(adminSignOut())
            }
            else{
            dispatch({type:SHOW_LOGGIN_MODAL})
            }
        }
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer