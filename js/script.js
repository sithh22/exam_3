document.getElementById('fetchPosts').addEventListener('click', fetchPosts);

function fetchPosts() {
    const postCountInput = document.getElementById('postCount');
    const postCount = postCountInput.value;

    if (postCount === '' || postCount <= 0) {
        alert('Будь ласка, введіть коректну кількість постів.');
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postCount}`)
        .then(response => response.json())
        .then(posts => displayPosts(posts))
        .catch(error => console.error('Помилка:', error));
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;

        const postBody = document.createElement('p');
        postBody.textContent = post.body;

        postCard.appendChild(postTitle);
        postCard.appendChild(postBody);
        postsContainer.appendChild(postCard);
    });
}
