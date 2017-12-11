var noviStatusInput= document.getElementById('novi-status');
var noviStatusButton= document.getElementById('novi-status-btn');

var statusDiv, prviStatus, noviDiv, noviParagraf, noviStatus;

noviStatusButton.onclick= function (e){
	e.preventDefault();


statusDiv= document.getElementById('statusi');

prviStatus=document.getElementsByClassName('statusi')[0];
noviStatus=document.createTextNode(noviStatusInput.value);
noviDiv=document.createElement('div');
noviDiv.classList.add('status');
noviParagraf=document.createElement('p');
noviParagraf.appendChild(noviStatus);
noviDiv.appendChild(noviParagraf);
statusDiv.insertBefore(noviDiv,prviStatus);
}