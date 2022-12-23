/**
 * Using Cookies
 */
const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Paths available are '/set-cookies', '/get-cookies' and '/delete-cookies'. ")
})

app.get('/set-cookies', (req, res) => {
    res.cookie("cookieKey", "cookieValue")
    res.send("Cookies Set")
})

app.get('/get-cookies', (req, res)=>{
    res.send(req.cookies)
})

app.get('/delete-cookies', (req, res)=>{
    res.clearCookie("cookieKey")
    res.send("Cookie deleted!")
})

app.listen(port, (req, res) => {
    console.log("Listening on port ", port)
})