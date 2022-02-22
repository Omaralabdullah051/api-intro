//add event handler on load data button
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data));
}
// add event handler on load user button
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data));
}
//function for display users data in ui
function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `name:${user.name} and email:${user.email} and phone-number:${user.phone}`;
        ul.appendChild(li);
    }
}
//add event handler on load posts
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data));
}
//function for display posts data in ui
function displayPosts(data) {
    const ul = document.getElementById('users');
    for (const post of data) {
        const li = document.createElement('li');
        li.innerText = `post title:${post.title}`;
        ul.appendChild(li);

    }
}