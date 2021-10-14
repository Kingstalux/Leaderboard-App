// import _ from 'lodash';
import './style.css';
import displayData from './script1.js';

const form = document.getElementById('form')

async function getData () {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mTnreNhieKoISaSkVF7a/scores')

  const json = await response.json()

  const container = document.getElementById('container')
  container.innerHTML = ''
  json.result.forEach(element => {
    let name = element.user
    let number = element.score
    displayData(name, number)
  });
}

  getData()


