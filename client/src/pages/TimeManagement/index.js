import React, {useState, useEffect} from 'react';
import SearchBar from '../../components/SearchBar/index';
import {Container, Col, Row} from 'react-bootstrap';
import DataTable from '../../components/DataTable';
import Calendar from '../../components/Calendar/index';
import API from '../../utils/timeAPI';
import EditBar from '../../components/EditBar/index';
import {FilterButton} from '../../components/Buttons/index';
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
      const name = shift.employeeName
        .toLowerCase()
        .startsWith(filterShifts.employeeName);
      if (
        shift.employeeName.startsWith(filterShifts.employeeName) &&
        shift.clockIn.slice(0, 10) >= filterShifts.clockIn &&
        shift.clockOut.slice(0, 10) <= filterShifts.clockOut
      ) {
        return true;
      }
      if (
        shift.employeeName.startsWith(filterShifts.employeeName) &&
        shift.clockOut.slice(0, 10) <= filterShifts.clockOut
      ) {
        return true;
      }
      if (
        shift.employeeName.startsWith(filterShifts.employeeName) &&
        shift.clockIn.slice(0, 10) >= filterShifts.clockIn
      ) {
        return true;
      }
      if (
        shift.employeeName.startsWith(filterShifts.employeeName) &&
        !filterShifts.clockIn &&
        !filterShifts.clockOut
      ) {
        return true;
      }
      if (
        !filterShifts.employeeName &&
        !filterShifts.clockIn &&
        shift.clockOut.slice(0, 10) <= filterShifts.clockOut
      ) {
        return true;
      }
      if (
        !filterShifts.employeeName &&
        !shift.clockIn &&
        filterShifts.clockOut
      ) {
        return true;
      }
      if (
        !filterShifts.employeeName &&
        shift.clockIn.slice(0, 10) >= filterShifts.clockIn &&
        shift.clockOut.slice(0, 10) <= filterShifts.clockOut
      ) {
        return true;
      }
      if (
        shift.employeeName.startsWith(filterShifts.employeeName) &&
        !filterShifts.clockIn &&
        shift.clockOut.slice(0, 10) <= filterShifts.clockOut
      ) {
        return true;
      } else {
        return false;
      }
    });
    setShiftDisplay(filtered);
  }, [filterShifts]);

  const loadShifts = () => {
    API.getTimeClock().then(res => {
      setShifts(res.data);
      setShiftDisplay(res.data);
    });
  };
  function handleInput(event) {
    const {name, value} = event.target;
    setFilterShifts(filterShifts => ({...filterShifts, [name]: value}));
  }

  const shiftsHeadingArr = [
    {key: `employeeName`, heading: `Employee`},
    {key: `clockIn`, heading: `Clock In`},
    {key: `clockOut`, heading: `Clock Out`}
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
    const {name, value} = event.target;
    setTimes(times => ({...times, [name]: value}));
  };

  const editButtonPressed = () => {
    setShowAddModal(true);
  };

  const saveButtonPressed = () => {
    API.updateManyShifts(selectedShifts, times).then(res => {
      if (res.data.n > 0) {
        setShowAddModal(false);
        loadShifts();
      } else {
        alert(
          `Something's wrong, we couldn't update the menu item at this time...`
        );
      }
    });
  };

  const deleteButtonPressed = () => {
    if (selectedShifts.length === 1) {
      API.removeEmployeeTimeClock(selectedShifts[0]).then(() => {
        loadShifts();
        setSelectedShifts([]);
      });
    } else {
      API.removeManyEmployeeTimeClock(selectedShifts).then(() => {
        loadShifts();
        setSelectedShifts([]);
      });
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
          name='employeeName'
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
