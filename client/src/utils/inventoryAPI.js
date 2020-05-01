import axios from 'axios';

export default {
  getInventory: function () {
    return axios.get(`/api/inventory`);
  },

  getInventoryItem: function (id) {
    return axios.get(`/api/inventory/${id}`);
  },

  updateInventoryItem: function (id, data) {
    return axios.put(`/api/inventory/${id}`, data);
  },

  deleteInventoryItem: function (id) {
    return axios.delete(`/api/inventory/${id}`);
  }
};
