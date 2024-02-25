const blogSpecificContainer = document.querySelector(".blogSpecific");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("47");
const url = "https://linestudent.no/project-exam-1/wp-json/wp/v2/posts/" + 47;
console.log(url);

console.log(params);

async function getBlog() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHTML(details);
    }

    catch (error) {
        console.log(error);
        blogSpecificContainer.innerHTML = displayError();

    }
}

getBlog();

function createHTML(specificBlog) {
    blogSpecificContainer.innerHTML = `<h2>${specificBlog.title.rendered}</h2>
                                        <div class="blogSpecific"${specificBlog.content.rendered}</div>`

}


