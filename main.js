const btn = document.querySelector(".dropdown button");
const dropdown = document.querySelector(".dropdown")

btn.onclick = () => {
    dropdown.classList.toggle("active");
}