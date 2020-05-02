import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import Container from 'react-bootstrap/Container';
import TableComponent from '../../components/Table/index';
import Calendar from '../../components/Calendar/index';
import API from '../../utils/timeAPI';
import { ViewButton, CloseButton } from '../../components/Buttons/index';
function TimeManagement() {
  const [shifts, setShifts] = useState([]);
  useEffect(() => {
    loadShifts();
  }, []);
  function loadShifts() {
    API.getTimeClock().then((res) => {
      console.log(res);
      setShifts(res.data);
    });
  }
  function handleDelete(event) {
    const shiftId = event.target.id;
    API.removeEmployeeTimeClock(shiftId).then(loadShifts());
  }
  return (
    <div>
      <h1 className='d-flex justify-content-center display-4 text-white mt-5'>
        Shift Tracker
      </h1>
      <Container className='mb-3 mt-5'>
        <SearchBar
          placeholder='Search employees'
          className='col-12 rounded-sm'
        />
      </Container>
      <Container className='d-flex justify-content-center '>
        <span className='text-white mr-5'>Filter by date</span>
        <Calendar className='mt-5 ' />
        <Calendar className='mt-5 ' />
      </Container>
      <Container className='d-flex justify-content-center mt-5'>
        <TableComponent className='text-white'>
          <thead>
            <TableComponent.TR>
              <TableComponent.TH>Employee Name</TableComponent.TH>
              <TableComponent.TH>Clock In</TableComponent.TH>
              <TableComponent.TH>Clock Out</TableComponent.TH>
              <TableComponent.TH>Modify</TableComponent.TH>
            </TableComponent.TR>
          </thead>
          <tbody>
            {shifts.map((shift) => (
              <TableComponent.TR key={shift._id}>
                <TableComponent.TD>{shift.employeeName}</TableComponent.TD>
                <TableComponent.TD>{shift.clockIn}</TableComponent.TD>
                <TableComponent.TD>{shift.clockOut}</TableComponent.TD>
                <TableComponent.TD>
                  <ViewButton className='m-1' />
                  <CloseButton
                    className='m-1'
                    id={shift._id}
                    onClick={handleDelete}
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

export default TimeManagement;
