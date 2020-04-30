import React from "react";
import SearchBar from "../../components/SearchBar/index";
import Container from "react-bootstrap/Container";
import DropDownInput from "../../components/DropDownInput/index";
import TableComponent from "../../components/Table/index";
class Menu extends React.Component {
  render() {
    return (
      <div>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <SearchBar
            placeholder="Search menu items"
            style={{ alignSelf: "center" }}
          />
        </Container>
        <DropDownInput style={{ display: "flex", justifyContent: "center" }}>
          Sort by category
        </DropDownInput>
        <Container
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <TableComponent style={{ width: "75%", color: "white" }}>
            <thead>
              <TableComponent.TR>
                <TableComponent.TH>Placeholder Item</TableComponent.TH>
                <TableComponent.TH>Placeholder Category</TableComponent.TH>
                <TableComponent.TH>Placeholder Price</TableComponent.TH>
              </TableComponent.TR>
            </thead>
            <tbody>
              <TableComponent.TR>
                <TableComponent.TD>Placeholder Burger</TableComponent.TD>
                <TableComponent.TD>Placeholder Food</TableComponent.TD>
                <TableComponent.TD>Placeholder $20</TableComponent.TD>
              </TableComponent.TR>
            </tbody>
          </TableComponent>
        </Container>
      </div>
    );
  }
}
export default Menu;
