function addPost(e) {
    e.preventDefault();
    console.log("New post submitted")
    // axios.get("#")
};

const addForm = document.getElementById("add");
addForm.addEventListener('submit', addPost);