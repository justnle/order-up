import React from "react";
import Table from "react-bootstrap/Table";

export default function Table(props) {
  return <Table {...props} />;
}

Table.TH = function TH(props) {
  return <th {...props} />;
};

Table.TR = function TR(props) {
  return <tr {...props} />;
};

Table.TD = function TD(props) {
  return <td {...props} />;
};
