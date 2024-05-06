//DEPENDENCIES
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

//SERVES CLIENT SIDE REACT
app.use(express.static(path.join(__dirname, 'dist')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/dist/index.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}! :D`)
})