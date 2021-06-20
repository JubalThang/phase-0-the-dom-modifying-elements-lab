const element = document.createElement('div');
document.body.appendChild(element);
element.style.backgroundColor = '#27647B';
element.style.fontSize = '24px';
element.style.marginLeft = '30px';
element.style.lineHeight = 2;
element.className = 'dog';

const ul = document.createElement('ul');

for (let i=0;i<3;i++) {
    const li = document.createElement('li');
    li.innerHTML = (i+1).toString();
    ul.appendChild(li);
}

const li = document.getElementsByTagName('li');
ul.removeChild(ul.querySelector('li:nth-child(2)'));
console.log(ul);
element.appendChild(ul);
