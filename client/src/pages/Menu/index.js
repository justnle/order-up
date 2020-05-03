import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import Container from 'react-bootstrap/Container';
import DropDownInput from '../../components/DropDownInput/index';
import TableComponent from '../../components/Table/index';
import {
  AddButton,
  SubmitButton,
  CloseButton
} from '../../components/Buttons/index';
import Collapse from 'react-bootstrap/Collapse';
import FControl from '../../components/TextInput/FormGroup';
import API from '../../utils/menuAPI';
import InputModal from '../../components/InputModal';

function Menu() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [addItem, setAddItem] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);

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

  return (
    <div>
      <Container className='d-flex justify-content-center mt-5'>
        <SearchBar
          className='flex-row rounded-sm'
          placeholder='Search menu items'
          onChange={handleInputChange}
        />
      </Container>
      <div id='buttonsDiv' className='d-flex row justify-content-center'>
        <div className='m-1'>
          <DropDownInput className='d-flex justify-content-center'>
            Sort by category
          </DropDownInput>
        </div>
        <div className='m-1'>
          <AddButton
            onClick={() => {
              setShowAddModal(!showAddModal);
            }}
          />
        </div>
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
        <TableComponent className='text-white w-100 '>
          <thead>
            <TableComponent.TR>
              <TableComponent.TH>Item</TableComponent.TH>
              <TableComponent.TH>Category</TableComponent.TH>
              <TableComponent.TH>Price</TableComponent.TH>
              <TableComponent.TH>Item Pairing</TableComponent.TH>
              <TableComponent.TH>Prepare Time</TableComponent.TH>
              <TableComponent.TH>Item Count</TableComponent.TH>
              <TableComponent.TH>Modify</TableComponent.TH>
            </TableComponent.TR>
          </thead>
          <tbody>
            {filteredMenu.map((item) => (
              <TableComponent.TR key={item.id}>
                <TableComponent.TD>{item.name}</TableComponent.TD>
                <TableComponent.TD>{item.category}</TableComponent.TD>
                <TableComponent.TD>{item.price}</TableComponent.TD>
                <TableComponent.TD>{item.pairing}</TableComponent.TD>
                <TableComponent.TD>{item.prepareTime}</TableComponent.TD>
                <TableComponent.TD>{item.itemCount}</TableComponent.TD>
                <TableComponent.TD>
                  <CloseButton
                    className='m-1'
                    id={item.id}
                    onClick={(event) => {
                      API.deleteMenuItem(event.target.id).then(loadMenu);
                    }}
                  />
                </TableComponent.TD>
              </TableComponent.TR>
            ))}
          </tbody>
        </TableComponent>
      </Container>
    </div>
  );
}
export default Menu;
