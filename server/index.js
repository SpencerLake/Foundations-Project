const express = require('express')
const cors = require('cors')

const app = express()
const ctrl = require('./controller.js')

app.use(express.json())
app.use(cors())

app.get('/api/posts', ctrl.getPosts)
app.post('/api/posts', ctrl.createPost)
app.delete('/api/posts/:id', ctrl.deletePost)

const port = 4500

app.listen(port, console.log(`You're up and running on ${port}`))