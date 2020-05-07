import React from 'react';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck'
import './style.css';


function SeatOrder(props) {
  return (
    <tr className={props.isActiveRow ? 'active' : ''} onClick={props.onClick}>
      <td>{props.seatOrderNumber}</td>
      <td>
        <ul>
          {props.seatOrder.map((orderItem, index) => (
            <li key={orderItem._id + '_' + index}>{orderItem.name} <Form.Check inline onClick={props.clickCheckbox} data-id={orderItem._id}/></li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default SeatOrder;
