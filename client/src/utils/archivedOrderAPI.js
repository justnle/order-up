import axios from 'axios';

export default {
  getArchivedOrders: function () {
    return axios.get(`/api/archivedorders`);
  },

  getArchivedOrder: function (id) {
    return axios.get(`/api/archivedorders/${id}`);
  },

  addArchivedOrder: function (archivedData) {
    return axios.post(`/api/archivedorders`, archivedData);
  },

  updateArchivedOrder: function (id, data) {
    return axios.put(`/api/archivedorders/${id}`, data);
  },

  deleteArchivedOrder: function (id) {
    return axios.delete(`/api/archivedorders/${id}`);
  }
};
