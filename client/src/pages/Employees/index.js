import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import EditBar from '../../components/EditBar';
import { Container, Col, Row } from 'react-bootstrap';
import DropDownInput from '../../components/DropDownInput/index';
import DataTable from '../../components/DataTable';
import API from '../../utils/employeesAPI';
import InputModal from '../../components/InputModal';

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState(`add`);
  const [newEmployee, setNewEmployee] = useState({});
  const [editEmployee, setEditEmployee] = useState({});
  const [selectedEmployees, setSelectedEmployees] = useState([])
  const [modalTitle, setModalTitle] = useState();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    API.getEmployees()
      .then(res => {
        setEmployees(res.data);
        setFilteredEmployees(res.data);
      })
      .catch(err => console.error(err));
  }

  const handleInputChange = event => {
    const inputText = event.target.value;
    setFilteredEmployees(
      employees.filter(employee => {
        const words = employee.name.split(' ');
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

  const updateNewEmployeeState = event => {
    const { name, value } = event.target;
    setNewEmployee(newEmployee => ({ ...newEmployee, [name]: value }));
  };

  const updateEditEmployeeState = event => {
    const { name, value } = event.target;
    setEditEmployee(editEmployee => ({ ...editEmployee, [name]: value }));
  };

  const newEmployeeInput = [
    {
      name: `name`,
      label: `Employee Name`,
      type: `text`,
      text: `Required`,
      placeholder: `Enter name`,
      onChange: updateNewEmployeeState
    },
    {
      name: `id`,
      label: `PIN`,
      type: `number`,
      text: `Enter 6 digits (e.g. 000000)`,
      placeholder: `Enter PIN`,
      onChange: updateNewEmployeeState
    },
    {
      name: `position`,
      label: `Position`,
      type: `text`,
      text: `Required (e.g. server)`,
      placeholder: `Enter position`,
      onChange: updateNewEmployeeState
    },
    {
      name: `rate`,
      label: `Hourly Rate`,
      type: `number`,
      text: `Required (format: 0.00)`,
      placeholder: `Enter hourly rate`,
      onChange: updateNewEmployeeState
    },
    {
      name: `permission`,
      label: `Permission`,
      type: `number`,
      text: `Required (from 0 to 5)`,
      placeholder: `Set permission level`,
      onChange: updateNewEmployeeState
    }
  ]

  const editEmployeeInput = [
    {
      name: `position`,
      label: `Position`,
      type: `text`,
      text: `Required (e.g. server)`,
      placeholder: `Enter position`,
      onChange: updateEditEmployeeState
    },
    {
      name: `rate`,
      label: `Hourly Rate`,
      type: `number`,
      text: `Required (format: 0.00)`,
      placeholder: `Enter hourly rate`,
      onChange: updateEditEmployeeState
    },
    {
      name: `permission`,
      label: `Permission`,
      type: `number`,
      text: `Required (from 0 to 5)`,
      placeholder: `Set permission level`,
      onChange: updateEditEmployeeState
    }
  ]

  const headingArr = [
    { key: `name`, heading: `Employee Name` },
    { key: `id`, heading: `Employee PIN` },
    { key: `position`, heading: `Position` },
    { key: `rate`, heading: `Hourly Rate` },
    { key: `permission`, heading: `Permission Level` }
  ];

  const addButtonPressed = () => {
    setMode(`add`);
    setModalTitle(`Add a new employee`);
    setShowModal(true);
  }

  const closeEmployeeModal = () => setShowModal(false);

  const editButtonPressed = () => {
    console.log(`Edit button pressed!`)
    if (selectedEmployees.length > 1) {
      console.log(`More than 1 employee selected`)
      setMode(`edit`)
      setModalTitle(`Edit employees`);
      setShowModal(true)
    } else {
      console.log(`Only 1 employee selected`)
      setMode(`add`)
      setModalTitle(`Edit an employee`);
      setShowModal(true)
    }

  }

  const checkboxClicked = event => {
    const checked = event.target.checked;
    const selectedId = event.target.getAttribute(`data-id`);
    if (checked) {
      setSelectedEmployees([...selectedEmployees, selectedId])
    } else {
      setSelectedEmployees(selectedEmployees.filter(id => id !== selectedId));
    }
  }

  const submitButtonPressed = event => {
    event.preventDefault();
    if (
      newEmployee.name &&
      newEmployee.id &&
      newEmployee.position &&
      newEmployee.permission
    ) {
      console.log(`making call`)
      API.addEmployee(newEmployee).then(res => {
        console.log(`status code: ${res.status}`);
        loadEmployees();
        closeEmployeeModal();
      });
    } else {
      alert(
        'Please fill in all fields with appropriate input to submit an employee'
      );
    }
  }

  const deleteButtonPressed = event => {
    console.log(`Delete button clicked`)
    API.deleteManyEmployee(selectedEmployees)
      .then(res => {
        console.log(`status code: ${res.status}`);
        if (res.data.n > 0) {
          loadEmployees();
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <h1 className='d-flex justify-content-center display-4 text-white mt-5'>
        Employees
      </h1>
      <Container className='mb-3 mt-5'>
        <SearchBar
          placeholder='Search employees'
          className='col-12 rounded-sm'
          onChange={handleInputChange}
        />
      </Container>

      <div
        className=' d-flex row justify-content-center align-items-center text-white'
        id='buttonsDiv'>
        <div className='m-1'>
          <DropDownInput className='d-flex justify-content-center'>
            Sort by vendor
          </DropDownInput>
        </div>
      </div>

      <InputModal
        show={showModal} // bool
        cancel={closeEmployeeModal}
        title={modalTitle}
        submit={submitButtonPressed}
        inputs={mode === `add` ? newEmployeeInput : editEmployeeInput} // array of input objs
      />

      <Container className='d-flex justify-content-center mt-5'>
        <Col>
          <Row className='mb-1'>
            <EditBar noneSelected={selectedEmployees.length ? false : true}
              add={addButtonPressed}
              edit={editButtonPressed}
              delete={deleteButtonPressed}
            />
          </Row>
          <Row>
            <DataTable
              headingArr={headingArr}
              dataArr={filteredEmployees}
              hideEdit={false}
              clickCheckbox={checkboxClicked}
            />
          </Row>
        </Col>
      </Container>

    </div>
  );
}

export default Employees;
