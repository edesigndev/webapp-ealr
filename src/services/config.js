const serverUris = {
  production: `https://app-mevn-edesigndev.herokuapp.com/api`,
  local: 'http://localhost:3000/api',
};

const configService = {
  apiUrl: serverUris.production,
};

export default configService;
