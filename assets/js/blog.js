const blogPosts= localStorage.getItem("blogPosts") || []

function displayBlogPosts() {
console.log(blogPosts);
}

displayBlogPosts()