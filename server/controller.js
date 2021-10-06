const {readSync} = require('fs')
const postList = require('./posts.json')
const ideaList = require('./ideas.json')
let postId = 2

module.exports = {

    getPosts: (req,res) => {
        res.status(200).send(postList)
    },

    createPost: (req,res) => {
        const {title, grade, time, pic} = req.body
        let newPost = {
            id: postId,
            title,
            grade,
            time,
            pic
        }
        if (!title || !grade || !time || !pic){
            res.status(400).send('Missing all requirements for post!')
        } else {
            postList.push(newPost)
            postId++
            return res.status(200).send(postList)
        }
    },

    deletePost: (req,res) => {
        const {id} = req.params
        let index = postList.findIndex(p => p.id === +id)
        postList.splice(index, 1)
        res.status(200).send(postList)
    }

}