'use strict'

var red = document.getElementById('red');
var yellow = document.getElementById('yellow');
var green = document.getElementById('green');
var counter = 1;

function changeColor(node, onOff) {
	if (onOff === 'ON') {
		node.style.opacity = 1;
	}
	if (onOff === 'OFF') {
		node.style.opacity = 0.3;
	}
}

function cycleColors() {
	if (counter === 1) {
		changeColor(red, 'OFF');
		changeColor(green, 'ON');
		counter++;
	}else
	if (counter === 2) {
		changeColor(green, 'OFF');
		changeColor(yellow, 'ON');
		counter++;
	}else
	if(counter === 3) {
		changeColor(yellow, 'OFF');
		changeColor(red, 'ON');
		counter = 1;
	}
}

function startCycle(){
	cycleColors();
	setInterval(cycleColors, 5000);
}