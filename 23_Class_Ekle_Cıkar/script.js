const icerik = document.querySelector("p");
console.log(icerik.classList);
icerik.classList.add("topheader");
icerik.classList.remove("error");

const pDegeri = document.querySelectorAll("p");
pDegeri.forEach(pdegeri => {
    if (pdegeri.textContent.includes("error")) {
        pdegeri.classList.add("error");
    }
    if (pdegeri.textContent.includes("success")) {
        pdegeri.classList.add("success");
    }
}
)