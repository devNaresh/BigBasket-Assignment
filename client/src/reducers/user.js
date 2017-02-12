import * as userAction from '../actions/userAction'

const DEFAULT_USER_STATE = {
    isAdmin: false,
    logginModal: false
}
export function user(state = DEFAULT_USER_STATE, action) {
    switch (action.type) {
        case userAction.ADMIN:
            return {...state, isAdmin:true}
        case userAction.USER:
            return {...state, isAdmin:false}
        case userAction.SHOW_LOGGIN_MODAL:
            return {...state, logginModal:true}
        case userAction.HIDE_LOGGIN_MODAL:
            return {...state, logginModal:false}
        default:
            return state
    }

}