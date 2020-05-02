import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import Container from 'react-bootstrap/Container';
import DropDownInput from '../../components/DropDownInput/index';
import TableComponent from '../../components/Table/index';
import { AddButton } from '../../components/Buttons/index';
import API from '../../utils/employeesAPI';
import EmployeeModal from '../../components/EmployeeModal';

function Employees2() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({});

  const showNewEmployeeModal = () => setShowModal(true);
  const closeNewEmployeeModal = () => setShowModal(false);

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getEmployees()
      .then((res) => {
        setEmployees(res.data);
        setFilteredEmployees(res.data);
      })
      .catch((err) => console.error(err));
  }

  function handleInputChange(event) {
    const inputText = event.target.value;
    setFilteredEmployees(
      employees.filter((employee) => {
        const words = employee.name.split(' ');
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

  const updateNewEmployee = (event) => {
    const { name, value } = event.target;
    setNewEmployee((newEmployee) => ({ ...newEmployee, [name]: value }));
  };

  function submitButtonPressed(event) {
    event.preventDefault();
    if (
      newEmployee.name &&
      newEmployee.id &&
      newEmployee.position &&
      newEmployee.permission
    ) {
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
      <Container className='d-flex justify-content-center mt-5'>
        <SearchBar
          placeholder='Search employees'
          className='flex-row rounded-sm'
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

      <EmployeeModal
        show={showModal}
        cancel={closeNewEmployeeModal}
        updateNewEmployee={updateNewEmployee}
        submit={submitButtonPressed}
      />
      <h1 className='d-flex justify-content-center display-4 text-white mt-5'>
        Employees
      </h1>
      <Container className='d-flex justify-content-center'>
        <TableComponent className='text-white w-75'>
          <thead>
            <TableComponent.TR>
              <TableComponent.TH>Employee Name</TableComponent.TH>
              <TableComponent.TH>Employee Role</TableComponent.TH>
              <TableComponent.TH>Employee Rate</TableComponent.TH>
              <TableComponent.TH>Employee Pin</TableComponent.TH>
            </TableComponent.TR>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <TableComponent.TR key={employee._id}>
                <TableComponent.TD>{employee.name}</TableComponent.TD>
                <TableComponent.TD>{employee.position}</TableComponent.TD>
                <TableComponent.TD>{employee.rate}</TableComponent.TD>
                <TableComponent.TD>{employee.id}</TableComponent.TD>
              </TableComponent.TR>
            ))}
          </tbody>
        </TableComponent>
      </Container>
    </div>
  );
}

export default Employees2;
