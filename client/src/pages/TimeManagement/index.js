import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import { Container, Col, Row } from 'react-bootstrap';
import DataTable from '../../components/DataTable';
import Calendar from '../../components/Calendar/index';
import API from '../../utils/timeAPI';
import EditBar from '../../components/EditBar/index';
function TimeManagement() {
  const [shifts, setShifts] = useState([]);
  const [selectedShifts, setSelectedShifts] = useState([]);
  const [filterShifts, setFilterShifts] = useState([]);

  useEffect(() => {
    loadShifts();
  }, []);
  function loadShifts() {
    API.getTimeClock().then((res) => {
      setShifts(res.data);
    });
  }
  function handleInput(event) {
    const { name, value } = event.target;
    setFilterShifts((filterShifts) => ({ ...filterShifts, [name]: value }));
    console.log(filterShifts);
  }

  const shiftsHeadingArr = [
    { key: `employeeName`, heading: `Employee` },
    { key: `clockIn`, heading: `Clock In` },
    { key: `clockOut`, heading: `Clock Out` }
  ];
  const clickCheckbox = (event) => {
    const checked = event.target.checked;
    const selectedId = event.target.getAttribute(`data-id`);
    if (checked) {
      setSelectedShifts([...selectedShifts, selectedId]);
    } else {
      setSelectedShifts(selectedShifts.filter((id) => id !== selectedId));
    }
    console.log(selectedShifts);
  };
  const deleteButtonPressed = (event) => {
    const shiftId = event.target.id;
    API.removeEmployeeTimeClock(shiftId).then(loadShifts());
  };
  return (
    <div>
      <h1 className='d-flex justify-content-center display-4 text-white mt-5'>
        Shift Tracker
      </h1>
      <Container className='mb-3 mt-5'>
        <SearchBar
          placeholder='Search employees'
          className='col-12 rounded-sm'
          name='name'
          onChange={handleInput}
        />
      </Container>
      <Container className='d-flex justify-content-center '>
        <span className='text-white mr-5 lead'>Filter by date</span>
        <Calendar className='mt-5' name='start' onChange={handleInput} />
        <Calendar className='mt-5' name='end' onClick={handleInput} />
      </Container>
      <Container className='d-flex justify-content-center mt-5'>
        <Col>
          <Row className='mb-1'>
            <EditBar
              noneSelected={selectedShifts.length ? false : true}
              delete={deleteButtonPressed}
            />
            <DataTable
              headingArr={shiftsHeadingArr}
              hideEdit={false}
              clickCheckbox={clickCheckbox}
              dataArr={shifts}
            />
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default TimeManagement;
