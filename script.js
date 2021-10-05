const newFeed = document.querySelector('#div-display')
const climbList = document.querySelector('clmb-list')



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

    newPost.innerHTML = `<div class="post">
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
    newFeed.appendChild(newPost)
};



const addForm = document.getElementById("add");
addForm.addEventListener('submit', addPost);

const exList = document.getElementById('new-list');
exList.addEventListener('click', )