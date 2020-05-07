import axios from 'axios';

export default {
  getArchivedOrders: function () {
    return axios.get(`/api/archivedorder`);
  },

  getArchivedOrder: function (id) {
    return axios.get(`/api/archivedorder/${id}`);
  },

  addArchivedOrder: function (archivedData) {
    console.log(archivedData);
    return axios.post(`/api/archivedorder`, archivedData);
  },

  updateArchivedOrder: function (id, data) {
    return axios.put(`/api/archivedorder/${id}`, data);
  },

  deleteArchivedOrder: function (id) {
    return axios.delete(`/api/archivedorder/${id}`);
  }
};
