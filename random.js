
module.exports = {
    choice,
    randomFromFile
  }

function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

/* Example:
var items = ['This is a useless website', 
'This is a useful website',
'This is an awesome website'];
choice(items);
*/


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

function randomFromFile(path) {
    var fs = require('fs')
    var data = fs.readFileSync(path, 'utf-8');
    return choice(JSON.parse(data));
}

