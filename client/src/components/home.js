import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import InventoryContainer from '../container/inventoryContainer'
import LoginContainer from '../container/loginContainer'
import InventoryFormContainer from '../container/editInventoryContainer'
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    autocompleteStyle: {
        width: "70%",
        marginTop: "3%",
        marginLeft: "12%"
    },
    progress: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}

const Home = ({user, inventory, onSignInClick}) => (
    <div>
        {inventory.fetching
            ? <CircularProgress size={60} thickness={7} style={styles.progress}/>
            : <div>
                <AppBar title="Inventory Home" iconElementRight={<FlatButton label={user.isAdmin?"Log Out":"Log In"} onClick={()=>onSignInClick(user.isAdmin)}/>}/>
                <LoginContainer/>
                <InventoryFormContainer/>
                {false?<AutoComplete
                    dataSource={[]}
                    hintText="Type anything"
                    onUpdateInput={[]}
                    style={styles.autocompleteStyle}
                    fullWidth={true}/>:null}
                {false?< FlatButton label="Search"/>:null}
                <br/>
                <br/>
                <br/>
                <InventoryContainer/>
            </div>}
    </div>
);

export default Home;