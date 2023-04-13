import './style.css';
/*eslint-disable*/ 
import { getJSONData, postData } from './modules/get-post-data.js';

export const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3Y74LzLKCnfghIcTzPAQ/scores/';
const user = document.querySelector('#user');
const score = document.querySelector('#score');
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const refreshBtn = document.querySelector('#refresh');

export const display = (user, score) => {
  const li = `<li>${user}: ${score}</li>`;
  ul.innerHTML += li;
};

export const refreshDom = () => {
  ul.innerHTML = '';
};

refreshBtn.addEventListener('click', getJSONData);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if ((user.value.length > 0) && (score.value.length > 0)) {
    postData(api, { user: user.value, score: score.value }).then(() => {
      display(user.value, score.value);
      user.value = '';
      score.value = '';
    });
  }
});

getJSONData();
