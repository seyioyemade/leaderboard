import { refreshDom, display, api } from '../index.js';

export const getJSONData = async () => {
  refreshDom();
  const response = await fetch(api);
  const jsonData = await response.json();

  jsonData.result.forEach((item) => {
    display(item.user, item.score);
  });
  
}