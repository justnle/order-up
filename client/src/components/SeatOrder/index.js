import React from 'react';

function SeatOrder(props) {
  return (
    <tr className={props.isActiveRow ? 'active' : ''} onClick={props.onClick}>
      <td>{props.seatOrderNumber}</td>
      <td>
        <ul>
          {props.seatOrder.map((orderItem, index) => (
            <li key={orderItem._id + '_' + index}>{orderItem.name}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default SeatOrder;
