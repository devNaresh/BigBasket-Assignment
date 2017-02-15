import axios from 'axios';
import cookie from 'react-cookie';
import config from '../config';

export const FETCH_INVENTORY = "get inventory data";
export const FETCH_INVENTORY_SUCCESS = "inventory response"
export const FETCH_INVENTORY_ERROR = "inventory error"
export const EDIT_INVENTORY_ITEM = "edit inventory item"
export const DELETE_INVENTORY_ITEM = "delete inventory item"
export const SELECTED_INVENTORY = "selected inventory"
export const DESELECTED_INVENTORY = "not selectinventory"

export function loadInventory(page = 1) {
    return function (dispatch) {
        dispatch({type: FETCH_INVENTORY})
        axios
            .get(config.SERVER + "/inventory/", {params: {
                page
            }})
            .then((response) => {
                dispatch({type: FETCH_INVENTORY_SUCCESS, payload: response.data, page})
            })
            .catch((error) => {
                dispatch({type: FETCH_INVENTORY_ERROR, payload: error.data})
            })
    }
}

export function editInventory(inventory_data) {
    return function (dispatch) {
        dispatch({type: FETCH_INVENTORY})
        axios
            .put(config.SERVER + `/inventory/${inventory_data.id}/`, {
            ...inventory_data
        },{
            withCredentials: true
        })
            .then((response) => {
                dispatch({type: EDIT_INVENTORY_ITEM, payload: response.data})
            })
            .catch((error) => {
                dispatch({type: FETCH_INVENTORY_ERROR, payload: error.data})
            })
    }
}

export function deleteInventory(intentoryId, pageNum) {
    return function (dispatch) {
        dispatch({type: FETCH_INVENTORY})
        axios
            .delete(config.SERVER + `/inventory/${intentoryId}/`)
            .then((response) => {
                dispatch({
                    type: DELETE_INVENTORY_ITEM,
                    payload: {
                        id: intentoryId
                    }
                })
                dispatch(loadInventory(pageNum))
            })
            .catch((error) => {
                dispatch({type: FETCH_INVENTORY_ERROR, payload: error.data})
            })
    }
}

export function selectInventory(inventory_data) {
    return {type: SELECTED_INVENTORY, payload: inventory_data}
}
