import axios from 'axios';

export default {
  getInventory: function () {
    return axios.get(`/api/inventory`);
  },

  getInventoryItem: function (id) {
    return axios.get(`/api/inventory/${id}`);
  },

  addInventoryItem: function (inventoryData) {
    return axios.post(`/api/inventory`, inventoryData);
  },

  updateInventoryItem: function (id, data) {
    return axios.put(`/api/inventory/${id}`, data);
  },

  updateManyInventoryItem: function (idArr, data) {
    return axios.put(`/api/inventory/updateMany`, {
      idArr: idArr,
      updateData: data
    });
  },

  deleteInventoryItem: function (id) {
    return axios.delete(`/api/inventory/${id}`);
  },

  deleteManyInventoryItem: function (idArr) {
    return axios.delete(`/api/inventory/deleteMany`, {
      data: { arr: idArr }
    });
  }
};
