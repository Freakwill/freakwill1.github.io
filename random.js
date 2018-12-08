
function choice(items) {
    return items[Math.floor(Math.random()*items.length)];}

function choicex(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

function randomFromFile(fname) {
    fs.readFile(fname, function(err, data){
        if (err)
            {console.log(err);}
        else
            {var output = JSON.parse(data.toString());}
    })
    return choice(output)
}
