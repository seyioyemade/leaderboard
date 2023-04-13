import { display, refreshDom } from './display.js';

export const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3Y74LzLKCnfghIcTzPAQ/scores/';

export const getJSONData = async () => {
  refreshDom();
  const response = await fetch(api);
  const jsonData = await response.json();

  jsonData.result.forEach((item) => {
    display(item.user, item.score);
  });
};

export const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};