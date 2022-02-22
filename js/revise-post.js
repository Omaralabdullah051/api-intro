function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}
loadPosts();

function displayPosts(posts) {
    const container = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.id}</h3>
        <h4>${post.title}</h4>
        <p>${post.body}</P>
        `;
        container.appendChild(div);
    }
}