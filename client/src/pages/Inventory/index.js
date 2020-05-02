import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import Container from 'react-bootstrap/Container';
import DropDownInput from '../../components/DropDownInput/index';
import TableComponent from '../../components/Table/index';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {
  AddButton,
  SubmitButton,
  ViewButton,
  CloseButton
} from '../../components/Buttons/index';
import Collapse from 'react-bootstrap/Collapse';
import FControl from '../../components/TextInput/FormGroup';
import API from '../../utils/inventoryAPI';

function Inventory() {
  const [open, setOpen] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState([]);
  const [addInventory, setAddInventory] = useState({});
  const [showModal, setModalShow] = useState(false);
  const [modalData, setModalData] = useState([]);
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

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
            quantity: item.quantity
          };
        });
        const filteredInventory = [...inventory];
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
  function addToInventory(newProduct) {
    setAddInventory({
      ...addInventory,
      ...newProduct
    });
  }
  function handleAddProductSubmit(event) {
    event.preventDefault();
    if (
      addInventory.productName &&
      !isNaN(addInventory.quantity) &&
      addInventory.vendorName &&
      addInventory.vendorContactName &&
      addInventory.vendorPhoneNumber &&
      addInventory.vendorEmail &&
      !isNaN(addInventory.productCost)
    ) {
      API.addInventoryItem(addInventory).then(loadInventory());
      setOpen(!open);
      var p = document.createElement('p');
      p.innerHTML = 'Product successfully added';
      document.getElementById('buttonsDiv').appendChild(p);
    } else {
      var p = document.createElement('p');
      p.innerHTML =
        'Please fill all fields with appropriate input to submit a product';
      document.getElementById('productSubmit').appendChild(p);
    }
  }
  function handleModalData(event) {
    const id = event.target.id;
    API.getInventoryItem(id)
      .then((res) => {
        setModalData([...modalData, res.data]);
      })
      .then(handleModalShow());
  }
  return (
    <div>
      <Container className='d-flex justify-content-center mt-5 mb-3'>
        <SearchBar
          className='flex-row rounded-sm'
          placeholder='Search inventory items'
          onChange={handleInputChange}
        />
      </Container>
      <div
        className=' d-flex row justify-content-center align-items-center text-white'
        id='buttonsDiv'
      >
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
        <Collapse in={open} id='productSubmit' className='text-danger'>
          <div className='w-50 '>
            <FControl
              onChange={(event) => {
                addToInventory({ productName: event.target.value });
              }}
              placeholder='Product Name'
              className='m-2'
            />
            <FControl
              onChange={(event) => {
                addToInventory({ quantity: event.target.value });
              }}
              placeholder='Quantity'
              className='m-2'
            />
            <FControl
              onChange={(event) => {
                addToInventory({ vendorName: event.target.value });
              }}
              placeholder='Vendor Name'
              className='m-2'
            />
            <FControl
              onChange={(event) => {
                addToInventory({ vendorContactName: event.target.value });
              }}
              placeholder='Vendor Contact Name'
              className='m-2'
            />
            <FControl
              onChange={(event) => {
                addToInventory({ vendorPhoneNumber: event.target.value });
              }}
              placeholder='Vendor Phone Number'
              className='m-2'
            />
            <FControl
              onChange={(event) => {
                addToInventory({ vendorEmail: event.target.value });
              }}
              placeholder='Vendor Email Address'
              className='m-2'
            />
            <FControl
              onChange={(event) => {
                addToInventory({ productCost: event.target.value });
              }}
              placeholder='Vendor Product Cost'
              className='m-2'
            />

            <div className='d-flex justify-content-center mt-5'>
              <SubmitButton
                onClick={handleAddProductSubmit}
                className='d-flex align-self-center m-3'
              />
            </div>
          </div>
        </Collapse>
      </div>
      <Container className='d-flex justify-content-center mt-5'>
        <TableComponent className='text-white w-100 '>
          <thead>
            <TableComponent.TR>
              <TableComponent.TH>Item</TableComponent.TH>
              <TableComponent.TH>Vendor</TableComponent.TH>
              <TableComponent.TH>Quantity in Stock</TableComponent.TH>
              <TableComponent.TH>Modify</TableComponent.TH>
            </TableComponent.TR>
          </thead>
          <tbody>
            {filteredInventory.map((item) => (
              <TableComponent.TR key={item.id}>
                <TableComponent.TD>{item.productName}</TableComponent.TD>
                <TableComponent.TD>{item.vendorName}</TableComponent.TD>
                <TableComponent.TD>{item.quantity}</TableComponent.TD>
                <TableComponent.TD>
                  <div className='d-flex row justify-content-centr'>
                    <ViewButton
                      id={item.id}
                      onClick={handleModalData}
                      className='m-1'
                    />
                    <CloseButton
                      className='m-1'
                      id={item.id}
                      onClick={(event) => {
                        API.deleteInventoryItem(event.target.id).then(
                          loadInventory
                        );
                      }}
                    />
                  </div>
                </TableComponent.TD>
              </TableComponent.TR>
            ))}
          </tbody>
        </TableComponent>
        {modalData.map((data) => (
          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title key={data._id}>
                {data.productName.toUpperCase()}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className='lead'>Product Quantity: {data.quantity}</p>
              <p className='lead'>Vendor Name: {data.vendorName}</p>
              <p className='lead'>Vendor Contact: {data.vendorContactName}</p>
              <p className='lead'>Phone: {data.vendorPhoneNumber}</p>
              <p className='lead'>Email: {data.vendorEmail}</p>
              <p className='lead'>Cost: {data.productCost}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleModalClose}>
                Close
              </Button>
              <Button variant='primary' onClick={handleModalClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        ))}
      </Container>
    </div>
  );
}
export default Inventory;
