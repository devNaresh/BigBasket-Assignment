import React from 'react';
import {Card, CardMedia, CardHeader, CardText} from 'material-ui/Card';
import {Grid, Row, Col} from 'react-bootstrap'
import IconButton from 'material-ui/IconButton';
import {grey50} from 'material-ui/styles/colors'

const styles = {
  cardStyle: {
    padding: '8px',
    margin: '10px',
    backgroundColor: grey50
  },
  buttonStyle: {
    width: 'auto',
    height: 'auto',
    padding: '6px'
  },
  buttonIconStyle: {
    fontSize: '18px',
    margin: '0 auto',
    position: 'relative'
  },
  gridStyle: {
    width: '100%'
  },
  headerStyle: {
    paddingRight: '0px'
  },
  cardMediaStyle: {
    height: '400px'
  }
};

const InventoryCard = ({inventory, isAdmin, page, onEditClick, onDeleteClick}) => (
  <Card style={styles.cardStyle}>
    <Grid style={styles.gridStyle}>
      <Row className="show-grid">
        <Col xs={9} md={9} lg={9}>
          <CardHeader
            textStyle={styles.headerStyle}
            title={inventory.title.slice(0, 20)}/>
        </Col>
        {isAdmin?
        <Col>
          <IconButton
            onClick={()=>onEditClick(inventory)}
            style={styles.buttonStyle}
            iconClassName="material-icons"
            iconStyle={styles.buttonIconStyle}
            tooltip="Edit">mode_edit</IconButton>
          <IconButton
            onClick={()=>onDeleteClick(inventory)}
            style={styles.buttonStyle}
            iconClassName="material-icons"
            iconStyle={styles.buttonIconStyle}
            tooltip="Delete">delete</IconButton>
        </Col>:null}
      </Row>
      <CardMedia>
        <img style={styles.cardMediaStyle} role="presentation" src={inventory.img}/>
      </CardMedia>
      <CardText>
        Rs.
        <b>{inventory.price}</b>
      </CardText>
    </Grid>
  </Card>
);

export default InventoryCard;