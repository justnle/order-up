import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/index';
import Container from 'react-bootstrap/Container';
import DropDownInput from '../../components/DropDownInput/index';
import TableComponent from '../../components/Table/index';
import { AddButton, SubmitButton } from '../../components/Buttons/index';
import Collapse from 'react-bootstrap/Collapse';
import FControl from '../../components/TextInput/FormGroup';
function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Container className='d-flex justify-content-center mt-5'>
        <SearchBar className='flex-row ' placeholder='Search menu items' />
      </Container>
      <div className=' d-flex row justify-content-center '>
        <div className='m-1'>
          <DropDownInput className='d-flex justify-content-center'>
            Sort by category
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
            <FControl placeholder='Food or Beverage' className='m-2' />
            <FControl placeholder='Item Name' className='m-2' />
            <FControl placeholder='Item Price' className='m-2' />
            <FControl placeholder='Item Description' className='m-2' />
            <FControl placeholder='Item Pairings' className='m-2' />

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
              <TableComponent.TH>Category</TableComponent.TH>
              <TableComponent.TH>Price</TableComponent.TH>
              <TableComponent.TH>Item Pairing</TableComponent.TH>
              <TableComponent.TH>Item Count</TableComponent.TH>
            </TableComponent.TR>
          </thead>
          <tbody>
            <TableComponent.TR>
              <TableComponent.TD>Burger</TableComponent.TD>
              <TableComponent.TD>Food</TableComponent.TD>
              <TableComponent.TD>$20</TableComponent.TD>
              <TableComponent.TD>Amber Ale</TableComponent.TD>
              <TableComponent.TD>Item Count</TableComponent.TD>
            </TableComponent.TR>
          </tbody>
        </TableComponent>
      </Container>
    </div>
  );
}
export default Menu;
