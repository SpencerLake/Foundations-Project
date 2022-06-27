// Setting Variables ===========================================================
const newFeed = document.querySelector('#div-display')
const climbList = document.querySelector('#clmb-list')
const projectIdea = document.querySelector('#add')

const baseURL = `/api/posts`

const ideaCallback = ({ data: ideas }) => displayIdea(ideas)

const errCallback = err => console.log(err)

const getRandomIdea = () => axios.get(baseURL).then(ideaCallback).catch(errCallback)
const createPost = body => axios.post(baseURL, body).catch(errCallback)
const deletePost = id => axios.delete(`${baseURL}/${id}`).then(postsCallback).catch(errCallback)

    

// Post Submissions ===========================================================
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
    alert("Post created succesfully!")
}

// Code that defines the form and listens for when it is submitted =============
const addForm = document.getElementById("add");
addForm.addEventListener('submit', submitHandler);



// Code for ideas button =======================================================

// List of ideas
let ideas = [
    "Collapse",
    "Vindictive"
]
// Randomizes which idea will be prompted
const randomIdea = ideas[Math.floor(Math.random()*ideas.length)]

// Listener for when get idea button is clicked
const projIdea = document.getElementById('proj-idea')
projIdea.addEventListener('click', getIdea)

// Function that displays an idea
function getIdea(e) {
    e.preventDefault()
    
    const showIdea = document.createElement('p')
    showIdea.innerHTML = randomIdea

    projectIdea.appendChild(showIdea)

    console.log()
}