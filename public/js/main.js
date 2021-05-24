let baseUrl = "https://quantasy-sandbox.s3.amazonaws.com/front-end-coding-exercise";

async function getPosts() {
    try {
        let res = await fetch(baseUrl + '/posts.json')
        console.log(res)
        return res.json()
    } catch(error) {
        console.log(error)
    }
}



async function renderPosts() {
    let posts = await getPosts()
    console.log(posts)
    let postOutput = '';

    posts.forEach(post => {
        console.log(post.title)
        let item = `<div class="post">
                        <img src="${post.image}" alt="${post.title}" class="post_pic" />
                        <h2 class="post_title">${post.title}</h2>
                        <div class="post_description">${post.description}</div>
                    </div>`

        postOutput += item
    })


    let postContainer = document.getElementById("posts")
    postContainer.innerHTML = postOutput
}

renderPosts()