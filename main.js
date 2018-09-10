var draw = SVG('drawing').size(300, 300)
var rect = draw.rect(100, 100).attr({ fill: '#f06' })
//var circle = draw.circle(150, 150).attr({ fill: 'orange', stroke: 'black', opacity: '0.5' })
var i = 0
while(i < 100)
{
	
rect.animate(500).fill('#f03').move(200,0)
rect.animate(500).fill('#f03').move(200,200)
rect.animate(500).fill('#f03').move(0,200)
rect.animate(500).fill('#f03').move(0,0)
i++
}
