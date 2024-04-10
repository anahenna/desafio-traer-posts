const postBtn = document.querySelector("#postBtn")
const postResult = document.querySelector("#postResult")

const displayData = (data) => {
    data.forEach((element) => {
        const li = document.createElement("li");
        const title = document.createElement("div");
        const body = document.createElement("div");

        title.textContent = element.title;
        body.textContent = element.body;
        title.style.fontWeight = "bold";

        li.appendChild(title);
        li.appendChild(body);
        postResult.appendChild(li);
    })
}



const getData = async (url) => {

    try {
        const response = await fetch(url)

        if (!response.ok) {
            console.log("La API falló")
            console.log("Código de error:", response.status)
            return
        }

        const data = await response.json()
        displayData(data)

    } catch (error) {
        console.log("error", error)
    }
}

postBtn.addEventListener("click", () => {
    const API_URL = "https://jsonplaceholder.typicode.com/posts"
    getData(API_URL)
})

