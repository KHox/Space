class Step {
  constructor(space, x, y, color) {
    let step = document.createElement('div');
    step.className = 'step';
    step.style.backgroundColor = color;
    step.style.top = `${y}px`;
    step.style.left = `${x}px`;
    step.style.opacity = 1;
    space.append(step);
    const TIME = 3000;
    let timerId = setInterval(() => {
      step.style.opacity -= 0.01;
      if (step.style.opacity < 0.01) {
        clearInterval(timerId);
        step.remove();
      }
    }, TIME / 100);
  }
}