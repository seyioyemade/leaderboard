const ul = document.querySelector('ul');

export const refreshDom = () => {
  ul.innerHTML = '';
};

export const display = (user, score) => {
  const li = `<li>${user}: ${score}</li>`;
  ul.innerHTML += li;
};