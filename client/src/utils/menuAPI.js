import axios from 'axios';

export default {
  getMenu: function () {
    return axios.get(`/api/menu`);
  },

  getMenuItem: function (id) {
    return axios.get(`/api/menu/${id}`);
  },

  addMenuItem: function (menuData) {
      return axios.post(`/api/menu`, menuData);
  },

  updateMenuItem: function (id, data) {
    return axios.put(`/api/menu/${id}`, data);
  },

  deleteMenuItem: function (id) {
    return axios.delete(`/api/menu/${id}`);
  }
};
