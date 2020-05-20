import axios from 'axios';

export default {
  getTables: function () {
    return axios.get(`/api/floorplan`);
  },

  addTables: function (tableData) {
    return axios.post(`/api/floorplan`, tableData);
  },

  updateTables: function (id, data) {
    return axios.put(`/api/floorplan/${id}`, data);
  },

  removeTables: function (id) {
    return axios.delete(`/api/floorplan/${id}`);
  }
};
