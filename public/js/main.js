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
        let postDate = post.date.split(" ")[0].split("-")
        let date = new Date(postDate[0], postDate[1], postDate[2])
        let shortDay = date.toLocaleString('en-us', { weekday: 'short'});
        let shortMonth = date.toLocaleString('en-us', { month: 'short' });
        let shortYear = date.toLocaleString('en-us', { year: '2-digit' });

        let fullDate = shortDay + ", " + shortMonth + " " + shortYear;

        let item = `<div class="post">
                        <span class="post_date">${fullDate}</span>
                        <img src="${post.image}" alt="${post.title}" class="post_pic" />
                        <h2 class="post_title">${post.title}</h2>
                        <p class="post_description">${post.description}</p>
                    </div>`

        postOutput += item
    })


    let postContainer = document.getElementById("posts")
    postContainer.innerHTML = postOutput
}

renderPosts()