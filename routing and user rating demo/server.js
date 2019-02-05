const express = require('express')
const app = express()
const port = 8090
app.use(express.static("."));
app.get('/', (req, res) => res.redirect('index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))