document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    // Light/Dark mode toggle
    modeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });

    const blogForm = document.getElementById('blogForm');
    const postsContainer = document.getElementById('postsContainer');

    if (blogForm) {
        // Handle blog form submission
        blogForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            const post = { title, content };
            let posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.push(post);
            localStorage.setItem('posts', JSON.stringify(posts));

            blogForm.reset();
        });
    }

    if (postsContainer) {
        // Render blog posts
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }
});