// document.addEventListener("DOMContentLoaded", () => {
//   const dot = document.querySelector(".moving-dot");
//   const border = document.querySelector(".info-container");
//   const borderWidth = border.offsetWidth;
//   const borderHeight = border.offsetHeight;
//   const perimeter = 2 * (borderWidth + borderHeight);

//   let position = 0;

//   function moveDot() {
//     position = (position + 1) % perimeter;
//     let x = 0,
//       y = 0;

//     if (position <= borderWidth) {
//       // Top side
//       x = position;
//       y = -2;
//     } else if (position <= borderWidth + borderHeight) {
//       // Right side
//       x = borderWidth - 24;
//       y = position - borderWidth;
//     } else if (position <= 2 * borderWidth + borderHeight) {
//       // Bottom side
//       x = 2 * borderWidth + borderHeight - position - 5;
//       y = borderHeight - 2;
//     } else {
//       // Left side
//       x = -24;
//       y = perimeter - position;
//     }

//     dot.style.transform = `translate(${x}px, ${y}px)`;
//     requestAnimationFrame(moveDot);
//   }

//   moveDot();
// });

//For text animation

var typed = new Typed(".auto-type", {
  strings: ["Programmer", "Web Designer", "Web Developer"],
  typeSpeed: 120,
  backSpeed: 100,
  loop: true,
});

// function hideElement(element) {
//   element.classList.add("hidden");
// }

// function toggleVisibility() {
//   const p1 = document.querySelector(".p1");
//   // const p2 = document.querySelector(".p2");
//   // const autoType = document.querySelector(".auto-type");

//   // Hide all elements first
//   hideElement(p1);
//   // hideElement(p2);
//   // hideElement(autoType);

//   // Show elements sequentially
//   setTimeout(() => showElement(p1), 500); // Show p1 immediately
//   // setTimeout(() => showElement(p2), 1000); // Show p2 after 0.5 seconds
//   // setTimeout(() => showElement(autoType), 1500); // Show autoType after 1 second
// }

// // Call toggleVisibility every 2 seconds
// setInterval(toggleVisibility, 3000); // Change to 3000 for 3 seconds interval

// // Initial call to show elements on page load
// document.addEventListener("DOMContentLoaded", toggleVisibility);

//************************* */

// Reload info-container every 4 seconds
// toggle visibility of info-container content

function toggleVisibility() {
  // const p1 = document.querySelector(".p1");
  const p1 = document.querySelector(".p1");
  // const autoType = document.querySelector(".auto-type");
  // p1.classList.add("hidden");

  // p1.classList.toggle(".p1");
  p1.classList.toggle(".p1");
  // autoType.classList.toggle(".auto-type");
}
//keeping interval of 3 s to loop the content.
setInterval(toggleVisibility, 3000);
// console.log(p1);
// toggleVisibility();

//********************************** */

//function to reload p1, p2, and auto-type
// let reloadingInfos = [];
// function reloadInfoContainerContent() {
//   const p1 = document.querySelector(".p1");
//   const p2 = document.querySelector(".p2");
//   const autoType = document.querySelector(".auto-type");
//   console.log(p1, p2, autoType);
//   reloadingInfos.push(p1, p2, autoType);

//   // reloadInfoContainerContent();
//   // console.log(reloadingInfos);

//   //Toggle Visibility
//   if (p1.style.display === "none") {
//     p1.style.display === "flex";
//   } else {
//     p1.style.display = "none";
//   }

//   setInterval(reloadInfoContainerContent, 2000);
// }

// Initially hide the info-container
// document.addEventListener("DOMContentLoaded", () => {
//   // const p1 = document.querySelector(".p1");
//   // p1.style.display = "none";

//   // Set an interval to reload the info-container's visibility every 4 seconds (4000 milliseconds)
//   setInterval(reloadInfoContainerContent, 2000);
// });

// // Function to reload the content of the info-container
// function reloadInfoContainer() {
//   const infoContainer = document.querySelector(".info-container");

//   // Toggle visibility
//   if (infoContainer.style.display === "none") {
//     infoContainer.style.display = "flex";
//   } else {
//     infoContainer.style.display = "none";
//   }
// }

// // Initially hide the info-container
// document.addEventListener("DOMContentLoaded", () => {
//   const infoContainer = document.querySelector(".info-container");
//   infoContainer.style.display = "none";

//   // Set an interval to reload the info-container's visibility every 4 seconds (4000 milliseconds)
//   setInterval(reloadInfoContainer, 3000);
// });
