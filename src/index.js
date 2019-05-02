const path = require('path');
const { writeFileSync } = require('fs');
const all = require('./rank/all');
const { formatDate, nodeMap } = require('./lib/common');

const FIRSTDAY = '2019-05-01';

const main = async () => {
  const listAll = await all();
  const prev = (new Date() - 86400000 - (new Date().getHours() + 1) * 3600000) > new Date(FIRSTDAY) ? new Date() : new Date(FIRSTDAY);
  const datePrev = formatDate('yyyy-MM-dd', prev);
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const listPrev = require(`../data/${datePrev}.json`);
  listAll.list = nodeMap(listAll.list, listPrev.list);
  writeFileSync(path.resolve(__dirname, '../data/', `${listAll.date}.json`), JSON.stringify(listAll, null, 2), 'utf-8');
  writeFileSync(path.resolve(__dirname, '../data/0.json'), JSON.stringify(listAll, null, 2), 'utf-8');
};

main();
