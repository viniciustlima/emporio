require('dotenv').config()
const app = require('./app/app')

var PORT = process.env.PORT || 3333

app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}/`)
})