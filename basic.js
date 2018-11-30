function print(x,ch){
	if (arguments.length<=1) {
		ch="<br />"
		if (arguments.length==0){x==""}
	}
	document.write(x+ch)
}

function arrayprint(array){
var x
for (x in array)
{
print(array[x])
}
}

function enumerateprint(array, ch){
	if (arguments.length<=1) {ch='.'}
for (var i=1; i<=array.length; i++)
{
print(i+ ch +' '+ array[i-1])
}
}

function nl(){
	document.writeln()
}

function pass() {
	// do nothing
}

function set_title(title)
{document.title=title}


function addHandler(element, eventType, handler){
	if(element.addEventListener){              // 360...
	element.addEventListener(eventType,handler,false);
	} else if(element.attachEvent){
	element.attachEvent('on'+eventType,handler);
	} else {                                  //DOM0级
	element['on'+eventType] = handler;
	}
}