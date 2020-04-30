import React from "react";
import Table from "react-bootstrap/Table";

export default function TableComponent(props) {
  return <Table {...props} />;
}

TableComponent.TH = function TH(props) {
  return <th {...props} />;
};

TableComponent.TR = function TR(props) {
  return <tr {...props} />;
};

TableComponent.TD = function TD(props) {
  return <td {...props} />;
};
