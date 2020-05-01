import axios from 'axios';

export default {
  getActiveOrders: function () {
    return axios.get(`/api/activedorders`);
  },

  getActiveOrder: function (id) {
    return axios.get(`/api/activedorders/${id}`);
  },

  addActiveOrder: function (activeData) {
    return axios.post(`/api/activedorders`, activeData);
  },

  updateActiveOrder: function (id, data) {
    return axios.put(`/api/activedorders/${id}`, data);
  },

  deleteActiveOrder: function (id) {
    return axios.delete(`/api/activedorders/${id}`);
  }
};
