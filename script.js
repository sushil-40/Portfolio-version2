// // Function to debounce the window resize event
// function debounce(func, delay) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(func, delay);
//   };
// }

// // Function to check screen width and scroll to top if <= 768px
// function checkScreenWidth() {
//   if (window.innerWidth <= 768) {
//     window.scrollTo(0, 0);
//   }
// }

// // Call the function on page load
// window.onload = checkScreenWidth;

// // Add a debounced event listener for window resize
// window.addEventListener("resize", debounce(checkScreenWidth, 250));

//Progress Bar implementation

let number = document.getElementById("number");
let counter = 0;

setInterval(() => {
  if (counter == 85) {
    clearInterval;
  } else {
    counter += 1;
    number.innerHTML = `${counter}%`;
  }
}, 30);

var typed = new Typed(".auto-type", {
  strings: ["Programmer", "Web Designer", "Web Developer"],
  typeSpeed: 120,
  backSpeed: 100,
  loop: true,
});
