import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import { Container, Col, Row } from 'react-bootstrap';
import API from '../../utils/vendorAPI';
import EditBar from '../../components/EditBar/index';
import DataTable from '../../components/DataTable';

function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [selectedVendors, setSelectedVendors] = useState([]);

  useEffect(() => {
    loadVendors();
  }, []);

  const loadVendors = () => {
    API.getVendors()
      .then((res) => {
        setVendors(res.data);
      })
      .catch((err) => console.error(err));
  };

  const clickCheckbox = (event) => {
    const checked = event.target.checked;
    const selectedId = event.target.getAttribute(`data-id`);
    if (checked) {
      setSelectedVendors([...selectedVendors, selectedId]);
    } else {
      setSelectedVendors(selectedVendors.filter((id) => id !== selectedId));
    }
  };
  const vendorsHeaderArr = [
    { key: `vendorName`, heading: `Vendor Name` },
    { key: `vendorContactName`, heading: `Contact` },
    { key: `vendorPhoneNumber`, heading: `Phone` },
    { key: `vendorEmailAddress`, heading: `Email` }
  ];

  return (
    <div>
      <h1 className='d-flex justify-content-center display-4 text-white mt-5'>
        Vendors
      </h1>
      <Container className='mt-5 mb-3'>
        <SearchBar className='col-12 rounded-sm' placeholder='Search vendors' />
      </Container>
      <Container className='d-flex justify-content-center mt-5'>
        <Col>
          <Row className='mb-1'>
            <EditBar />
            <DataTable
              headingArr={vendorsHeaderArr}
              hideEdit={false}
              clickCheckbox={clickCheckbox}
              dataArr={vendors}
            />
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default Vendors;
