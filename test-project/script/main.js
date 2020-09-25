// JavaScript Docume
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
	let myName = prompt('请输入你的名字。');
localStorage.setItem('name',myName);
myHeading.textContent = 'My gardent is cool'+myName;}
if(!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'My garden is cool,'+storedName;
}
myButton.onclick = function(){
	setUserName();
}
