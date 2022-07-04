import configService from './config';

const services = {
  //ACCOUNT
  login: configService.apiUrl + '/login',
  //USER
  registerUser: configService.apiUrl + '/new-user',
  updateUser: configService.apiUrl + '/user',
  getUsers: configService.apiUrl + '/users',
  //NOTE
  getNote: configService.apiUrl + '/note/', //id
  getNotes: configService.apiUrl + '/notes',
  registerNote: configService.apiUrl + '/new-note',
  updateNote: configService.apiUrl + '/note/', //id
  deleteNote: configService.apiUrl + '/note/', //id
};

export default services;
