const root = document.getElementById('root');
const colorsList = document.createElement('ul');

fetch('/api/v1/colors')
  .then(res => res.json());
  .then(colors => {
    colors.forEach(color => {
      const li = document.createElement('li');
      li.textContent(`${color.name} - ${color.hex} - R:${color.r} G:${color.g} B:${color.b}`)
      colorsList.appendChild(li);
    });
  });

  root.appendChild(colorsList);