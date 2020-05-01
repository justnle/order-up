import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import Container from 'react-bootstrap/Container';
import DropDownInput from '../../components/DropDownInput/index';
import TableComponent from '../../components/Table/index';
import { AddButton, SubmitButton } from '../../components/Buttons/index';
import Collapse from 'react-bootstrap/Collapse';
import FControl from '../../components/TextInput/FormGroup';
import API from '../../utils/inventoryAPI';

function Inventory() {
  const [open, setOpen] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState([]);

  useEffect(() => {
    loadInventory();
  }, []);

  function loadInventory() {
    API.getInventory()
      .then((res) => {
        console.log(res);
        const inventory = res.data.map((item) => {
          return {
            id: item._id,
            productName: item.productName,
            vendorName: item.vendorName,
            quantity: item.quantity,
          };
        });
        const filteredInventory = res.data.map((item) => {
          return {
            id: item._id,
            productName: item.productName,
            vendorName: item.vendorName,
            quantity: item.quantity,
          };
        });
        setInventory(inventory);
        setFilteredInventory(filteredInventory);
      })

      .catch((err) => console.error(err));
  }

  function handleInputChange(event) {
    const inputText = event.target.value;
    setFilteredInventory(
      inventory.filter((item) => {
        const words = item.productName.split(' ');
        let isMatch = false;

        words.forEach((word) => {
          if (word.toLowerCase().startsWith(inputText.toLowerCase())) {
            isMatch = true;
          }
        });

        return isMatch;
      })
    );
  }

  return (
    <div>
      <Container className="d-flex justify-content-center mt-5 mb-3">
        <SearchBar
          className="flex-row rounded-sm"
          placeholder="Search inventory items"
          onChange={handleInputChange}
        />
      </Container>
      <div className=" d-flex row justify-content-center ">
        <div className="m-1">
          <DropDownInput className="d-flex justify-content-center">
            Sort by vendor
          </DropDownInput>
        </div>
        <div className="m-1">
          <AddButton
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Collapse in={open}>
          <div className="w-50 ">
            <FControl placeholder="Item Name" className="m-2" />
            <FControl placeholder="Vendor Name" className="m-2" />
            <FControl placeholder="Vendor Contact Name" className="m-2" />
            <FControl placeholder="Vendor Email Address" className="m-2" />
            <FControl placeholder="Vendor Product Cost" className="m-2" />

            <div className="d-flex justify-content-center mt-5">
              <SubmitButton className="d-flex align-self-center" />
            </div>
          </div>
        </Collapse>
      </div>
      <Container className="d-flex justify-content-center mt-5">
        <TableComponent className="text-white w-100 ">
          <thead>
            <TableComponent.TR>
              <TableComponent.TH>Item</TableComponent.TH>
              <TableComponent.TH>vendorName Name</TableComponent.TH>
              <TableComponent.TH>Quantity in Stock</TableComponent.TH>
            </TableComponent.TR>
          </thead>
          <tbody>
            {filteredInventory.map((item) => (
              <TableComponent.TR key={item.id}>
                <TableComponent.TD>{item.productName}</TableComponent.TD>
                <TableComponent.TD>{item.VendorName}</TableComponent.TD>
                <TableComponent.TD>{item.quantity}</TableComponent.TD>
              </TableComponent.TR>
            ))}
          </tbody>
        </TableComponent>
      </Container>
    </div>
  );
}
export default Inventory;
