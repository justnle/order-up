import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/index';
import Container from 'react-bootstrap/Container';
import DropDownInput from '../../components/DropDownInput/index';
import TableComponent from '../../components/Table/index';
import { AddButton } from '../../components/Buttons/index';
import Collapse from 'react-bootstrap/Collapse';
function Employees() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Container className='d-flex justify-content-center'>
        <SearchBar placeholder='Search employees' className='flex-row ' />
      </Container>
      <div className=' d-flex row justify-content-center'>
        <div className='m-1'>
          <DropDownInput>Sort by role</DropDownInput>
        </div>
        <div className='m-1'>
          <AddButton
            onClick={() => setOpen(!open)}
            aria-controls='example-collapse-text'
            aria-expanded={open}
          />
        </div>{' '}
        <Collapse in={open} className='text-white'>
          <div id='example-collapse-text'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
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
