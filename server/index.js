const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const ctrl = require('./controller.js')

app.use(express.json())
app.use(cors())

app.use(express.static('client'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/api/posts', ctrl.getPosts)
app.post('/api/posts', ctrl.createPost)
app.delete('/api/posts/:id', ctrl.deletePost)

const port = process.env.PORT || 4500

app.listen(port, console.log(`You're up and running on ${port}`))