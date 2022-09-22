exports.formatDate = (inputPattern, inputDate) => {
  const date = new Date(inputDate).toString() === 'Invalid Date' ? new Date() : new Date(inputDate);
  let pattern = inputPattern || 'yyyy-MM-dd hh:mm:ss';
  const y = date.getFullYear().toString();
  const o = {
    M: date.getMonth() + 1, // month
    d: date.getDate(), // day
    h: date.getHours(), // hour
    m: date.getMinutes(), // minute
    s: date.getSeconds() // second
  };
  pattern = pattern.replace(/(y+)/gi, (a, b) => y.substr(4 - Math.min(4, b.length)));
  /* eslint no-restricted-syntax:0,guard-for-in:0 */
  for (const i in o) {
    pattern = pattern.replace(new RegExp(`(${i}+)`, 'g'), (a, b) => (o[i] < 10 && b.length > 1 ? `0${o[i]}` : o[i]));
  }
  return pattern;
};

exports.nodeMap = (list, prev) =>
  list
    .filter((x) => x !== null)
    .map((x, index) => {
      const {
        followers: { totalCount: followers },
        following: { totalCount: following },
        repositories: { totalCount: repositories },
        organizations: { totalCount: organizations },
        ...info
      } = x;
      const lastIndex = prev.findIndex((node) => node.login === info.login);
      return {
        rank: index + 1,
        change: ~lastIndex ? index - lastIndex : 1000 - index,
        ...info,
        followers,
        following,
        repositories,
        organizations
      };
    });
