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
import API from '../../utils/inventoryAPI';
import InputModal from '../../components/InputModal';

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState([]);
  const [addInventory, setAddInventory] = useState({});
  const [showNewProductModal, setShowNewProductModal] = useState(false);
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
  const addToInventory = (event) => {
    const { name, value } = event.target;
    setAddInventory((addInventory) => ({ ...addInventory, [name]: value }));
    console.log(addInventory);
  };
  const newInventoryProductInput = [
    {
      name: `productName`,
      label: `Product Name`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter Product Name`,
      onChange: addToInventory
    },
    {
      name: `quantity`,
      label: `Quantity`,
      text: `Required`,
      type: `number`,
      placeholder: `Enter Quantity`,
      onChange: addToInventory
    },
    {
      name: `vendorName`,
      label: `Vendor Name`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter Vendor Name`,
      onChange: addToInventory
    },
    {
      name: `vendorContactName`,
      label: `Vendor Contact Name`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter Vendor Contact Name`,
      onChange: addToInventory
    },
    {
      name: `vendorPhoneNumber`,
      label: `Vendor Phone Number`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter Vendor Phone Number`,
      onChange: addToInventory
    },
    {
      name: `vendorEmail`,
      label: `Vendor Email Address`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter Vendor Email`,
      onChange: addToInventory
    },
    {
      name: `productCost`,
      label: `Vendor Product Cost`,
      text: `Required`,
      type: `number`,
      placeholder: `Enter Vendor Product Cost`,
      onChange: addToInventory
    }
  ];
  function handleAddProductSubmit(event) {
    event.preventDefault();
    if (
      addInventory.productName &&
      addInventory.quantity &&
      addInventory.vendorName &&
      addInventory.vendorContactName &&
      addInventory.vendorPhoneNumber &&
      addInventory.vendorEmail &&
      addInventory.productCost
    ) {
      API.addInventoryItem(addInventory).then((res) => {
        console.log(`status code: ${res.status}`);
        loadInventory();
        setShowNewProductModal(false);
      });
    } else {
      alert(
        'Please fill in all fields with appropriate input to submit an employee'
      );
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
  function handleUpdate() {
    const item = document.querySelector('#button');
    const itemID = item.dataset.id;
    const updateValues = {
      quantity: document.getElementById('quantity').textContent,
      vendorName: document.getElementById('vendorName').textContent,
      vendorContactName: document.getElementById('contact').textContent,
      vendorPhoneNumber: document.getElementById('phone').textContent,
      vendorEmail: document.getElementById('email').textContent,
      productCost: document.getElementById('cost').textContent
    };
    API.updateInventoryItem(itemID, updateValues).then(handleModalClose);
  }
  return (
    <div>
      <h1 className='d-flex justify-content-center display-4 text-white mt-5'>
        Inventory
      </h1>
      <Container className='mt-5 mb-3'>
        <SearchBar
          className='col-12 rounded-sm'
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
            onClick={() => setShowNewProductModal(!showNewProductModal)}
            aria-controls='example-collapse-text'
          />
        </div>
      </div>
      <InputModal
        show={showNewProductModal} // bool
        cancel={() => {
          setShowNewProductModal(!showNewProductModal);
        }}
        title={`Add a new employee`} // title string for your modal
        submit={handleAddProductSubmit}
        inputs={newInventoryProductInput}
      />
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
              <Modal.Title key={data._id} data-id={data._id} id='button'>
                {data.productName.toUpperCase()}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Product Quantity:</h4>
              <p className='lead' id='quantity' contenteditable='true'>
                {data.quantity}
              </p>
              <h4>Vendor Name:</h4>
              <p className='lead' id='vendorName' contenteditable='true'>
                {data.vendorName}
              </p>
              <h4>Vendor Contact:</h4>
              <p className='lead' id='contact' contenteditable='true'>
                {data.vendorContactName}
              </p>
              <h4>Phone:</h4>
              <p className='lead' id='phone' contenteditable='true'>
                {data.vendorPhoneNumber}
              </p>
              <h4>Email:</h4>
              <p className='lead' id='email' contenteditable='true'>
                {data.vendorEmail}
              </p>
              <h4>Cost:</h4>
              <p className='lead' id='cost' contenteditable='true'>
                {data.productCost}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='primary' onClick={handleUpdate}>
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
