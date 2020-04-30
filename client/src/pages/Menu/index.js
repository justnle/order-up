import React from "react";
import SearchBar from "../../components/SearchBar/index";
import Container from "react-bootstrap/Container";
import DropDownInput from "../../components/DropDownInput/index";
import TableComponent from "../../components/Table/index";
class Menu extends React.Component {
  render() {
    return (
      <div>
        <Container className="d-flex justify-content-center">
          <SearchBar className="flex-row " placeholder="Search menu items" />
        </Container>
        <DropDownInput className="d-flex justify-content-center">
          Sort by category
        </DropDownInput>
        <Container className="d-flex justify-content-center mt-5">
          <TableComponent className="text-white w-75 ">
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
