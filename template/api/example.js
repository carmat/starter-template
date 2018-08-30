const app = require('express')()

module.exports = { path: '/api', handler: app }

app.get('/example', (req, res) => {
  res.send()
})
