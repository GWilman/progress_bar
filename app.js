window.addEventListener('DOMContentLoaded', () => {
  console.log('JS Loaded');

  const body = document.querySelector('body');
  const progress = document.querySelector('.progress');
  const figure = document.querySelector('.amount p');
  const buttons = document.getElementsByTagName('button');
  const balance = document.getElementById('remaining');
  const balanceCont = document.querySelector('.balance-container p');

  const btns = [].slice.apply(buttons);

  btns.forEach(button => {
    button.addEventListener('click', updateProgress);
  });

  let progWidth = 25;

  // Animate progress
  function updateProgress(e) {
    if (progWidth + parseInt(e.target.id) > 100) return false;
    progWidth += parseInt(e.target.id);
    body.style.background = `rgba(48, 255, 24, ${progWidth/100})`;
    progress.style.width = `${progWidth}%`;
    figure.style.width = `${progWidth+1}%`;
    figure.innerHTML = `£${progWidth}`;
    if (progWidth === 100) {
      balanceCont.innerHTML = 'You have reached the target!';
    } else {
      balance.innerHTML = `${100 - progWidth}`;
    }
  }

  // Animate starting progress on page load
  setTimeout(() => {
    body.style.background = `rgba(48, 255, 24, ${progWidth/100})`;
    progress.classList.remove('progress-load');
    figure.classList.remove('progress-load');
    progress.style.width = `${progWidth}%`;
    figure.style.width = `${progWidth+1}%`;
    figure.innerHTML = `£${progWidth}`;
    balance.innerHTML = `${100 - progWidth}`;
  }, 100);

});
