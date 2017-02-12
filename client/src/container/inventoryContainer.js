import {connect} from 'react-redux';
import InventoryList from '../components/inventoryList';
import {loadInventory, selectInventory, deleteInventory} from '../actions/inventoryAction'
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
        onDeleteClick: (inventoryID, pageNum)=>{
            dispatch(deleteInventory(inventoryID, pageNum))
        }
    }
}

const InventoryContainer = connect(mapStateToProps, mapDispatchToProps)(InventoryList)

export default InventoryContainer