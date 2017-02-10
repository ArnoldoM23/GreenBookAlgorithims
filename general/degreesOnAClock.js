// find how many degrees there are between the minute hand and hour hand on a clock.

function degreeOnAClock(time) {
	time = time.split(':');
	let minuteDegrees, hourDegree;
	minuteDegrees = Number(time[1]) * 6;
	hourDegree = (Number(time[0]) * 30) + (Number(time[1]) * .5);
	return Math.abs( minuteDegrees - hourDegree) > 180 ? 360 - Math.abs( minuteDegrees - hourDegree) : Math.abs( minuteDegrees - hourDegree);
}

console.log(degreeOnAClock('01:45'))