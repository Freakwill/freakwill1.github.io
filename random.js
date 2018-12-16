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
"content": "最富吸引力的格言也许并不是最机智的，而是最真实的，最合理的。",
"author": "[美]梭罗",
"topic": "思想"
},

{
"content": "一种话语的传播不是依靠火与剑，而是依靠这种语言本身的丰富与优越。",
"author": "[俄]普希金",
"topic": "知识"},

{
"content": "亚当只不过是个人罢了——这就说明了一切。他并不是为了苹果而吃苹果，他之所以要把苹果吃掉，只是因为它是禁果。错就错在那条蛇不曾被列为禁物；否则他会把蛇吃掉的。",
"author": "[美]马克·吐温",
"topic": "讽刺"},

{
"content": "知道事物应该是什么样，说明你是聪明的人；知道事物实际上是什么样，说明你是有经验的人；知道怎样使事物变得更好，说明你是有才能的人。",
"author": "[法]狄德罗",
"topic": "知识"},

{
"content": "知识本身并没有告诉人怎样运用它，运用的方法乃在书本之外。",
"author": "[英]培根",
"topic": "知识"},

{
"content": "人必须更成熟些，才能够发现不加修饰的风光和紫云英的馨香的价值。如果这种香味沾染在他身上，也是不知不觉的，后一段时间，他的魅力才能渐渐发生作用。",
"author": "[法]罗曼·罗兰",
"topic": "品格"}
];
    quote = choice(quotes);
    return quote
}
