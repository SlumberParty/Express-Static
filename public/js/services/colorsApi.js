export const getColors = () => {
  return fetch('/api/v1/colors')
    .then(res => res.json());
};
