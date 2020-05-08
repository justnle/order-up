import React from 'react';
import './style.css';

function SeatOrder(props) {
  return (
    <tr className={props.isActiveRow ? 'active' : ''} onClick={props.onClick}>
      <td>{props.seatOrderNumber}</td>
      <td>
        <ul>
          {props.seatOrder.map((orderItem, index) => (
            <li key={orderItem._id + '_' + index}>
              {orderItem.name}
              <span
                className='delete-btn'
                onClick={props.clickDeleteBtn}
                role='button'
                tabIndex='0'
                data-id={index}
              >
                ✗
              </span>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default SeatOrder;
