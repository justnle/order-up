import React, {useState, useEffect} from 'react';
import SearchBar from '../../components/SearchBar/index';
import {Container, Col, Row} from 'react-bootstrap';
import DataTable from '../../components/DataTable';
import API from '../../utils/menuAPI';
import InputModal from '../../components/InputModal';
import EditBar from '../../components/EditBar/index';
import './style.css';

function Menu() {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [modalTitle, setModalTitle] = useState();
  const [submitButtonLabel, setSubmitButtonLabel] = useState(`Submit`);
  const [itemInfo, setItemInfo] = useState({});

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = () => {
    setSelectedMenuItems([]);
    API.getMenu()
      .then(res => {
        setMenu(res.data);
        setFilteredMenu(res.data);
      })
      .catch(err => console.error(err));
  };

  const updateFilteredMenu = event => {
    const inputText = event.target.value;
    setFilteredMenu(
      menu.filter(item => {
        const words = item.name.split(' ');
        let isMatch = false;
        words.forEach(word => {
          if (word.toLowerCase().startsWith(inputText.toLowerCase())) {
            isMatch = true;
          }
        });
        return isMatch;
      })
    );
  };

  const addButtonPressed = () => {
    setInputs([...uniqueItemArr, ...otherItemArr]);
    setModalTitle(`Add Menu Item`);
    setSubmitButtonLabel(`Submit`);
    setShowAddModal(true);
  };

  const submitButtonPressed = event => {
    event.preventDefault();
    if (
      itemInfo.name &&
      itemInfo.description &&
      itemInfo.category &&
      itemInfo.price &&
      itemInfo.pairing &&
      itemInfo.prepareTime
    ) {

      API.addMenuItem(itemInfo).then((res) => {

        loadMenu();
        setShowAddModal(false);
      });
    } else {
      alert(`Please fill out all required fields of the menu item.`);
    }
  };
  const updateMenuInfoState = event => {
    const {name, value} = event.target;
    setItemInfo(info => ({...info, [name]: value}));
  };

  const clickCheckbox = event => {
    const checked = event.target.checked;
    const selectedId = event.target.getAttribute(`data-id`);
    if (checked) {
      setSelectedMenuItems([...selectedMenuItems, selectedId]);
    } else {
      setSelectedMenuItems(selectedMenuItems.filter(id => id !== selectedId));
    }
  };

  const editButtonPressed = () => {
    if (selectedMenuItems.length > 1) {
      setInputs(otherItemArr);
      setModalTitle(`Edit menu items`);
    } else {
      setItemInfo(menu.find(menu => menu._id === selectedMenuItems[0]));
      setInputs([...uniqueItemArr, ...otherItemArr]);
      setModalTitle(`Edit a menu item`);
    }
    setSubmitButtonLabel(`Save`);
    setShowAddModal(true);
  };

  const saveButtonPressed = () => {
    API.updateManyMenuItem(selectedMenuItems, itemInfo)
      .then(res => {
        if (res.data.n > 0) {
          setShowAddModal(false);
          loadMenu();
        } else {
          alert(
            `Something's wrong, we couldn't update the menu item at this time...`
          );
        }
      })
      .catch(err => console.error(err));
  };
  const deleteButtonPressed = () => {
    API.deleteManyMenuItems(selectedMenuItems)
      .then(res => {
        if (res.data.n > 0) {
          loadMenu();
        }
      })
      .catch(err => console.error(err));
  };

  const uniqueItemArr = [
    {
      name: `name`,
      label: `Name`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter item name`,
      onChange: updateMenuInfoState
    },

    {
      name: `description`,
      label: `Item Description`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter item description`,
      onChange: updateMenuInfoState
    }
  ];

  const otherItemArr = [
    {
      name: `category`,
      label: `Category`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter menu category`,
      onChange: updateMenuInfoState
    },
    {
      name: `price`,
      label: `Item Price`,
      text: `Required`,
      type: `number`,
      placeholder: `Enter item Price`,
      onChange: updateMenuInfoState
    },
    {
      name: `pairing`,
      label: `Item Pairing`,
      type: `text`,
      text: `Required`,
      placeholder: `Enter item pairing`,
      onChange: updateMenuInfoState
    },
    {
      name: `prepareTime`,
      label: `Item Prep Time`,
      text: `Required`,
      type: `number`,
      placeholder: `Enter Item Prep Time`,
      onChange: updateMenuInfoState
    }
  ];

  const menuItemsHeadingArr = [
    {key: `name`, heading: `Name`},
    {key: `category`, heading: `Category`},
    {key: `price`, heading: `Price`},
    {key: `pairing`, heading: `Pairing`},
    {key: `prepareTime`, heading: `Prep Time`}
  ];

  return (
    <div>
      <h1 className='d-flex justify-content-center display-4 mt-5'>Menu</h1>
      <Container className='mt-5 mb-3'>
        <SearchBar
          className='col-12 rounded-sm'
          placeholder='Search menu items'
          onChange={updateFilteredMenu}
        />
      </Container>

      <InputModal
        show={showAddModal}
        cancel={() => {
          setShowAddModal(!showAddModal);
        }}
        title={modalTitle}
        submit={
          submitButtonLabel === `Submit`
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
              hideAddButton={false}
              noneSelected={selectedMenuItems.length ? false : true}
              delete={deleteButtonPressed}
              add={addButtonPressed}
              edit={editButtonPressed}
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
