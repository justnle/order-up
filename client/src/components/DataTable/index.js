import React from "react";
import Table from "react-bootstrap/Table";
import InputGroup from 'react-bootstrap/InputGroup';

const DataTable = props => {
  return (
    <Table responsive className='text-white'>
      <thead>
        <tr>
          <th hidden={props.hideEdit}>Select</th>
          {props.headingArr.map(heading => {
            return (
              <th key={heading.key}>{heading.heading}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {props.dataArr.map(data => {
          return (
            <tr key={data._id}>
              <td hidden={props.hideEdit}><InputGroup.Checkbox data-id={data._id} onClick={props.clickCheckbox}/></td>
              {props.headingArr.map(heading => <td key={`${data._id}${heading.key}`}>{data[heading.key]}</td>)}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
};

export default DataTable;
