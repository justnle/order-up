import axios from 'axios';

export default {
  // get all time clock information
  getTimeClock: function () {
    return axios.get(`/api/time`);
  },
  // get individual employee's time clock information
  getEmployeeTimeClock: function (id) {
    return axios.get(`/api/time/${id}`);
  },
  // add time clock information
  addEmployeeTimeClock: function (timeData) {
    return axios.post(`/api/time`, timeData);
  },
  // update individual employee's time clock
  updateEmployeeTimeClock: function (id, data) {
    return axios.put(`/api/time/${id}`, data);
  },
  removeEmployeeTimeClock: function (id) {
    return axios.delete(`/api/time/${id}`);
  }
};
