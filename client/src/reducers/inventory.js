import * as inventoryState from '../actions/inventoryAction';

const DEFAULT_INVENTORY_DATA = {
    fetching: false,
    fetched: false,
    error: false,
    page: 1,
    selectedInventory: {id:-1},
    items: {results:[]}
};

export function inventory(state = DEFAULT_INVENTORY_DATA, action) {
    let inventory_obj;
    switch (action.type) {
        case inventoryState.FETCH_INVENTORY:
            return {...state, fetching:true, fetched:false, error:false}
        case inventoryState.FETCH_INVENTORY_SUCCESS:
            return {fetching:false, fetched:true, error:false, items:action.payload, page:action.page, selectedInventory: -1}
        case inventoryState.FETCH_INVENTORY_ERROR:
            return {...state, fetched:false, fetching:false, error:true, items:action.payload};
        case inventoryState.EDIT_INVENTORY_ITEM:
            inventory_obj =  {...state, fetched:true, fetching:false}
            inventory_obj.items.results = inventory_obj.items.results.map((element)=>{
                if (element.id === action.payload.id){
                    return action.payload
                }
                return element
            });
            return inventory_obj
        // case inventoryState.DELETE_INVENTORY_ITEM:
        //     return {...state, fetching:false, fetched:true, error:false}
        case inventoryState.SELECTED_INVENTORY:
            return {...state, selectedInventory:action.payload}
        case inventoryState.DESELECTED_INVENTORY:
            return {...state, selectedInventory:{id:-1}}
        default:
            return state
    };
};