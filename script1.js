const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 0;
next.addEventListener('click', () => {
  currentActive++;

  if (currentActive >= circles.length) {
    currentActive = circles.length - 1;
  }
  console.log(currentActive);
  update();
});
prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 0) {
    currentActive = 0;
  }
  update();
});

function update() {
  circles.forEach((circle, i) => {
    if (currentActive >= i) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
  if (currentActive === circles.length - 1) {
    next.disabled = true;
  } else if (currentActive === 0) {
    prev.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
