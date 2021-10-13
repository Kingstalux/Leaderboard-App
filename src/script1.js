const displayData = () => {
  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;
  const p1 = document.createElement('p');
  p1.innerHTML = `${name}:`;
  const p2 = document.createElement('p');
  p2.innerHTML = number;
  const div = document.createElement('div');
  div.className = 'flex1';
  div.appendChild(p1);
  div.appendChild(p2);
  const container = document.getElementById('container');
  container.appendChild(div);
};

export default displayData;