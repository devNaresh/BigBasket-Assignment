import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {teal100} from 'material-ui/styles/colors'
import {Field, reduxForm} from 'redux-form';
import {Grid, Row, Col} from 'react-bootstrap';
import Modal from 'react-responsive-modal';

const styles = {
    modalStyle:{
        width: "350px",
    },
    gridStyle: {
        width: '100%'
  },
};

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.price) {
    errors.price = 'Required'
  }
  return errors
}

const renderField = field => {
    return (
        <div>
            <TextField
                {...field.input}
                {...field.custom}
                type={field.type}
                hintText={field.label}
                fullWidth={true}
                errorText={field.meta.touched && field.meta.error}
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
        <Modal open={selectedInventory.id > 0 ? true: false} onClose={() => onCloseClick()} closeIconSize={20} modalStyle={styles.modalStyle} little>
            <br/>
            <br/>
            <Grid style={styles.gridStyle}>
                <Row className="show-grid">
                    <Col>
                        <img src={selectedInventory.img} role="presentation" style={{height: '300px', width: '100%'}}/>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <form onSubmit={handleSubmit(onSubmitClick)}>
                            <input type="hidden" name="id"/>
                            <input type="hidden" name="img"/>
                            <Field component="input" name="id" type="hidden"/>
                            <Field name="title" type="text" floatingTest="Title" component={renderField}/>
                            <Field name="price" type="text" floatingTest="Price" component={renderField}/> {error && <strong>{error}</strong>}
                            <br/>
                            <div>
                                <FlatButton
                                    backgroundColor={teal100}
                                    style={{marginLeft: '35%'}}
                                    type="submit"
                                    disabled={submitting}>Submit</FlatButton>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Grid>
        </Modal>
    )
}
export default InventoryForm = reduxForm({form: 'InventoryForm', validate})(InventoryForm)
