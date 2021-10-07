

const newFeed = document.querySelector('#div-display')
const climbList = document.querySelector('#clmb-list')
const projectIdea = document.querySelector('#add')

const baseURL = `/api/posts`

const postsCallback = ({ data: posts}) => displayPosts(posts)
const errCallback = err => console.log(err)

const getAllPosts = () => axios.get(baseURL).then(postsCallback).catch(errCallback)
const createPost = body => axios.post(baseURL, body).then(postsCallback).catch(errCallback)
const deletePost = id => axios.delete(`${baseURL}/${id}`).then(postsCallback).catch(errCallback)

    

function submitHandler(e) {
    e.preventDefault()

    let grade = document.querySelector('#grds')
    let time = document.querySelector('#tms')
    let name = document.querySelector('#title-add')
    let pic = document.querySelector('#photo-add')

    let bodyObj = {
        title: name.value,
        grade: grade.value,
        time: time.value,
        pic: pic.value
    }

    createPost(bodyObj)

    name.value = ''
    grade.value = ''
    time.value = ''
    pic.value = ''

    console.log('submit handled')
}

function creatingPost(post) {
    const postTemplate = document.createElement('div')
    postTemplate.classList.add('post-template')

    postTemplate.innerHTML = `<div class="post" id="${post.title}">
    <div id="post-title">${post.title}</div>
    <div id="post-contents">
        <div id="special-notice">
            <ul>
                <li>${post.grade}</li>
                <li>${post.time}</li>
            </ul>
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

    console.log('post created')

    const newList = document.createElement('div')
    newList.classList.add('list-item')

    newList.innerHTML = `
        <div class="list-item" href="#${post.title}">
            <div class="list-icon"></div>
            <h3 id="${post.title}-list">${post.title}</h4>
    `
    
    climbList.appendChild(newList)
}

function displayPosts(arr) {
    newFeed.innerHTML = ``
    climbList.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        creatingPost(arr[i])
    }
}

let ideas = [
    "Flying Dutchman",
    "Pineapple Epxress",
    "Bat Hang",
    "Behemoth",
    "Pinchy Hang",
    "Infinidy Toes",
    "Slippery Sloper",
    "Dank Dyno",
    "Flyin Squirell",
    "Crimp Ladder"
]

const randomIdea = ideas[Math.floor(Math.random()*ideas.length)]



function getIdea(e) {
    e.preventDefault()
    
    const showIdea = document.createElement('p')
    showIdea.innerHTML = randomIdea

    projectIdea.appendChild(showIdea)

    console.log()
}


const addForm = document.getElementById("add");
addForm.addEventListener('submit', submitHandler);

const exList = document.getElementById('flying-dutchman')
function scroll() {document.getElementById('example').scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});}

const listSnap = document.getElementById



const projIdea = document.getElementById('proj-idea')
projIdea.addEventListener('click', getIdea)

getAllPosts()