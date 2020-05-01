import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/index';
import Container from 'react-bootstrap/Container';
import DropDownInput from '../../components/DropDownInput/index';
import TableComponent from '../../components/Table/index';
import { AddButton, SubmitButton } from '../../components/Buttons/index';
import Collapse from 'react-bootstrap/Collapse';
import FControl from '../../components/TextInput/FormGroup';
function Inventory() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Container className='d-flex justify-content-center mt-5 mb-3'>
        <SearchBar
          className='flex-row rounded-sm'
          placeholder='Search menu items'
        />
      </Container>
      <div className=' d-flex row justify-content-center '>
        <div className='m-1'>
          <DropDownInput className='d-flex justify-content-center'>
            Sort by vendor
          </DropDownInput>
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
            <FControl placeholder='Item Name' className='m-2' />
            <FControl placeholder='Vendor Name' className='m-2' />
            <FControl placeholder='Vendor Contact Name' className='m-2' />
            <FControl placeholder='Vendor Email Address' className='m-2' />
            <FControl placeholder='Vendor Product Cost' className='m-2' />

            <div className='d-flex justify-content-center mt-5'>
              <SubmitButton className='d-flex align-self-center' />
            </div>
          </div>
        </Collapse>
      </div>
      <Container className='d-flex justify-content-center mt-5'>
        <TableComponent className='text-white w-100 '>
          <thead>
            <TableComponent.TR>
              <TableComponent.TH>Item</TableComponent.TH>
              <TableComponent.TH>Item Count</TableComponent.TH>
            </TableComponent.TR>
          </thead>
          <tbody>
            <TableComponent.TR>
              <TableComponent.TD>Tomatoes</TableComponent.TD>
              <TableComponent.TD>100</TableComponent.TD>
            </TableComponent.TR>
          </tbody>
        </TableComponent>
      </Container>
    </div>
  );
}
export default Inventory;
