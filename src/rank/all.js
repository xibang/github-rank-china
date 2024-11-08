const graphql = require("../lib/graphql");
const { all: query } = require("../lib/gql");
const { formatDate, sleep } = require("../lib/common");

module.exports = async () => {
	let total = 0;
	let list = [];
	let after = "";
	for (let i = 0; i < 10; i += 1) {
		await sleep(2048);
		// eslint-disable-next-line no-console
		console.log(`Processing no.${i + 1} request.`);
		// eslint-disable-next-line no-await-in-loop
		const result = await graphql({
			query,
			variables: i === 0 ? {} : { after },
		});
		after = result.data.search.pageInfo.endCursor;

		const { userCount, nodes } = result.data.search;
		total = userCount;
		list = list.concat(nodes);
	}
	return {
		total,
		date: formatDate("yyyy-MM-dd"),
		list,
	};
};
