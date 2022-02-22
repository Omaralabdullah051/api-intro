function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data));
}

loadAlbums();

function displayAlbums(albums) {
    const container = document.getElementById('container');
    for (const album of albums) {
        const div = document.createElement('div');
        div.classList.add('album');
        div.style.textAlign = 'center';
        div.innerHTML = `
          <h3>${album.id}</h3>
          <p>${album.title}</p>
          `;
        container.appendChild(div);
    }
}