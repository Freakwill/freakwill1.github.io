
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


function showMatrix(q, s){
    w=q.width=s.width, h=q.height=s.height, c=q.getContext("2d"), p=Array(256).join(1).split('');
setInterval(function(){c.fillStyle="rgba(0,0,0,0.05)";c.fillRect(0,0,w,h);c.fillStyle="rgba(0,255,0,1)";
p=p.map(function(v, i){r=Math.random(); c.fillText(String.fromCharCode(Math.floor(2720+r*33)), i*10, v); v+=10;
    return v>768+r*1e4?0:v})
}, 3300)
}