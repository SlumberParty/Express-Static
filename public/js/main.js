import { getColors } from './services/colorsApi.js';

const main = document.getElementById('root');

const colorsList = document.createElement('ul');

getColors()
  .then(colors => {
    colors.forEach(color => {
      const li = document.createElement('li');
      li.textContent = `${color.name} - ${color.hex} - R:${color.r} G:${color.g} B:${color.b}`;

      colorsList.appendChild(li);
    });
  });


main.appendChild(colorsList);
