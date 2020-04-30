import React from 'react';
import Table from 'react-bootstrap/Table';

function BohTable() {
  const columns = [`Ticket Info`, `Items`, `Time`, `sold`];

  const tables = [
    {
      table: `12`,
      colSize: `3`,
      order: [`Burger`, `Three Bean Platter`, `Cheese Fries`],
      time: `1205`,
    },
    {
      table: `29`,
      colSize: `6`,
      order: [`Spaghetti Bolognese`, `Bruschetta`, `Caprese Salad`, `Ricotta Ravioli`],
      time: `1230`,
    },
    {
      table: `4`,
      colSize: `3`,
      order: [`Dumplings`, `Vegetable Fried Rice`],
      time: `1300`,
    },
  ];

  return (
    <Table bordered hover variant='dark'>
      <thead>
        <tr>
          {columns.map((header, index) => (
            <th className='text-center' key={`${header}-${index}`}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tables.map((content, index) => (
          <tr>
            <td className='align-middle'>Table #{content.table}</td>
            {content.order.map((items, index) => (
              <tr>{`${index + 1} - ${items}`}</tr>
            ))}
            <td className='align-middle text-center'>{content.time}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BohTable;
