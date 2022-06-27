// Defining Variables ===========================================================================
const newFeed = document.querySelector('#div-display')
const climbList = document.querySelector('#clmb-list')
const projectIdea = document.querySelector('#add')
const baseURL = `/api/posts`
const displayArea = document.getElementsByClassName("post-template")

const postsCallback = ({ data: posts}) => displayPosts(posts)
const errCallback = err => console.log(err)

const getAllPosts = () => axios.get(baseURL)
        .then(postsCallback).catch(errCallback)
const deletePost = id => axios.delete(`${baseURL}/${id}`)
        .then(cleanPosts)
        // .then(setTimeout(() =>{postsCallback},500))
        .then(postsCallback)
        .catch(errCallback)



// Calling and creating template for each post ==================================================

// Function that defines the template of each post
function creatingPost(post) {
    const postTemplate = document.createElement('div')
    postTemplate.classList.add('post-template')

    postTemplate.innerHTML = `<div class="post" id="${post.title}">
    <div id="post-title">${post.title}</div>
    <div id="post-contents">
        <div id="special-notice">
                <p>${post.grade}</p>
                <p>${post.time}</p>
        </div>
        <div id="images">
            <img class="pictures" src="${post.pic}"/>
        </div>
        <div id="empty">
            <button class="delete-button" onclick="deletePost(${post.id})">X</button>
        </div>
    </div>
    </div>
    `

    newFeed.appendChild(postTemplate)
}

// Function that calls the array of posts and creates each one to be
// displayed on front page.
function displayPosts(arr) {
    arr.forEach((post) => {
        creatingPost(post)
    })
}

function cleanPosts() {
    window.location.reload()
}

// Calls the function to populate page with posts
getAllPosts()