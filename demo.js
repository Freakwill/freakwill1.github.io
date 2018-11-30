//document.write("<script src='basic.js' type='text/javascript'></script>");

function showdate(str){
	if (arguments.length==0)
		{str=""}
var date = new Date()      //e.g. 2012-12-20
        document.write(str+date.toString())
        //document.close()
}

function showprop(obj){
	for (var prop in obj) {
		print(prop+": "+ obj[prop])
	}
	//document.close()
}