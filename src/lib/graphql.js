const axios = require('axios');

axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.headers.common.Authorization = `bearer ${process.env.GH_TOKEN || ''}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

module.exports = ({ query, variables = undefined } = {}) => axios
  .post('/graphql', { query, variables })
  .then(x => x.data);
