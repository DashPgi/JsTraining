const iframe = document.getElementById("showurlcontent");
const openclosebtn = document.querySelector(".openclosebtn");
const socialmedialist = document.querySelector(".Social-media-List");
const Medias = document.querySelectorAll(".Media");

openclosebtn.addEventListener("click", () => {
  socialmedialist.classList.toggle("active");
});
Medias.forEach((e) => {
  e.addEventListener("click", () => {
    iframe.src = e.getAttribute("value");
    const notification = document.getElementById("notif");
    notification.textContent = "If this frame doesn't show any content, double-click to open it."
  });
  e.addEventListener("dblclick", () => {
    const url = e.getAttribute("value");
    window.open(url, "_blank");
  });
});
