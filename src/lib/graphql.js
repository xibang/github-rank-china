const axios = require("axios");
const axiosRetry = require("axios-retry").default;

axios.defaults.baseURL = "https://api.github.com";
axios.defaults.headers.common.Authorization = `bearer ${
	process.env.GITHUB_TOKEN || process.env.GH_TOKEN || ""
}`;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 10000;

axiosRetry(axios, { retries: 3 });

module.exports = ({ query, variables = undefined } = {}) =>
	axios.post("/graphql", { query, variables }).then((x) => x.data);
