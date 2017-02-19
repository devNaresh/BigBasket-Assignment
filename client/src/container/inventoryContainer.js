import {connect} from 'react-redux';
import InventoryList from '../components/inventoryList';
import {loadInventory, selectInventory, deleteInventory, 
    DELETE_INVENTORY_ITEM, CANCEL_DELETE_INVENTORY_ITEM} from '../actions/inventoryAction'
import {initialize} from 'redux-form'

const mapStateToProps = ({inventory, user}) => {
    return {inventory, isAdmin:user.isAdmin}
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        onPageNumberClick: (page)=>dispatch(loadInventory(page)),
        onEditClick: (inventory)=>{
            dispatch(selectInventory(inventory))
            dispatch(initialize('InventoryForm',inventory))
        },
        onAlertDeleteClick: (inventoryID, pageNum)=>{
            dispatch(deleteInventory(inventoryID, pageNum))
        },
        onDeleteClick: (inventory)=>{
            dispatch({type:DELETE_INVENTORY_ITEM, payload:inventory})
        },
        onCancelDeleteClick: ()=>{
            dispatch({type:CANCEL_DELETE_INVENTORY_ITEM})
        }
    }
}

const InventoryContainer = connect(mapStateToProps, mapDispatchToProps)(InventoryList)

export default InventoryContainer