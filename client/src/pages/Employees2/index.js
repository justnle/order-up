import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import Container from 'react-bootstrap/Container';
import DropDownInput from '../../components/DropDownInput/index';
import DataTable from '../../components/DataTable';
import { AddButton } from '../../components/Buttons/index';
import API from '../../utils/employeesAPI';
import InputModal from '../../components/InputModal';

function Employees2() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({});
  const [selectedEmployees, setSelectedEmployees] = useState([])

  const showNewEmployeeModal = () => setShowModal(true);
  const closeNewEmployeeModal = () => setShowModal(false);

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

  const updateNewEmployee = event => {
    const { name, value } = event.target;
    setNewEmployee(newEmployee => ({ ...newEmployee, [name]: value }));
    console.log(newEmployee)
  };

  const newEmployeeInput = [
    {
      name: `name`,
      label: `Employee Name`,
      type: `text`,
      text: `Required`,
      placeholder: `Enter name`,
      onChange: updateNewEmployee
    },
    {
      name: `id`,
      label: `PIN`,
      type: `number`,
      text: `Enter 6 digits (e.g. 000000)`,
      placeholder: `Enter PIN`,
      onChange: updateNewEmployee
    },
    {
      name: `position`,
      label: `Position`,
      type: `text`,
      text: `Required (e.g. server)`,
      placeholder: `Enter position`,
      onChange: updateNewEmployee
    },
    {
      name: `rate`,
      label: `Hourly Rate`,
      type: `number`,
      text: `Required (format: 0.00)`,
      placeholder: `Enter hourly rate`,
      onChange: updateNewEmployee
    },
    {
      name: `permission`,
      label: `Permission`,
      type: `number`,
      text: `Required (from 0 to 5)`,
      placeholder: `Set permission level`,
      onChange: updateNewEmployee
    }
  ]

  const headingArr = [
    { key: `name`, heading: `Employee Name` },
    { key: `id`, heading: `Employee PIN` },
    { key: `position`, heading: `Position` },
    { key: `rate`, heading: `Hourly Rate` },
    { key: `permission`, heading: `Permission Level` }
  ];

  const clickCheckbox = event => {
    console.log(event.target.checked)
    console.log(event.target.getAttribute(`data-id`))
    const checked = event.target.checked;
    const selectedId = event.target.getAttribute(`data-id`);
    if (checked) {
      setSelectedEmployees([...selectedEmployees, selectedId])
    } else {
      setSelectedEmployees(selectedEmployees.filter(id => id !== selectedId));
    }
    console.log(selectedEmployees);
  }
  
  function submitButtonPressed(event) {
    event.preventDefault();
    if (
      newEmployee.name &&
      newEmployee.id &&
      newEmployee.position &&
      newEmployee.permission
    ) {
      console.log(`making call`)
      API.addEmployee(newEmployee).then((res) => {
        console.log(`status code: ${res.status}`);
        loadEmployees();
        closeNewEmployeeModal();
      });
    } else {
      alert(
        'Please fill in all fields with appropriate input to submit an employee'
      );
    }
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
        id='buttonsDiv'
      >
        <div className='m-1'>
          <DropDownInput className='d-flex justify-content-center'>
            Sort by vendor
          </DropDownInput>
        </div>
        <div className='m-1'>
          <AddButton onClick={showNewEmployeeModal} />
        </div>
      </div>

      <InputModal
        show={showModal} // bool
        cancel={closeNewEmployeeModal} // bool
        title={`Add a new employee`} // title string for your modal
        submit={submitButtonPressed}
        inputs={newEmployeeInput} // array of input objs
      />

      <Container className='d-flex justify-content-center mt-5'>
        <div className='row'></div>
        <DataTable 
          headingArr={headingArr} 
          dataArr={filteredEmployees} 
          hideEdit={false}
          clickCheckbox={clickCheckbox}
        />
      </Container>


    </div>
  );
}

export default Employees2;
