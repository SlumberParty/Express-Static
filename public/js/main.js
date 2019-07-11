import { getColors } from './services/colorsApi.js';

const main = document.getElementById('root');

const colorsList = document.createElement('ul');

getColors()
  .then(colors => {
    colors.forEach(color => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');

      li.textContent = `${color.name} - ${color.hex} - R:${color.r} G:${color.g} B:${color.b}`;

      anchor.href = `/colors.html?color=${color.name}`;
      anchor.appendChild(li);
      colorsList.appendChild(anchor);
    });
  });


main.appendChild(colorsList);
