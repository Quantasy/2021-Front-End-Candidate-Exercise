let baseUrl = "https://quantasy-sandbox.s3.amazonaws.com/front-end-coding-exercise";

async function getPosts() {
    try {
        let res = await fetch(baseUrl + '/posts.json');
        return res.json();
    } catch(error) {
        console.log(error);
    }
}



async function renderPosts() {
    let posts = await getPosts();
    let postOutput = '';

    posts.forEach(post => {
        let date = new Date(post.date.split(" ")[0].split("-"));
        let dd = date.toLocaleString('en-us', { weekday: 'short'});
        let mm = date.toLocaleString('en-us', { month: 'short' });
        let yy = date.toLocaleString('en-us', { year: '2-digit' });
        let fullDate = dd + ", " + mm + " " + yy;

        let item = `<a href="${post.url}" class="post" >
                        <span class="post_date">${fullDate}</span>
                        <img src="${post.image}" alt="${post.title}" class="post_pic" />
                        <h2 class="post_title">${post.title}</h2>
                        <p class="post_description">${post.description}</p>
                    </a>`;

        postOutput += item;
    })


    let postContainer = document.getElementById("posts");
    postContainer.innerHTML = postOutput;
}

renderPosts();