module.exports = {
    choice,
    randomFromFile
  }

function choice(items) {
    return items[Math.floor(Math.random() * items.length)];}

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


function test() {
var items = ['This is a useless website', 
'This is a useful website',
'This is an awesome website'];
return choice(items);
}

function generateQuote(){
    var quotes = [{
"content": "我要用十句话说出别人用整本书才能表达的思想，说出别人用整本书也没有能表达的思想。这就是我的抱负。",
"author": "[德]尼采",
"topic": "思想"
},
{
"content": "除了很好地理解了东西之外，决不能强迫去记任何东西。",
"author": "[捷]夸美纽斯",
"topic": "学习"
},

{
"content": "今天仅仅思考今天的事情，而不准备同时做其他事，这是最聪明的做法。",
"author": "[西]塞万提斯",
"topic": "学习"
},

{
"content": "那里没有兴趣，哪里就没有记忆。",
"author": "[德]歌德",
"topic": "学习"
},

{
"content": "最富吸引力的格言也许并不是最机智的，而是最真实的，最合理的",
"author": "[美]梭罗",
"topic": "思想"
}
];
    quote = choice(quotes);
    return quote
}
