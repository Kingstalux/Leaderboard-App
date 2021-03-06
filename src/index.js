// import _ from 'lodash';
import './style.css';
import displayData from './script1.js';

const form = document.getElementById('form');

const getData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mTnreNhieKoISaSkVF7a/scores');

  const json = await response.json();

  const container = document.getElementById('container');
  container.innerHTML = '';
  const sortArr = json.result.sort((a, b) => b.score - a.score);
  sortArr.forEach((element) => {
    const name = element.user;
    const number = element.score;
    displayData(name, number);
  });
};

getData();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('number').value;

  const createGame = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
      method: 'post',
      body: JSON.stringify({
        name: 'Game Of Thrones character rankings',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    /* eslint-disable */
    const json = await response.json();
  }

  const postScores = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mTnreNhieKoISaSkVF7a/scores', {
      method: 'post',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    /* eslint-disable */
    const json = await response.json();
  }

  document.getElementById('name').value = '';
  document.getElementById('number').value = '';

  createGame();
  postScores();
});

document.getElementById('refresh').addEventListener('click', () => {
  getData();
});

