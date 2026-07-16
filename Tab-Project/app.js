const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const headtext = document.querySelector(".headtext");
const paratext = document.querySelector(".paratext");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

var step1 = "Step 1";
var step2 = "Step 2";
var step3 = "Step 3";
var step1p =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint cumque quasi, amet impedit tempore necessitatibus iste. Ratione possimus perspiciatis sapiente, ex alias, ipsam sint beatae vel repellat aperiam corrupti porro et molestiae nobis itaque recusandae vitae atque! Reiciendis voluptatum molestiae autem consectetur corporis libero itaque quo mollitia quod! Corrupti doloribus veniam iusto soluta laborum saepe debitis reiciendis atque nihil eaque ducimus quo ullam ipsum, laboriosam velit vitae sint, eius molestiae unde, tempora hic ipsam? Cupiditate, beatae. Nostrum eos, id velit nisi libero exercitationem, et fugiat assumenda mollitia debitis deleniti, illum iusto. Officiis, ratione ex? Magni, impedit vel. Quam, eaque.";
var step2p =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae doloremque enim deleniti voluptatum necessitatibus, facilis et quas, quasi magni obcaecati iusto ipsam ipsum amet autem labore dignissimos accusantium dolorem perspiciatis non harum, alias vel a asperiores? Qui amet tempora mollitia quos, facilis debitis nemo praesentium, optio facere nostrum, eum totam magnam quasi laborum sint repellendus quibusdam vero? Ipsum explicabo officiis culpa delectus quasi cumque saepe voluptates accusantium voluptatem omnis iste, sequi beatae quae dolor vero nostrum at amet eum dolores ut. Autem velit eius, libero adipisci dolore harum accusantium ipsum, voluptate ad recusandae vitae blanditiis? Harum nihil molestiae cum!";
var step3p =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, asperiores magnam? In expedita laudantium magnam ratione alias minus nemo incidunt, dignissimos architecto placeat corporis molestiae labore vitae ullam laborum ut culpa eaque officiis, blanditiis sunt fugit ex? Neque quod mollitia delectus ipsa? Dolore veritatis, tenetur laudantium possimus unde debitis enim est illum, ea distinctio quod itaque quaerat ex sint eum optio in saepe labore sunt odit? Dolore, iusto! Ducimus sint laudantium consectetur. Velit facere culpa excepturi ad, quae distinctio iure incidunt. Odio alias laboriosam unde quo repudiandae corporis laborum quaerat asperiores minima quis in nam maxime recusandae iure, provident a?";

function typeText(text) {
  paratext.textContent = "";
  let i = 0;

  const timer = setInterval(() => {
    paratext.textContent += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(timer);
    }
  }, 20);
}
one.addEventListener("change", () => {
  img1.style.scale = 1;
  img1.style.transform = "translateX(100%)";
  img2.style.scale = 0.8;
  img2.style.transform = "translateX(-100%)";
  img3.style.scale = 0.8;
  img3.style.transform = "translateX(-20%)";

  img1.style.zIndex = 1;
  img2.style.zIndex = 0;
  img3.style.zIndex = 0;

  typeText(step1p);
});

two.addEventListener("change", () => {
  img1.style.scale = 0.8;
  img1.style.transform = "translateX(20%)";
  img2.style.scale = 1;
  img2.style.transform = "translateX(0%)";
  img3.style.scale = 0.8;
  img3.style.transform = "translateX(-20%)";

  img1.style.zIndex = 0;
  img2.style.zIndex = 1;
  img3.style.zIndex = 0;
  typeText(step2p);
});

three.addEventListener("change", () => {
  img1.style.scale = 0.8;
  img1.style.transform = "translateX(20%)";
  img2.style.scale = 0.8;
  img2.style.transform = "translateX(100%)";
  img3.style.scale = 1;
  img3.style.transform = "translateX(-100%)";

  img1.style.zIndex = 0;
  img2.style.zIndex = 0;
  img3.style.zIndex = 1;
  headtext.textContent = step3;
  typeText(step3p);
});
