const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bodyParserMW = bodyParser()
const hostname = 'localhost';
const port = 3000;

app.use(bodyParserMW)
app.get('/', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html')
    res.write('<form action="/" method="POST">')
    res.write('<input name="username">')
    res.write('<input name="age" type="number">')
    res.write('<input type="submit">')
    res.write('</form>')
    res.end()
})
app.post('/', bodyParserMW, (req, res, next) => {
console.log(req.body)
res.send('done')
})
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});