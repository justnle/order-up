import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import { Container, Col, Row } from 'react-bootstrap';
import DataTable from '../../components/DataTable';
import Calendar from '../../components/Calendar/index';
import API from '../../utils/timeAPI';
import EditBar from '../../components/EditBar/index';
import { FilterButton } from '../../components/Buttons/index';
import InputModal from '../../components/InputModal';

function TimeManagement() {
  const [shifts, setShifts] = useState([]);
  const [selectedShifts, setSelectedShifts] = useState([]);
  const [filterShifts, setFilterShifts] = useState([]);
  const [shiftDisplay, setShiftDisplay] = useState([]);
  const [times, setTimes] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    loadShifts();
  }, []);

  useEffect(() => {
    const filtered = shifts.filter(shift => {
      if (
        shift.employeeName === filterShifts.employeeName &&
        shift.clockIn >= filterShifts.clockIn &&
        shift.clockOut <= filterShifts.clockOut
      ) {
        return true;
      }
      if (
        shift.employeeName === filterShifts.employeeName &&
        !filterShifts.clockIn
      ) {
        return true;
      }
      if (
        shift.employeeName === filterShifts.employeeName &&
        !filterShifts.clockOut
      ) {
        return true;
      }
    });
    setShiftDisplay(filtered);
  }, [filterShifts]);

  const loadShifts = () => {
    API.getTimeClock()
      .then(res => {
        setShifts(res.data);
        setShiftDisplay(res.data);
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

  const clickCheckbox = event => {
    const checked = event.target.checked;
    const selectedId = event.target.getAttribute(`data-id`);
    if (checked) {
      setSelectedShifts([...selectedShifts, selectedId]);
    } else {
      setSelectedShifts(selectedShifts.filter(id => id !== selectedId));
    }
  };

  const updateInputState = event => {
    const { name, value } = event.target;
    setTimes(times => ({ ...times, [name]: value }));
    console.log(name, value);
    console.log(times)
  };

  const editButtonPressed = () => {
    console.log(`Edit button pressed.`);
    setShowAddModal(true);
  }

  const saveButtonPressed = () => {
    console.log(`Save button pressed`);
    API.updateManyShifts(selectedShifts, times).then(res => {
      console.log(`Status code ${res.status}`);
      console.log(`Affected records: ${res.data.n}`);
      if (res.data.n > 0) {
        setShowAddModal(false);
        loadShifts();
      } else {
        alert(
          `Something's wrong, we couldn't update the menu item at this time...`
        );
      }
    })
  }

  const deleteButtonPressed = () => {
    console.log(selectedShifts);
    if (selectedShifts.length === 1) {
      API.removeEmployeeTimeClock(selectedShifts[0])
        .then(() => {
          loadShifts();
          setSelectedShifts([]);
        });
    } else {
      API.removeManyEmployeeTimeClock(selectedShifts)
        .then(() => {
          loadShifts();
          setSelectedShifts([]);
        })
    }
  };

  const timeArr = [
    {
      name: `clockIn`,
      label: `Clock In`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter clock in time`,
      onChange: updateInputState
    },

    {
      name: `clockOut`,
      label: `Clock Out`,
      text: `Required`,
      type: `text`,
      placeholder: `Enter clock out time`,
      onChange: updateInputState
    }
  ];

  return (
    <div>
      <h1 className='d-flex justify-content-center display-4 mt-5'>
        Shift Tracker
      </h1>
      <Container className='mb-3 mt-5'>
        <SearchBar
          placeholder='Search employees'
          onChange={handleInput}
        />
      </Container>

      <Container className='d-flex justify-content-center'>
        <Calendar className='mt-1' name='clockIn' onChange={handleInput} />
        <Calendar className='mt-1' name='clockOut' onChange={handleInput} />
      </Container>

      <div className='d-flex justify-content-center mt-5'>
        <FilterButton onClick={() => setShiftDisplay(shifts)} />
      </div>

      <InputModal
        show={showAddModal}
        cancel={() => {
          setShowAddModal(!showAddModal);
        }}
        title='Edit time'
        submit={saveButtonPressed}
        submitButtonLabel='SAVE'
        inputs={timeArr}
        value={times}
      />

      <Container className='d-flex justify-content-center mt-5'>
        <Col>
          <Row className='mb-1'>
            <EditBar
              hideAddButton={true}
              noneSelected={selectedShifts.length ? false : true}
              edit={editButtonPressed}
              delete={deleteButtonPressed}
            />
            <DataTable
              headingArr={shiftsHeadingArr}
              hideEdit={false}
              clickCheckbox={clickCheckbox}
              dataArr={shiftDisplay}
            />
          </Row>
        </Col>
      </Container>

    </div>
  );
}

export default TimeManagement;
