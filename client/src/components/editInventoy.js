import React from 'react';
import ReactModal from 'react-modal';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {teal100} from 'material-ui/styles/colors'
import {Field, reduxForm} from 'redux-form';
import IconButton from 'material-ui/IconButton';
import {Grid, Row, Col} from 'react-bootstrap'

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)'
    },
    content: {
        width: "50%",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const styles = {
    buttonStyle: {
        width: 'auto',
        height: 'auto',
        padding: '6px',
        marginLeft: '95%',
        position: 'relative',
    },
    buttonIconStyle: {
        fontSize: '18px',
        position: 'initial',
    },
    gridStyle: {
    width: '100%'
  },
};

const renderField = field => {
    return (
        <div>
            <TextField
                {...field.input}
                {...field.custom}
                type={field.type}
                hintText={field.label}
                fullWidth={true}
                errorText={field.touched && field.error}
                floatingLabelText={field.floatingTest}/>
        </div>
    );
};

let InventoryForm = ({
    error,
    handleSubmit,
    pristine,
    reset,
    submitting,
    showModal,
    selectedInventory,
    onCloseClick,
    onSubmitClick,
}) => {
    return (
        <ReactModal
            isOpen={selectedInventory.id > 0 ? true: false}
            closeTimeoutMS={5}
            style={customStyles}
            contentLabel="Modal">
            <IconButton
                    onClick={() => onCloseClick()}
                    style={styles.buttonStyle}
                    iconClassName="material-icons"
                    iconStyle={styles.buttonIconStyle}>close</IconButton>
            <Grid style={styles.gridStyle}>
                <Row className="show-grid">
                    <Col xs={6}>
                        <img src={selectedInventory.img} role="presentation" style={{height: '50%', width: '100%'}}/>
                    </Col>
                    <Col xs={6}>
                        {selectedInventory.id > 0?
                        <form onSubmit={handleSubmit(onSubmitClick)}>
                            <input type="hidden" name="id"/>
                            <input type="hidden" name="img"/>
                            <Field component="input" name="id" type="hidden" value={selectedInventory.id}/>
                            <Field name="title" type="text" floatingTest="Title" component={renderField} label={selectedInventory.title.slice(0, 20)}/>
                            <Field name="price" type="text" floatingTest="Price" component={renderField} label={selectedInventory.price}/> {error && <strong>{error}</strong>}
                            <br/>
                            <div>
                                <FlatButton
                                    backgroundColor={teal100}
                                    style={{marginLeft: '35%'}}
                                    type="submit"
                                    disabled={submitting}>Submit</FlatButton>
                            </div>
                        </form>:null}
                    </Col>
                </Row>
            </Grid>
        </ReactModal>
    )
}
export default InventoryForm = reduxForm({form: 'InventoryForm'})(InventoryForm)
