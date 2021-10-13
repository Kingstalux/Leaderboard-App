// import _ from 'lodash';
import './style.css';
import displayData from './script1.js'

document.getElementById('button').addEventListener('click', () => {
  displayData()
  document.getElementById('name').value = ''
  document.getElementById('number').value = ''
})