const container = document.getElementById("image-container");
const imageUrl = "404.webp"; // Replace with your image URL

function updateCubes() {
  // Get the container's size based on the viewport (e.g., 80% of the viewport width)
  const containerSize = Math.min(
    window.innerWidth * 0.8,
    window.innerHeight * 0.8
  );
  const cubeSize = containerSize / 4; // Example: Divide the container into a 4x4 grid of cubes

  // Clear the container for resizing
  container.innerHTML = "";

  // Style the container
  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;
  container.style.position = "relative";
  container.style.perspective = "1000px"; // Adds depth to the 3D effect

  // Calculate the number of cubes per row and column
  const cubesPerRow = containerSize / cubeSize;
  const totalCubes = cubesPerRow * cubesPerRow;

  for (let i = 0; i < totalCubes; i++) {
    const cube = document.createElement("div");
    const front = document.createElement("div");
    const back = document.createElement("div");

    // Calculate position for each cube
    const posX = -(i % cubesPerRow) * cubeSize;
    const posY = -Math.floor(i / cubesPerRow) * cubeSize;

    // Set styles for the cube
    cube.style.width = `${cubeSize}px`;
    cube.style.height = `${cubeSize}px`;
    cube.style.position = "absolute";
    cube.style.transformStyle = "preserve-3d";
    cube.style.transition = "transform 0.5s";
    cube.style.transform = `translate(${(i % cubesPerRow) * cubeSize}px, ${
      Math.floor(i / cubesPerRow) * cubeSize
    }px)`;

    // Set styles for the front side of the cube
    front.style.width = "100%";
    front.style.height = "100%";
    front.style.position = "absolute";
    front.style.backfaceVisibility = "hidden";
    front.style.backgroundImage = `url(${imageUrl})`;
    front.style.backgroundPosition = `${posX}px ${posY}px`;
    front.style.backgroundSize = `${containerSize}px ${containerSize}px`; // Make sure the image fits the container

    // Set styles for the back side of the cube
    back.style.width = "100%";
    back.style.height = "100%";
    back.style.position = "absolute";
    back.style.backfaceVisibility = "hidden";
    back.style.backgroundColor = "#333"; // Change this to an image or color of your choice
    back.style.transform = "rotateY(180deg)";

    // Append front and back to the cube
    cube.appendChild(front);
    cube.appendChild(back);
    container.appendChild(cube);
  }

  // Add hover effect to the container
  container.addEventListener("mouseover", () => {
    Array.from(container.children).forEach((cube) => {
      cube.style.transform += " rotateY(180deg)";
    });
  });

  container.addEventListener("mouseout", () => {
    Array.from(container.children).forEach((cube) => {
      cube.style.transform = cube.style.transform.replace(
        " rotateY(180deg)",
        ""
      );
    });
  });
}

// Call the updateCubes function initially and on window resize
updateCubes();
window.addEventListener("resize", updateCubes);
