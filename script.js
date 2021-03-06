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

// Hàm update lại toàn bộ các circle mỗi lần click
function update() {
  circles.forEach((circle, i) => {
    if (i <= currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  //Tạo progress bar chạy màu
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
  //Bật tắt nút "Prev" & Next
  if (currentActive === 0) {
    prev.disabled = true;
  } else if (currentActive === circles.length - 1) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
