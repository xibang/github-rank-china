const content = `userCount,
pageInfo {
 hasNextPage
 hasPreviousPage
 startCursor
 endCursor
}
nodes {
  ... on User {
    login
    name
    location
    company
    avatarUrl(size: 256)
    createdAt
    followers {
      totalCount
    }
    following {
      totalCount
    }
    repositories {
      totalCount
    }
    organizations {
      totalCount
    }
  }
}`;

exports.all = `query ($after: String) {
  search (type: USER, query: "location:China sort:followers",first: 100, after: $after) {
    ${content}
 }
}`;

exports.language = language => `query ($after: String) {
  search (type: USER, query: "language:${language} location:China sort:followers",first: 100, after: $after) {
    ${content}
 }
}`;
