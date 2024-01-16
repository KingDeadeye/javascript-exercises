const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para1 = document.createElement('p');
para1.textContent = 'Hey I\'m red!';
para1.style.cssText = 'color:red ;';
container.appendChild(para1);


const head3 = document.createElement('h3');
head3.style.cssText='color:blue;';
head3.textContent=`I'm a blue h3`;
container.appendChild(head3);

const divv=document.createElement('div');
divv.innerHTML=`<h1>I'm in a div</h1> <p> "MEE TOO" </p>`;
divv.style.cssText=`border:black; background-color:pink;`;
container.appendChild(divv);


const h1ElementInsideDiv = container.querySelector('div > h1');
h1ElementInsideDiv.style.cssText=`color:blue;`;



const funkyfunction = (music,iswhiteboy) =>{

}

