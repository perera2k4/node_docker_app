const http = require('http')
const host = "0.0.0.0"
const port = 3000
const horaAtual = new Date()

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({timedate: horaAtual.toISOString()}))
})

server.listen(port, host, () => {
    console.log(`Servidor iniciado em http://${host}:${port}`)
})