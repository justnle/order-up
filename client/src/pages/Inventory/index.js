import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import { Container, Col, Row } from 'react-bootstrap';
import DropDownInput from '../../components/DropDownInput/index';
import DataTable from '../../components/DataTable';
import API from '../../utils/inventoryAPI';
import InputModal from '../../components/InputModal';
import EditBar from '../../components/EditBar/index';

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedInventoryItems, setSelectedInventoryItems] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [modalTitle, setModalTitle] = useState();
  const [submitButtonLabel, setSubmitButtonLabel] = useState(`Submit`);
  const [itemInfo, setItemInfo] = useState({});

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = () => {
    API.getInventory()
      .then(res => {
        setInventory(res.data);
        setFilteredInventory(res.data);
      })
      .catch(err => console.error(err));
  }


  const handleInputChange = event => {
    const inputText = event.target.value;
    setFilteredInventory(
      inventory.filter(item => {
        const words = item.productName.split(' ');
        let isMatch = false;
        words.forEach(word => {
          if (word.toLowerCase().startsWith(inputText.toLowerCase())) {
            isMatch = true;
          }
        });
        return isMatch;
      })
    );
  }

  const updateInventoryItemState = event => {
    const { name, value } = event.target;
    setItemInfo(info => ({ ...info, [name]: value }))
  };

  const addButtonPressed = () => {
    setInputs([...inventoryItemInput, ...otherInput]);
    setModalTitle(`Add Iventory Item`);
    setSubmitButtonLabel(`Submit`);
    setShowAddModal(true);
  };


  const submitButtonPressed = event => {
    event.preventDefault();
    if (
      itemInfo.productName &&
      itemInfo.quantity &&
      itemInfo.vendorName &&
      itemInfo.vendorContactName &&
      itemInfo.vendorPhoneNumber &&
      itemInfo.vendorEmail &&
      itemInfo.productCost
    ) {
      API.addInventoryItem(itemInfo).then(res => {
        console.log(`status code: ${res.status}`);
        loadInventory();
        setShowAddModal(false);
      });
    } else {
      alert(
        'Please fill in all fields with appropriate input to submit an employee'
      );
    }
  };

  const clickCheckbox = event => {
    const checked = event.target.checked;
    const selectedId = event.target.getAttribute(`data-id`);
    if (checked) {
      setSelectedInventoryItems([...selectedInventoryItems, selectedId]);
    } else {
      setSelectedInventoryItems(
        selectedInventoryItems.filter(id => id !== selectedId)
      );
    }
  };

  const editButtonPressed = () => {
    if (selectedInventoryItems.length > 1) {
      setInputs(otherInput);
      setModalTitle('Edit items');
    } else {
      setItemInfo(inventory.find(inventory => inventory.id === selectedInventoryItems[0]));
      setInputs([...inventoryItemInput, ...otherInput]);
      setModalTitle('Edit items');
    }
    setSubmitButtonLabel('Save');
    setShowAddModal(true);
  }

  const saveButtonPressed = () => {
    API.updateManyInventoryItem(selectedInventoryItems, itemInfo)
      .then((res) => {
        if (res.data.n > 0) {
          setShowAddModal(false);
          loadInventory();
        } else {
          alert(`Something's wrong, we couldn't update inventory item at this time...`)
        }
      })
      .catch((err) => console.error(err));
  }

  const deleteButtonPressed = () => {
    API.deleteManyInventoryItem(selectedInventoryItems)
      .then(res => {
        if (res.data.n > 0) {
          loadInventory();
        }
      })
      .catch((err) => console.error(err));
  };


  const inventoryItemInput = [
    {
      name: `productName`,
      label: `Product Name`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter Product Name`,
      onChange: updateInventoryItemState
    }
  ];

  const otherInput = [
    {
      name: `quantity`,
      label: `Quantity`,
      text: `Required`,
      type: `number`,
      placeholder: `Enter Quantity`,
      onChange: updateInventoryItemState
    },
    {
      name: `vendorName`,
      label: `Vendor Name`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter Vendor Name`,
      onChange: updateInventoryItemState
    },
    {
      name: `vendorContactName`,
      label: `Vendor Contact Name`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter Vendor Contact Name`,
      onChange: updateInventoryItemState
    },
    {
      name: `vendorPhoneNumber`,
      label: `Vendor Phone Number`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter Vendor Phone Number`,
      onChange: updateInventoryItemState
    },
    {
      name: `vendorEmail`,
      label: `Vendor Email Address`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter Vendor Email`,
      onChange: updateInventoryItemState
    },
    {
      name: `productCost`,
      label: `Vendor Product Cost`,
      text: `Required`,
      type: `number`,
      placeholder: `Enter Vendor Product Cost`,
      onChange: updateInventoryItemState
    }
  ];

  const inventoryHeaderArr = [
    { key: `productName`, heading: `Product Name` },
    { key: `vendorName`, heading: `Vendor Name` },
    { key: `vendorPhoneNumber`, heading: `Vendor Phone Number` },
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
        show={showAddModal}
        cancel={() => {
          setShowAddModal(!showAddModal);
        }}
        title={modalTitle}
        submit={
          submitButtonLabel === 'Submit'
            ? submitButtonPressed
            : saveButtonPressed
        }
        submitButtonLabel={submitButtonLabel}
        inputs={inputs}
        value={itemInfo ? itemInfo : undefined}
      />
      <Container className='d-flex justify-content-center mt-5'>
        <Col>
          <Row className='mb-1'>
            <EditBar
              noneSelected={selectedInventoryItems.length ? false : true}
              delete={deleteButtonPressed}
              add={addButtonPressed}
              edit={editButtonPressed}
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
