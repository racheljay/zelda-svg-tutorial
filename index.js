
// Helper function for drawing circles
function circle({ x, y, r, className }) {
	return `
    <circle
      cx="${x}"
      cy="${y}"
	  	r="${r}"
			class="${className}"
		/>`
}

// Helper function to draw a group of nested circles
function circleGroup({ x, y, r }) {
	// Keep circles in an array
	const circles = []

	/* 
	Here we draw a circle with a white background
	and no border. This hides elements behind the circle
	*/
	circles.push(circle({ x, y, r, className: 'fill' }))

	// How much gap between circles?
	const gap = 20

	/* 
	Draw several circles, making each one smaller than the previous
	Until we get to a radius of 0
	*/
	let circleSize = r
	while (circleSize > 0) {
		circles.push(circle({ x, y, r: circleSize, className: 'stroke' }))

		circleSize -= gap
	}

	// Return circles as a string
	return circles.join('')
}

document.querySelector('.pattern').innerHTML = circleGroup({
	x: 500,
	y: 500,
	r: 250
})