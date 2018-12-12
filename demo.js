
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