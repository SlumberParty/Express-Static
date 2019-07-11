const search = new URLSearchParams(window.location.search);
const name = search.get('name');

const root = document.getElementById('root');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');

fetch(`/api/v1/colors/${name}`)
  .then(res => res.json())
  .then(color => {
    h1.textContent = `${color.name}`;
    h2.textContent = `HEX: ${color.hex}, RGB: ${color.r} - ${color.g} - ${color.b}`;
  });

root.appendChild(h1);
root.appendChild(h2);
