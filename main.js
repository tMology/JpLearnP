const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';


client.once('ready', () => {
    console.log('Jp Learn Online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/); // This splits our code into to allow multiple commands.
    const command = args.shift().toLowerCase();
    
    if(command === 'jhelp'){
        message.channel.send('こんにちは、私はDiscordロボットです。始めたいなら、!jhelp タイプしてください。')
        message.channel.send('Hello I am a discord bot built to help learn the Japanese language!'); 
        message.channel.send('If you want to access a japanese dictionary type !jisho');
        message.channel.send('If you would like to learn a random Japanese Phrase type !teachme');
        
    } else if(command === 'jisho'){
        message.channel.send('https://jisho.org');
    } else if(command === 'teachme'){
        
        let quotes = ['これはテストです | This means: This is a test', 
        'こんにちは | This means: hello | This is a basic phrase used in everyday conversation. There are diffent types of prhases to greet yourself, there are a multitue of phrases for different times of the day. This article will give some useful information. | https://gogonihon.com/en/blog/aisatsu-japanese-greetings/ ',
        'またね | じゃ、また | There is a misconception in Japanese that people commonly say さよなら when they want to say goodbye, this phrase is not always nessicarily used rather the other prhases mentioned are more commonly used. This article will give useful information into these prhases. | https://www.japan-guide.com/forum/quereadisplay.html?0+3522' , 
        '日本語を話せます | This means: I can speak Japanese | 話せる (はなせる) This grammar point is a conjugation of 話す (はなす) to speak. This site shows conjugations of words in Japanese and can provide useful information into the words being conjugated. | http://www.japaneseverbconjugator.com/VerbDetails.asp?txtVerb=%E8%A9%B1%E3%81%99', 
        '日本語が話せません | This means: I cannot speak Japanese', 
        '泳ぐのが好きです | This means: I like to swim | のが好きです（のがすきです） This grammar point emphasizes that the user likes to do something. You will put a word in dictionary form before it. This site has a good reference on how to use this grammar point | https://jlptsensei.com/learn-japanese-grammar/%E3%81%AE%E3%81%8C%E5%A5%BD%E3%81%8D-no-ga-suki-%E3%81%AE%E3%81%8C%E3%81%99%E3%81%8D%E3%81%A7%E3%81%99-meaning/',
        '美味しいかったと思います | This means: That was delicious, I think.',
        'たけしさんは来るかもしれません | This means: Mr. Takeshi might come.'];
        
        if(message.channel.send != message.channel.send){ //For some reason when this is typed, my output won't show.
        message.channel.send(randomQuote = quotes [Math.floor(Math.random() * quotes.length)])
        } 

    }
});




client.login('');
