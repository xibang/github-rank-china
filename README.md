# github-rank-china

Github Rank of China Archives

## 说明

最新地址： <https://raw.githubusercontent.com/xibang/github-rank-china/master/data/0.json>

按日期查询地址： <https://raw.githubusercontent.com/xibang/github-rank-china/master/data/2019-05-09.json>

### 数据结构

```js
{
  total: 123644, // 中国总用户数
  date: '2019-05-09', // 保存日期
  list: [
    {
      rank: 1, // 排名
      change: 0, // 变化，负为下降
      login: 'willin', // 用户名
      name: 'Willin Wang', // 昵称
      location: 'Nanjing, China', // 地址
      company: '', // 公司
      avatarURL: 'https://xxxxxxx', // 头像地址
      createdAt: '2011-07-10T01:07:17Z', // 注册时间
      followers: 51215, // 被关注数，根据此字段进行排名
      following: 0, // 关注数
      repositories: 58, // 仓库数
      organizations: 0 // 组织数
    }
    // , ...
  ]
}
```

Since: 2019-05-09

## LICENSE

MIT
