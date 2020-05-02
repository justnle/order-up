import axios from 'axios';

export default {
  getEmployees: function () {
    return axios.get(`/api/employee`);
  },

  getEmployee: function (id) {
    return axios.get(`/api/employee/${id}`);
  },

  addEmployee: function (employeeData) {
    console.log(employeeData);
    return axios.post(`/api/employee`, employeeData);
  },

  updateEmployee: function (id, data) {
    return axios.put(`/api/employee/${id}`, data);
  },

  deleteEmployee: function (id) {
    return axios.delete(`/api/employee/${id}`);
  }
};
