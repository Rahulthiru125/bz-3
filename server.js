const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static(__dirname + '/dist/ngproject1'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dist/ngproject1/index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))