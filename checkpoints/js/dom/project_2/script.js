document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const btn = document.getElementById('btn-change-color');
  
    // create random color
    // source : https://stackoverflow.com/questions/1484506/random-color-generator
    const generateColor = () => {
      const caracters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += caracters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
  
    // click button event 
    btn.addEventListener('click', () => {
      const randomColor = generateColor();
      box.style.backgroundColor = randomColor;
    });
  });
  