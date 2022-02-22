function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}
loadPosts();

function displayPosts(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}




//now we use fetch api allow web browser to make http post request to web server
function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'MY new post',
            body: 'This is my posts',
            userId: 1
        }),
        header: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(res => res.json())
        .then(data => console.log(data));
}

//API
//http methods get vs post
//////////////GET////////////|||////////////POST//////////////
//get requests can be catched; post requests are never cached
//remain in the browser history; don't remain in the browser history
//can be bookmarked ; cannot be bookmarked
//have data length restrictions;have no restrictions on data length




// confusion about these this and need to know
//crud operations
//rest api
//crud vs rest api
//http response status code 