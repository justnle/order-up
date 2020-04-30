import React from "react";
import SearchBar from "../../components/SearchBar/index";
import Container from "react-bootstrap/Container";
import DropDownInput from "../../components/DropDownInput/index";
import TableComponent from "../../components/Table/index";
import { AddButton } from "../../components/Buttons/index";
class Employees extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <SearchBar
            placeholder="Search employees"
            style={{
              display: "flex",
              alignSelf: " center"
            }}
          />
        </Container>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div style={{ margin: "1%" }}>
            <DropDownInput>Sort by role</DropDownInput>
          </div>
          <div style={{ margin: "1%" }}>
            <AddButton />
          </div>
        </div>
        <Container
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <TableComponent style={{ width: "75%", color: "white" }}>
            <thead>
              <TableComponent.TR>
                <TableComponent.TH>Employee Name</TableComponent.TH>
                <TableComponent.TH>Employee Role</TableComponent.TH>
                <TableComponent.TH>Employee Rate</TableComponent.TH>
                <TableComponent.TH>Employee Pin</TableComponent.TH>
              </TableComponent.TR>
            </thead>
            <tbody>
              <TableComponent.TR>
                <TableComponent.TD>Fake Name</TableComponent.TD>
                <TableComponent.TD>Server</TableComponent.TD>
                <TableComponent.TD>$15.00</TableComponent.TD>
                <TableComponent.TD>123456</TableComponent.TD>
              </TableComponent.TR>
            </tbody>
          </TableComponent>
        </Container>
      </div>
    );
  }
}
export default Employees;
