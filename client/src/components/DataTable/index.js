import React from "react";
import Table from "react-bootstrap/Table";

const DataTable = props => {
  return (
    <Table responsive className='text-white' hover>
      <thead>
        <tr>
          {props.headingArr.map(heading => {
            return (
              <th>{heading.heading}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {props.dataArr.map(data => {
          return (
            <tr>
              {
                props.headingArr.map(heading => <td>{data[heading.key]}</td>)
              }
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
};

export default DataTable;
