//Inputs
//====================================
var highScore = d3.select('body').selectAll('.highscore').select('span')[0][0].innerText
var xEn;
var yEn;
var xUs;
var yUs;

//attributes for board, svg container and circles
var boardAttr = [
{"x_axis": 1200, "y_axis": 700, "background-color": "white"}];

var jsonCirclesEnemy =[
{ "x_axis": 1200, "y_axis": 700, "radius": 15, "color" : "black" }];


var jsonCirclesUser =[
{ "x_axis": 1200, "y_axis": 700, "radius": 15, "color" : "red" }];


//====================================
//Board properties
var board = d3.select('body').selectAll('.board')
.data(boardAttr)
.style('height', function(d) { return d.y_axis + 'px'})
.style('width',function(d) { return d.x_axis + 'px'})
.style('background-color', 'white')
.style('border', '3px solid black')
.style('margin-right', 'auto')
.style('margin-left', 'auto')


//====================================
//svg container

var svgContainer = d3.select("body").selectAll('.board').append("svg")
.attr('class', 'svgContainer')
.attr('width', function(d) { return d.x_axis})
.attr('height', function(d) { return d.y_axis})
.style('margin-right', 'auto')
.style('margin-left', 'auto')


//====================================
//creating enemy circles

for (var i = 0; i < 25; i++) {
	var enCircles = svgContainer.append('circle')
	.data(jsonCirclesEnemy)
	.attr('id','circ'+i)
	.attr('cx', function (d) { return Math.floor(Math.random() * d.x_axis )})
	.attr('cy', function (d) { return Math.floor(Math.random() * d.y_axis )})
	.attr('r', function (d) { return d.radius; })
	.style('fill', function(d) { return d.color; })
	.transition().each('end', function () {
		myTransf();
	});
}

//====================================
// infinite loop function

function myTransf() {
	for (var i = 0; i < 50; i++){
		xEn = Math.floor(Math.random() * 1200);
		yEn = Math.floor(Math.random() *	700);
		d3.select('#circ'+i).transition().duration(2000)
		.attr('cx', xEn)
		.attr('cy', yEn)
		.each('end', function () {
			myTransf();
		});
	}
}

//====================================
// dragging options

var drag = d3.behavior.drag()  
.on('dragstart', function() { userCircle.style('fill', 'gray'); })
.on('drag', function() { userCircle.attr('cx', d3.event.x)
	.attr('cy', d3.event.y); })
.on('dragend', function() { userCircle.style('fill', 'red'); });

//====================================
// creating user circle

var userCircle = svgContainer.selectAll('.draggableCircle')  
.data(jsonCirclesUser)
.enter()
.append('svg:circle')
.attr('class', 'draggableCircle')
.attr('cx', function(d) { return Math.floor(Math.random()*d.x_axis); })
.attr('cy', function(d) { return Math.floor(Math.random()*d.y_axis); })
.attr('r', function(d) { return d.radius; })
.style('fill', function(d) { return d.color})
.call(drag);


/* for using an image instead of a circle
var userCircle = svgContainer.selectAll('.draggableCircle').data([0])
.enter()
.append('image')
.attr('xlink:href', 'http://www.zwani.com/graphics/cartoons/images/glitterimagescartoons51.gif')
.attr('class', 'draggableCircle')
.attr("width", '300')
.attr("height", '300')
.attr('x', Math.floor(Math.random()*1200))
.attr('y', Math.floor(Math.random()*700))
.call(drag)
*/


//====================================
// increasing our current score

var increaseCurrentScore = d3.select('body').selectAll('.current').select('span')[0][0]
d3.timer(function(){
	increaseCurrentScore.innerText++
},1)



// if circles hit each other, restart the timer and record the highest score in the highscore span only if it is higher than the previous higher score


// ++ for every time the timer restarts
console.log(d3.select('body').selectAll('.collisions').select('span')[0][0].innerText)
function setHighScore (){

}






