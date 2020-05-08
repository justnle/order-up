import axios from 'axios';

export default {
  getActiveOrders: function () {
    return axios.get(`/api/activeorder`);
  },

  getActiveOrder: function (id) {
    return axios.get(`/api/activeorder/${id}`);
  },

  addActiveOrder: function (activeData) {
    return axios.post(`/api/activeorder`, activeData);
  },

  updateActiveOrder: function (id, data) {
    return axios.put(`/api/activeorder/${id}`, data);
  },

  deleteActiveOrder: function (id) {
    return axios.delete(`/api/activeorder/${id}`);
  }
};
