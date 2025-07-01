const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const popup = document.getElementById('videoPopup');
const closePopup = document.getElementById('closePopup');

let noBtnMoved = false;

function moveNoButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const padding = 20;

  const maxLeft = window.innerWidth - btnWidth - padding;
  const maxTop = window.innerHeight - btnHeight - padding;

  const randomLeft = Math.random() * maxLeft + padding / 2;
  const randomTop = Math.random() * maxTop + padding / 2;

  // Only set position:fixed the first time
  if (!noBtnMoved) {
    noBtn.style.position = 'fixed';
    noBtn.style.transform = ""; // Remove any transform
    noBtnMoved = true;
  }
  noBtn.style.left = `${randomLeft}px`;
  noBtn.style.top = `${randomTop}px`;
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

yesBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});