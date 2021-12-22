const path = require('path');
const { writeFileSync } = require('fs');
const all = require('./rank/all');
const { formatDate, nodeMap } = require('./lib/common');

const main = async () => {
  const listAll = await all();
  const prev = new Date() - 864e5;
  const datePrev = formatDate('yyyy-MM-dd', prev);
  let listPrev = { total: 0, date: datePrev, list: [] };
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    listPrev = require(`../data/${datePrev}.json`);
  // eslint-disable-next-line no-empty
  } catch (e) { }
  listAll.list = nodeMap(listAll.list, listPrev.list);
  writeFileSync(path.resolve(__dirname, '../data/', `${listAll.date}.json`), JSON.stringify(listAll, null, 2), 'utf-8');
  writeFileSync(path.resolve(__dirname, '../data/0.json'), JSON.stringify(listAll, null, 2), 'utf-8');
};

main();
