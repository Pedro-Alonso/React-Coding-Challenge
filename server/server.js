const express = require('express')
const app = express()

// public path
const path = require('path')
const publicPath = path.join('client/build')
app.use(express.static(publicPath))

// port
const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
