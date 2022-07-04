import axios from 'axios';
import services from './methods';

const ServiceApp = {};

ServiceApp.Login = (user) => {
  return axios.post(services.login, {
    user: user.user,
    password: user.password,
  });
};

ServiceApp.RegisterUser = (data) => {
  let token = localStorage.getItem('token');
  return axios.post(services.registerUser, data, {
    headers: {
      token: token,
      'Content-Type': 'application/json',
    },
  });
};
//User
ServiceApp.ListUsers = () => {
  let token = localStorage.getItem('token');
  return axios.get(services.getUsers, {
    headers: {
      token: token,
      'Content-Type': 'application/json',
    },
  });
};
//Notes
ServiceApp.ListNotes = () => {
  let token = localStorage.getItem('token');
  return axios.get(services.getNotes, {
    headers: {
      token: token,
      'Content-Type': 'application/json',
    },
  });
};

ServiceApp.Note = (id) => {
  let token = localStorage.getItem('token');
  return axios.get(`${services.getNote}${id}`, {
    headers: {
      token: token,
      'Content-Type': 'application/json',
    },
  });
};

ServiceApp.RegisterNote = (data) => {
  let token = localStorage.getItem('token');
  return axios.post(services.registerNote, data, {
    headers: {
      token: token,
      'Content-Type': 'application/json',
    },
  });
};

ServiceApp.UpdateNote = (data) => {
  let token = localStorage.getItem('token');
  return axios.put(`${services.updateNote}${data.id}`, data, {
    headers: {
      token: token,
      'Content-Type': 'application/json',
    },
  });
};

ServiceApp.DeleteNote = (id) => {
  let token = localStorage.getItem('token');
  return axios.delete(`${services.deleteNote}${id}`, {
    headers: {
      token: token,
      'Content-Type': 'application/json',
    },
  });
};

export default ServiceApp;
