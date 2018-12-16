/**
 * Demonstration
 */

/**
 * get the date
 * @param  {String} str words befor date
 * @return {String}
 */
function getdate(str){
	if (arguments.length==0)
		{str="";}
    var date = new Date()      //e.g. 2012-12-20
    return str + date.toString()
}

function showprop(obj){
	for (var prop in obj) {
		print(prop+": "+ obj[prop])
	}
	//document.close()
}

/**
 * to show Matrix
 * @param  {canvas} q
 * @param  {int} width
 * @param  {int} height
 * @return {nil}
 */
function showMatrix(q, width, height){
    var w=q.width=width,h=q.height=height, p=Array(256).join(1).split(''), c=q.getContext("2d");
    return setInterval(function(){c.fillStyle="rgba(190,190,190,0.05)"; c.fillRect(0,0,w,h); c.fillStyle="rgba(0,255,0,1)"; p=p.map(function(v,i){r=Math.random();c.fillText(String.fromCharCode(Math.floor(2720+r*33)),i*10,v);v+=10; return v>768+r*1e4?0:v})},33)}