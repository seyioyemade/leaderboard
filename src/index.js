import './style.css';
import { api, getJSONData, postData } from './modules/get-post-data.js';
import { display } from './modules/display.js';

const user = document.querySelector('#user');
const score = document.querySelector('#score');
const form = document.querySelector('form');

const refreshBtn = document.querySelector('#refresh');

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