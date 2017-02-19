import {connect} from 'react-redux';
import InventoryForm from '../components/editInventoy';
import {DESELECTED_INVENTORY, editInventory} from '../actions/inventoryAction'

const mapStateToProps = ({inventory}) => {
    let selectedInventory = inventory.items.results.filter(function(data){
        return data.id === inventory.selectedInventory.id
    })
    if (selectedInventory.length === 0 || inventory.deleteItemAlert){
        selectedInventory = [{id:-1}]
    }
    selectedInventory = selectedInventory[0]
    return {selectedInventory}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseClick: ()=>dispatch({type:DESELECTED_INVENTORY}),
        onSubmitClick: (value)=>{
            dispatch(editInventory(value))
            dispatch({type:DESELECTED_INVENTORY})
        }
    }
}

const InventoryFormContainer = connect(mapStateToProps, mapDispatchToProps)(InventoryForm)

export default InventoryFormContainer