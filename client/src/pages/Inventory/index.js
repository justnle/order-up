import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import { Container, Col, Row } from 'react-bootstrap';
import DropDownInput from '../../components/DropDownInput/index';
import DataTable from '../../components/DataTable';
import { AddButton } from '../../components/Buttons/index';
import API from '../../utils/inventoryAPI';
import InputModal from '../../components/InputModal';
import EditBar from '../../components/EditBar/index';

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState([]);
  const [addInventory, setAddInventory] = useState({});
  const [showNewProductModal, setShowNewProductModal] = useState(false);
  const [selectedInventoryItems, setSelectedInventoryItems] = useState([]);

  useEffect(() => {
    loadInventory();
  }, []);
  const clickCheckbox = (event) => {
    const checked = event.target.checked;
    const selectedId = event.target.getAttribute(`data-id`);
    if (checked) {
      setSelectedInventoryItems([...selectedInventoryItems, selectedId]);
    } else {
      setSelectedInventoryItems(
        selectedInventoryItems.filter((id) => id !== selectedId)
      );
    }
  };

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

  // function handleUpdate() {
  //   const item = document.querySelector('#button');
  //   const itemID = item.dataset.id;
  //   const updateValues = {
  //     quantity: document.getElementById('quantity').textContent,
  //     vendorName: document.getElementById('vendorName').textContent,
  //     vendorContactName: document.getElementById('contact').textContent,
  //     vendorPhoneNumber: document.getElementById('phone').textContent,
  //     vendorEmail: document.getElementById('email').textContent,
  //     productCost: document.getElementById('cost').textContent
  //   };
  //   API.updateInventoryItem(itemID, updateValues).then(handleModalClose);
  // }
  const inventoryHeaderArr = [
    { key: `productName`, heading: `Product Name` },
    { key: `vendorName`, heading: `Vendor Name` },
    { key: `quantity`, heading: `Quantity` }
  ];
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

      <DropDownInput className='d-flex justify-content-center'>
        Sort by vendor
      </DropDownInput>

      <InputModal
        show={showNewProductModal}
        cancel={() => {
          setShowNewProductModal(!showNewProductModal);
        }}
        title={`Add a new Product`}
        submit={handleAddProductSubmit}
        inputs={newInventoryProductInput}
      />
      <Container className='d-flex justify-content-center mt-5'>
        <Col>
          <Row className='mb-1'>
            <EditBar
              noneSelected={selectedInventoryItems.length ? false : true}
              // delete={deleteButtonPressed}
              add={() => {
                setShowNewProductModal(!showNewProductModal);
              }}
            />
            <DataTable
              headingArr={inventoryHeaderArr}
              dataArr={filteredInventory}
              clickCheckbox={clickCheckbox}
              hideEdit={false}
            />
          </Row>
        </Col>
      </Container>
    </div>
  );
}
export default Inventory;
