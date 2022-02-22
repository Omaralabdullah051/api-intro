function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data));
}
loadComments();
//fetch api allows web browser to make http request to web server
//now we use fetch api allows web browser to make http get request to web server

function displayComments(comments) {
    const container = document.getElementById('container');
    for (const comment of comments) {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
       <h1>${comment.id}</h1>
       <h2>${comment.name}</h2>
       <h3>${comment.email}</h3>
       <p>${comment.body}</p>
       `;
        container.appendChild(div);
    }
}