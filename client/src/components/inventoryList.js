import React from 'react';
import InventoryCard from './inventory'
import {Pagination, Row, Col} from 'react-bootstrap'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


function InventoryCardList(items, isAdmin, page, onEditClick, onDeleteClick) {
    return items.map((data, id) =><Col xs={12} md={6} lg={3} key={id}>< InventoryCard inventory={data} isAdmin={isAdmin} page={page} onEditClick={onEditClick} onDeleteClick={onDeleteClick}/></Col>)
}
const InventoryList = ({inventory, isAdmin, onPageNumberClick, onEditClick, onDeleteClick, 
    onAlertDeleteClick, onCancelDeleteClick}) => {
    
    const actions = [ < FlatButton label="Cancel" primary={true} onClick={()=>onCancelDeleteClick()} />, 
          < FlatButton label="Delete" primary={true} onClick={()=>onAlertDeleteClick(inventory.selectedInventory.id, inventory.page)} /> ];

    return (
        <div className='row'>
        <Col xs={9} md={6} lg={3} style={{float: 'none', margin: '0 auto'}}>
                    <Pagination
                        prev
                        next
                        ellipsis
                        boundaryLinks
                        items={Math.ceil(inventory.items.count/40)}
                        maxButtons={5}
                        activePage={inventory.page}
                        onSelect={(pageNumber)=>onPageNumberClick(pageNumber)}/>
            </Col>
            <Row style={{margin:'8px'}}>
                {inventory.items.results
                    ? InventoryCardList(inventory.items.results, isAdmin, inventory.page, onEditClick, onDeleteClick) : null}
            </Row>
            <Col xs={9} md={6} lg={3} style={{float: 'none', margin: '0 auto'}}>
                    <Pagination
                        prev
                        next
                        ellipsis
                        boundaryLinks
                        items={Math.ceil(inventory.items.count/40)}
                        maxButtons={5}
                        activePage={inventory.page}
                        onSelect={(pageNumber)=>onPageNumberClick(pageNumber)}/>
            </Col>
            <Dialog
                actions={actions}
                modal={false}
                open={inventory.deleteItemAlert}
                onRequestClose={() => onCancelDeleteClick()}>
                    Do you want to delete item?
            </Dialog>
                    
        </div>
    )
}
export default InventoryList
