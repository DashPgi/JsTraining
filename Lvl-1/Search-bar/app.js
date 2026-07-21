const searchicon = document.getElementById("icon");
const searchbar = document.querySelector(".searchbar");
const searchinput = document.getElementById("textsearch");

searchicon.addEventListener("click", () => {
    searchbar.classList.toggle("extend");
});

searchinput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      //encodeURIComponent baraye encode kardan search ma baraye url google mishe !
        const text = encodeURIComponent(event.target.value);

        if (text.trim() !== "") {
            window.location.href = 
            `https://www.google.com/search?q=${text}`;
        }
    }
});