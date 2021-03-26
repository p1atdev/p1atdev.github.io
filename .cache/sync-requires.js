
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/shuteiei/Documents/GithubPage/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/shuteiei/Documents/GithubPage/src/pages/index.js"))
}

