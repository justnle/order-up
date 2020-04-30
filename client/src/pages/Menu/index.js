import React from "react";
import SearchBar from "../../components/SearchBar/index";
import Container from "react-bootstrap/Container";

class Menu extends React.Component {
  render() {
    return (
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <SearchBar placeholder="Search menu items" style={{ width: "180%" }} />
      </Container>
    );
  }
}
export default Menu;
