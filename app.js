document.addEventListener("DOMContentLoaded", function () {
  const cubeContainer = document.getElementById("cube-container");
  const cube = document.getElementById("cube");

  // Add event listeners for mouse enter and leave
  cubeContainer.addEventListener("mouseenter", function () {
    cube.classList.add("flip");
  });

  cubeContainer.addEventListener("mouseleave", function () {
    cube.classList.remove("flip");
  });
});
