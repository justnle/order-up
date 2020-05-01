import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/index';
import Container from 'react-bootstrap/Container';
import DropDownInput from '../../components/DropDownInput/index';
import TableComponent from '../../components/Table/index';
import { AddButton, SubmitButton } from '../../components/Buttons/index';
import Collapse from 'react-bootstrap/Collapse';
import FControl from '../../components/TextInput/FormGroup';
function Employees() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Container className='d-flex justify-content-center mt-5'>
        <SearchBar placeholder='Search employees' className='flex-row ' />
      </Container>
      <div className=' d-flex row justify-content-center '>
        <div className='m-1'>
          <DropDownInput>Sort by role</DropDownInput>
        </div>
        <div className='m-1'>
          <AddButton
            onClick={() => setOpen(!open)}
            aria-controls='example-collapse-text'
            aria-expanded={open}
          />
        </div>
      </div>
      <div className='d-flex justify-content-center mt-5'>
        <Collapse in={open}>
          <div className='w-50 '>
            <FControl placeholder='Employee Name' className='m-2' />
            <FControl placeholder='Employee Pin' className='m-2' />
            <FControl placeholder='Employee Rate' className='m-2' />
            <FControl placeholder='Employee Role' className='m-2' />
            <FControl placeholder='Employee Permissions' className='m-2' />
            <div className='d-flex justify-content-center mt-5'>
              <SubmitButton className='d-flex align-self-center' />
            </div>
          </div>
        </Collapse>
      </div>

      <Container className='d-flex justify-content-center mt-5'>
        <TableComponent className='text-white w-75'>
          <thead>
            <TableComponent.TR>
              <TableComponent.TH>Employee Name</TableComponent.TH>
              <TableComponent.TH>Employee Role</TableComponent.TH>
              <TableComponent.TH>Employee Rate</TableComponent.TH>
              <TableComponent.TH>Employee Pin</TableComponent.TH>
            </TableComponent.TR>
          </thead>
          <tbody>
            <TableComponent.TR>
              <TableComponent.TD>Fake Name</TableComponent.TD>
              <TableComponent.TD>Server</TableComponent.TD>
              <TableComponent.TD>$15.00</TableComponent.TD>
              <TableComponent.TD>123456</TableComponent.TD>
            </TableComponent.TR>
          </tbody>
        </TableComponent>
      </Container>
    </div>
  );
}

export default Employees;
