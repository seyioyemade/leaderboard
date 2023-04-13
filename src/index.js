import './style.css';

const api = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PDDoW8WVMif8q1Kc2p/scores/";
const user = document.querySelector('#user');
const score = document.querySelector('#score');
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const refreshBtn = document.querySelector('#refresh');

const display = (user, score) => {
  const li = `<li>${user}: ${score}</li>`;
  ul.innerHTML += li;
}

const refreshDom = () => ul.innerHTML = '';

const getJSONData = async () => {
  refreshDom();
  const response = await fetch(api);
  const jsonData = await response.json();

  jsonData.result.forEach((item) => {
    display(item.user, item.score);
  });
  
}

refreshBtn.addEventListener('click', getJSONData);

const postData = async (url = "", data = {}) => {

  const response = await fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  });
  return response.json(); 
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  postData(api, {user: user.value, score: score.value}).then(() => {
  display(user.value, score.value)
  user.value = '';
  score.value = '';
});
});









