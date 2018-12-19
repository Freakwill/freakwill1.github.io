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
"content": "哪里没有兴趣，哪里就没有记忆。",
"author": "[德]歌德",
"topic": "学习"
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
"content": "在爱情中永远没有精神的安宁：因为一方已经占据的优势不过是进一步欲望的新起点。",
"author": "[法]普鲁斯特",
"topic": "爱情"},

{
"content": "信心是：抱着足可确信的希望与信赖，奔赴伟大荣誉之路的感情。",
"author": "[古罗马]西塞罗",
"topic": "情感"},

{
"content": "好感是友谊的先决条件，但是不能把两者混为一谈。",
"author": "[古希腊]亚里士多德",
"topic": "友情"},

{
"content": "一个青年男子恋爱的第一个征象是柔顺，而一个女子却是勇敢。",
"author": "[法]雨果",
"topic": "爱情"},

{
"content": "人类对于琐碎事物的敏感和对于最重要事物的麻木，标志着一种不可思议的错乱。",
"author": "[法]帕斯卡",
"topic": "生命"},

{
"content": "当一个人悲观地看待自己的弱点时，他就会以为所有人都在藐视他。其实，当时并没有任何人对他怀有一丝轻蔑。",
"author": "[荷]斯宾若莎",
"topic": "品格"},

{
"content": "乐观主义的谎言有着如此巨大的治疗价值，不能令人信服地说出这类谎言的医生是选错了职业。",
"author": "[英]萧伯纳",
"topic": "健康"},

{
"content": "衡量人的真正品德，是看他在知道没有人会发觉的时候做些什么。",
"author": "[法]孟德斯鸠",
"topic": "品格"}
];
    quote = choice(quotes);
    return quote
}
