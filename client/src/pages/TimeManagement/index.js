import React from "react";
import SearchBar from "../../components/SearchBar/index";
import Container from "react-bootstrap/Container";
import TableComponent from "../../components/Table/index";
import Calendar from "../../components/Calendar/index";
class TimeManagement extends React.Component {
  render() {
    return (
      <div>
        <Container className="d-flex justify-content-center ">
          <SearchBar
            className="flex-row"
            placeholder="Search by Employee Name"
          />
        </Container>
        <Calendar />
        <Calendar />
        <Container
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <TableComponent style={{ width: "75%", color: "white" }}>
            <thead>
              <TableComponent.TR>
                <TableComponent.TH>Employee Name</TableComponent.TH>
                <TableComponent.TH>Clock In</TableComponent.TH>
                <TableComponent.TH>Clock Out</TableComponent.TH>
              </TableComponent.TR>
            </thead>
            <tbody>
              <TableComponent.TR>
                <TableComponent.TD>Fake Name</TableComponent.TD>
                <TableComponent.TD>July 5, 2020 00:00:00</TableComponent.TD>
                <TableComponent.TD>July 5, 2020 00:00:00</TableComponent.TD>
              </TableComponent.TR>
            </tbody>
          </TableComponent>
        </Container>
      </div>
    );
  }
}
export default TimeManagement;
