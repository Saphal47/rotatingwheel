// index.js (Correct the function name here as well)
let isSpinning = false;

function toggleRotation() {
  isSpinning = !isSpinning;
  const disc = document.getElementById('rotating-disc');
  disc.classList.toggle('spin', isSpinning);
  disc.classList.toggle('reversespin', !isSpinning);
}
