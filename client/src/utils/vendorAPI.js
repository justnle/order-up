import axios from 'axios';

export default {
  getVendors: function () {
    return axios.get(`/api/vendor`);
  },
  getVendor: function (id) {
    return axios.get(`/api/vendor/${id}`);
  },
  addVendor: function (vendorData) {
    return axios.post(`/api/vendor`, vendorData);
  },
  updateVendor: function (id, vendorData) {
    return axios.put(`/api/vendor/:${id}`, vendorData);
  },
  deleteVendor: function (id) {
    return axios.delete(`/api/vendor/${id}`);
  }
};
