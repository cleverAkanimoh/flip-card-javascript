document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("puzzle-container");
  const imageUrl = "404.webp"; // Replace with your image URL
  const rows = 4; // Number of rows
  const cols = 4; // Number of columns

  const pieceSize = 100; // Percentage for each piece
  const totalPieces = rows * cols;

  for (let i = 0; i < totalPieces; i++) {
    const piece = document.createElement("div");
    piece.className = "puzzle-piece";

    const front = document.createElement("div");
    front.className = "front";
    const frontImg = document.createElement("img");
    frontImg.src = imageUrl;
    front.appendChild(frontImg);

    const back = document.createElement("div");
    back.className = "back";
    const backImg = document.createElement("img");
    backImg.src = imageUrl;
    back.appendChild(backImg);

    piece.appendChild(front);
    piece.appendChild(back);

    // Positioning each piece
    const row = Math.floor(i / cols);
    const col = i % cols;

    piece.style.width = `${100 / cols}%`;
    piece.style.height = `${100 / rows}%`;
    piece.style.top = `${row * (100 / rows)}%`;
    piece.style.left = `${col * (100 / cols)}%`;
    piece.style.backgroundPosition = `-${col * (100 / cols)}% -${
      row * (100 / rows)
    }%`;

    container.appendChild(piece);
  }
});
