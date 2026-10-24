
const inputSearch = document.getElementById("inputSearch");
const hasilInput = document.getElementById("hasilInput");
const formSearch = document.getElementById("formSearch");


inputSearch.addEventListener("input", function () {
    hasilInput.textContent = inputSearch.value;
    hasilInput.style.display = inputSearch.value.trim() === "" ? "none" : "block";
});

formSearch.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Selamat Mengerjakan");
});

const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", function () {
    alert("Selamat Mengerjakan");
});
