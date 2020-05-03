import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import { Container, Col, Row } from 'react-bootstrap';
import DropDownInput from '../../components/DropDownInput/index';
import DataTable from '../../components/DataTable';
import API from '../../utils/menuAPI';
import InputModal from '../../components/InputModal';
import EditBar from '../../components/EditBar/index';

function Menu() {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [addItem, setAddItem] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);

  useEffect(() => {
    loadMenu();
  }, []);

  function loadMenu() {
    API.getMenu()
      .then((res) => {
        const menu = res.data.map((item) => {
          return {
            id: item._id,
            category: item.category,
            name: item.name,
            price: item.price,
            description: item.description,
            pairing: item.pairing,
            prepareTime: item.prepareTime,
            itemCount: item.itemCount
          };
        });
        const filteredMenu = [...menu];
        setMenu(menu);
        setFilteredMenu(filteredMenu);
      })
      .catch((err) => console.error(err));
  }

  function handleInputChange(event) {
    const inputText = event.target.value;
    setFilteredMenu(
      menu.filter((item) => {
        const words = item.name.split(' ');
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
  function addItemInventory(event) {
    const { name, value } = event.target;
    setAddItem((addItem) => ({ ...addItem, [name]: value }));
    console.log(addItem);
  }
  function handleAddItemSubmit(event) {
    event.preventDefault();
    if (
      addItem.category &&
      addItem.name &&
      addItem.price &&
      addItem.description &&
      addItem.pairing &&
      addItem.prepareTime
    ) {
      API.addMenuItem(addItem).then((res) => {
        console.log(`status code: ${res.status}`);
        loadMenu();
        setShowAddModal(false);
      });
    } else {
      alert(`Please fill out all required fields with appropriate input`);
    }
  }
  const clickCheckbox = (event) => {
    const checked = event.target.checked;
    const selectedId = event.target.getAttribute(`data-id`);
    if (checked) {
      setSelectedMenuItems([...selectedMenuItems, selectedId]);
    } else {
      setSelectedMenuItems(selectedMenuItems.filter((id) => id !== selectedId));
    }
  };
  const addItemArr = [
    {
      name: `category`,
      label: `Category`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter Food or Beverage`,
      onChange: addItemInventory
    },
    {
      name: `name`,
      label: `Item Name`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter Item Name`,
      onChange: addItemInventory
    },

    {
      name: `description`,
      label: `Item Description`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter Item Description`,
      onChange: addItemInventory
    },
    {
      name: `price`,
      label: `Item Price`,
      text: `Required`,
      type: `number`,
      placeholder: `Enter Item Price`,
      onChange: addItemInventory
    },
    {
      name: `pairing`,
      label: `Item Pairing`,
      type: `text`,
      text: `Required`,
      placeholder: `Enter item pairing`,
      onChange: addItemInventory
    },
    {
      name: `prepareTime`,
      label: `Item Prep Time`,
      text: `Required`,
      type: `number`,
      placeholder: `Enter Item Prep Time`,
      onChange: addItemInventory
    },
    {
      name: `itemCount`,
      label: `Item Count`,
      placeholder: `Enter Item Count`,
      text: `Optional`,
      type: `number`,
      onChange: addItemInventory
    }
  ];
  const menuItemsHeadingArr = [
    { key: `name`, heading: `Item Name` },
    { key: `category`, heading: `Category` },
    { key: `price`, heading: `Price` },
    { key: `pairing`, heading: `Pairing` },
    { key: `prepareTime`, heading: `Prep Time` },
    { key: `itemCount`, heading: `Count` }
  ];
  return (
    <div>
      <h1 className='d-flex justify-content-center display-4 text-white mt-5'>
        Menu
      </h1>
      <Container className='mt-5 mb-3'>
        <SearchBar
          className='col-12 rounded-sm'
          placeholder='Search inventory items'
          onChange={handleInputChange}
        />
      </Container>
      <div className='m-1'>
        <DropDownInput className='d-flex justify-content-center'>
          Sort by category
        </DropDownInput>
      </div>
      <InputModal
        show={showAddModal}
        cancel={() => {
          setShowAddModal(!showAddModal);
        }}
        title={`Add New Menu Item`}
        submit={handleAddItemSubmit}
        inputs={addItemArr}
      />
      <Container className='d-flex justify-content-center mt-5'>
        <Col>
          <Row className='mb-1'>
            <EditBar
              noneSelected={selectedMenuItems.length ? false : true}
              // delete={deleteButtonPressed}
              add={() => {
                setShowAddModal(!showAddModal);
              }}
            />
            <DataTable
              headingArr={menuItemsHeadingArr}
              dataArr={filteredMenu}
              clickCheckbox={clickCheckbox}
              hideEdit={false}
            />
          </Row>
        </Col>
      </Container>
    </div>
  );
}
export default Menu;
