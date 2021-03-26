
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/shuteiei/Documents/GithubPage/src/pages/index.js"))
}

