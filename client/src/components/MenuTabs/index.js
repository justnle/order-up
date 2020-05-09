import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MenuItem from '../../components/MenuItem';
import { Row } from 'react-bootstrap';

export default function MenuTabs(props) {
  const food = props.menuItems.filter(menuItem => menuItem.category === 'Food');
  const beverages = props.menuItems.filter(
    menuItem => menuItem.category === 'Beverage'
  );
  return (
    <Tabs defaultActiveKey='food' id='uncontrolled-tab-example'>
      <Tab eventKey='food' title='Food'>
        <Row>
          {food.map(menuItem => (
            <MenuItem
              key={menuItem._id}
              menuItem={menuItem}
              handleAddToSeatOrder={() =>
                props.handleAddToSeatOrderAndDecrement(menuItem._id)
              }
              handleShow={() => props.handleShow(menuItem._id)}
            />
          ))}
        </Row>
      </Tab>
      <Tab eventKey='beverages' title='Beverages'>
        <Row>
          {beverages.map(menuItem => (
            <MenuItem
              key={menuItem._id}
              menuItem={menuItem}
              handleAddToSeatOrder={() =>
                props.handleAddToSeatOrderAndDecrement(menuItem._id)
              }
              handleShow={() => props.handleShow(menuItem._id)}
            />
          ))}
        </Row>
      </Tab>
    </Tabs>
  );
}
