import React from 'react';

import {GridList} from 'material-ui/GridList';
import InventoryCard from './inventory'
import {Pagination} from 'react-bootstrap'

function InventoryCardList(items, isAdmin, page, onEditClick, onDeleteClick) {
    return items.map((data, id) =>< InventoryCard key={id} inventory={data} isAdmin={isAdmin} page={page} onEditClick={onEditClick} onDeleteClick={onDeleteClick}/>)
}
const InventoryList = ({inventory, isAdmin, onPageNumberClick, onEditClick, onDeleteClick}) => {

    return (
        <div>
            <GridList cols={4} cellHeight='auto' padding={10}>
                {inventory.items.results
                    ? InventoryCardList(inventory.items.results, isAdmin, inventory.page, onEditClick, onDeleteClick)
                    : null}
            </GridList>
            <div style={{
                marginLeft: "40%"
            }}>
                <Pagination
                    prev
                    next
                    ellipsis
                    boundaryLinks
                    items={Math.ceil(inventory.items.count/40)}
                    maxButtons={5}
                    activePage={inventory.page}
                    onSelect={(pageNumber)=>onPageNumberClick(pageNumber)}/>
            </div>
        </div>
    )
}
export default InventoryList