const newFeed = document.querySelector('#div-display')
const climbList = document.querySelector('#clmb-list')
const projectIdea = document.querySelector('#add')


// function deletePost(postId){
//     let post = document.getElementById('')
// } 


function addPost(e) {
    e.preventDefault();
    console.log("New post submitted")
    // axios.get("#")
    let grade = document.querySelector('#grds')
    let gradeSelect = grade.value
    let time = document.querySelector('#tms')
    let timeSelect = time.value
    let name = document.querySelector('#title-add')
    let nameSelect = name.value
    let pic = document.querySelector('#photo-add')
    let picSelect = pic.value

    console.log(grade.value)
    console.log(timeSelect)
    console.log(nameSelect)
    console.log(picSelect)

    const newPost = document.createElement('div')
    newPost.classList.add('post')

    newPost.innerHTML = `<div class="post" id="${nameSelect}">
            <div id="post-title">${nameSelect}</div>
            <div id="post-contents">
                <div id="special-notice">
                    <ul>
                        <li>${gradeSelect}</li>
                        <li>${timeSelect}</li>
                    </ul>
                </div>
                <div id="images">
                    <img class="pictures" src="${picSelect}"/>
                </div>
                <div id="empty"></div>
            </div>
        </div>
        `

    const newList = document.createElement('div')
    newList.classList.add('list-item')

    newList.innerHTML = `
        <div class="list-item" href="#${nameSelect}">
            <div class="list-icon"></div>
            <h3 id="${nameSelect}-list">${nameSelect}</h4>
    `
    
    climbList.appendChild(newList)
    newFeed.appendChild(newPost)
};

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
addForm.addEventListener('submit', addPost);

const exList = document.getElementById('flying-dutchman')
function scroll() {document.getElementById('example').scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});}
// exList.addEventListener('click', scroll)

const listSnap = document.getElementById


// const elementSnap = document.getElementsByTagName('a')
// elementSnap.add

const projIdea = document.getElementById('proj-idea')
projIdea.addEventListener('click', getIdea)