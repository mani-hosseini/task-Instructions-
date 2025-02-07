const btn = document.getElementById("btn");
const input = document.getElementById("generate");
const container = document.querySelector(".container");

async function fetchData() {
    try {
        if (input.value === "") {
            return alert("Please enter a valid input!");
        }
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input.value)}`;

        const existingDiv = container.querySelector(".img");
        if (existingDiv) {
            existingDiv.remove();
        }
        const div = document.createElement("div");
        div.classList.add("img");
        container.appendChild(div);


        const img = document.createElement('img');
        img.src = url;
        img.style.height = "200px";
        img.style.width = "200px";

        div.appendChild(img);
        input.value = "";
    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener("click", fetchData);
