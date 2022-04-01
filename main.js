const items = document.querySelectorAll("#Model3");
const items2 = document.querySelectorAll(".box");
const items3 = document.querySelectorAll("#svg3");
console.log(items);
console.log(items2);
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  console.log(rect);
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
const run = () =>
  items.forEach((item) => {
    item.classList.add("show");
  });
const run3 = () =>
  items3.forEach((item) => {
    item.classList.add("show");
  });
const run2 = () =>
  items2.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });

// Events
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);
window.addEventListener("load", run2);
window.addEventListener("load", run3);
window.addEventListener("resize", run2);
window.addEventListener("scroll", run2);

var btnContainer = document.getElementById("sidemenuitems");
var btns = btnContainer.getElementsByClassName("sidemenuitem");
console.log(btnContainer);
console.log(btns);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active");
    this.className += " active";
  });
}
