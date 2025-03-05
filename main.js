//"Author Mitchell Habovick"

const Discord = require('discord.js');
require("dotenv").config();
const client = new Discord.Client();
//const fetch = require('node-fetch');
//const config = require('./package.json');
const prefix = '!';
const guild = "";

client.once('ready', () => {
    console.log('Jp Learn Online');
});

// let defaultChannel = "";
// guild.channels.cache.forEach((channel) => {
//     if(channel.type == "text" && defaultChannel == "") {
//     if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
//         defaultChannel = channel;
//         }
//     }
// })
//defaultChannel.send("This is a test message I should say this message when I join");


//if(guild.systemChannelId != null) return guild.systemChannel.send("This is a test message I should say this message when I join"), console.log('Bot entered new Server.')

// client.on('guildCreate', (g) => {
// const channel = g.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(g.me).has('SEND_MESSAGES'))
// channel.send("This is a test message I should say this message when I join");
// });

client.on('guildCreate', guild => {
    guild.systemChannel.send('Hello @here, DestroyerM has not been doing well lately, but I can assure you he plans to return to this server. In the meantime, I am a bot personally developed by him. I am just a simple bot that teaches Japanese right now, but eventually I plan to get more phrases. Start by typing in !jhelp to get started. Additionally, please use me in the respective bot chat.')
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/); // This splits our code into to allow multiple commands.
    const command = args.shift().toLowerCase();

    if (command === 'jhelp') {
        message.channel.send('こんにちは、私はDiscordロボットです。始めたいなら、!jhelp タイプしてください。 \n\n Hello I am a discord bot built to help learn the Japanese language! \n\n If you want to access a japanese dictionary type !dictionary \n\n If you would like to learn a random Japanese Phrase type !teachme \n\n If you would like to answer a challenge question type !challenge1 through 5 each different numbered challnege will ask a different question \n (ie. !challenge1) this will ask the first question.')


    } else if (command === 'dictionary') {
        message.channel.send('These are some great links to help define words in Japanese!');
        message.channel.send('https://jisho.org \n https://alc.co.jp');

    } else if (command === 'teachme') {

        let quotes = ['これはテストです | This means: This is a test',
            'こんにちは | This means: hello | This is a basic phrase used in everyday conversation. There are diffent types of prhases to greet yourself, there are a multitue of phrases for different times of the day. This article will give some useful information. | https://gogonihon.com/en/blog/aisatsu-japanese-greetings/ ',
            'またね | じゃ、また | There is a misconception in Japanese that people commonly say さよなら when they want to say goodbye, this phrase is not always nessicarily used rather the other prhases mentioned are more commonly used. This article will give useful information into these prhases. | https://www.japan-guide.com/forum/quereadisplay.html?0+3522',
            '日本語を話せます | This means: I can speak Japanese | 話せる (はなせる) This grammar point is a conjugation of 話す (はなす) to speak. This site shows conjugations of words in Japanese and can provide useful information into the words being conjugated. | http://www.japaneseverbconjugator.com/VerbDetails.asp?txtVerb=%E8%A9%B1%E3%81%99',
            '日本語が話せません | Hanaseru This is a conjugation of Hanasu which means to speak | In this case this means: I cannot speak Japanese',
            '泳ぐのが好きです | This means: I like to swim | のが好きです（のがすきです） This grammar point emphasizes that the user likes to do something. You will put a word in dictionary form before it. This site has a good reference on how to use this grammar point | https://jlptsensei.com/learn-japanese-grammar/%E3%81%AE%E3%81%8C%E5%A5%BD%E3%81%8D-no-ga-suki-%E3%81%AE%E3%81%8C%E3%81%99%E3%81%8D%E3%81%A7%E3%81%99-meaning/',
            '美味しいかったと思います | This means: That was delicious, I think.',
            'たけしさんは来るかもしれません | This means: Mr. Takeshi might come.',
            'みたい | This grammarpoint means to look like. An exapmle would be: その像は犬みたいです。This sentence translates to: That statue looks like a dog. みたい emphasizes this. A good reference to learn about this is here: https://www.japaneseforbeginners.info/2017/05/mitai-2.html',
            'だけ | This grammar point is used to state only/as much as. Ex. 私はスーパーで魚だけ買った。I only bought fish at the supermarket. This site has a good reference on how to use this grammar point: https://www.tofugu.com/japanese-grammar/dake/',
            'でも | This grammar point is used in a few ways. It can mean however or but. A few examples include  日本にいったことがあるでも、おきなわにいったことがありません。I have been to Japan, but I have never been to Okinawa.',
            'があります | This grammar point is used to say things exist, (specifically non living things) for living things there is a different grammar pont. Ex. そのレストランは寿司があります。 That resturant has sushi. A good site to reference https://jlptsensei.com/learn-japanese-grammar/%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99-ga-arimasu-%E3%81%8C%E3%81%82%E3%82%8B-ga-aru-meaning/',
            'です | One of the core essentials, です is used to say this is and is used in a lot of sentences Ex. これはほんです。This is a book.',
            'でしょう | This grammar point is usually say right? posed as a question. It can also mean I think, and probably. これは何でしょうか？ What is that? ',
            'どんな | This means what kind of. Ex. どんな本が好きですか？ What kind of book do you like?',
            'どうして | This means why. There are other ways this word can be said as well. Ex. どうして日本語を勉強していますか？ Why are you studying Japanese?',
            'どうやって | This grammar point means how. Ex. それはどうやってした？！ How did you do that!?',
            'がほしい | This grammar point emphasizes the user wants something. Ex. あの本がほしい。I want that book.',
            'が好きです | This grammar point emphasizes the user likes something. Ex. あの本が好きです。I like that book.'];


        //message.channel.send(randomQuote = quotes [Math.floor(Math.random() * quotes.length)])  
        randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        message.channel.send(randomQuote);

    }



    else if (command === 'challenge1') {

        message.channel.send('I will ask a grammar point. Good Luck!/質問聞いている、頑張てください。\n \n')

        message.channel.send('Question 1: What is thre grammar point for maybe? Please enter your answer in Casual Form. (I can also take answer in English or Japanese.)')

        const msg_filter = (m) => m.author.id === message.author.id;

        message.channel.awaitMessages(msg_filter, { max: 1, time: 30000 })

            .then(collected => {


                if (collected.first().content == ('かもしれない')) {
                    message.reply('Correct!/正しい');
                } else if (collected.first().content == ('kamoshirenai')) {
                    message.reply('Correct!/正しい')
                } else if (collected.first().content == ('tabun')) {
                    message.reply('This is also correct however, this means maybe as in it will probably occur./それも正しいでも、その意味は（恐らく）です。')
                } else if (collected.first().content == ('多分')) {
                    message.reply('This is also correct however, this means maybe as in it will probably occur./それも正しいでも、その意味は（恐らく）です。')
                } else if (collected.first().content == ('たぶん')) {
                    message.reply('This is also correct however, this means maybe as in it will probably occur./それも正しいでも、その意味は（恐らく）です。')
                }
                else {
                    message.reply('Sorry that is not correct/ごめんね、その答えは正しくなりません。')
                }
            })




        //      message.channel.send('Question 2: What is thre grammar point for liking something? Please enter ! in front of your answer.')

        //      message.channel.awaitMessages(msg_filter, {max: 1})
        //      .then(collected => {

        //      if(collected.first().content == ('すきです')){
        //         message.reply('Correct!/正しい');
        //     }else if(collected.first().content == ('好きです')){
        //         message.reply('Correct!/正しい')
        //    }else{
        //         message.reply('Sorry that is not correct/ごめんね、その答えは正しくなりません。')
        //     }

        //});   


    } else if (command === 'challenge2') {

        message.channel.send('I will ask a grammar point. Good Luck!/質問聞いている、頑張てください。\n \n')

        message.channel.send('Question 2: What is thre grammar point for too much of something? Please enter your answer in Casual Form. (I can also take answer in English or Japanese.)')

        const msg_filter = (m) => m.author.id === message.author.id;

        message.channel.awaitMessages(msg_filter, { max: 1, time: 30000 })

            .then(collected => {


                if (collected.first().content == ('過ぎる')) {
                    message.reply('Correct!/正しい');
                } else if (collected.first().content == ('すぎる')) {
                    message.reply('Correct!/正しい! for this grammar pont it emphasizes you did something too much for instance たべすぎました this indicates to eat too much.')
                } else if (collected.first().content == ('sugiru')) {
                    message.reply('Correct!/正しい! for this grammar pont it emphasizes you did something too much for instance たべすぎました this indicates to eat too much.')
                } else {
                    message.reply('Sorry that is not correct/ごめんね、その答えは正しくなりません。')
                }
            })

    } else if (command === 'challenge3') {

        message.channel.send('I will ask a grammar point. Good Luck!/質問聞いている、頑張てください。\n \n')

        message.channel.send('Question 3: What is thre grammar point for liking to do something (more than just like, please use the grammar point) (I can also take answer in English or Japanese.)')

        const msg_filter = (m) => m.author.id === message.author.id;

        message.channel.awaitMessages(msg_filter, { max: 1, time: 30000 })

            .then(collected => {


                if (collected.first().content == ('のが好き')) {
                    message.reply('Correct!/正しい');
                } else if (collected.first().content == ('のがすき')) {
                    message.reply('Correct!/正しい! for this grammar pont it emphasizes you like to do something for example スポーツをするのがすきです, This emphasizes the speaker likes to play sports.')
                } else if (collected.first().content == ('nogasuki')) {
                    message.reply('Correct!/正しい! for this grammar pont it emphasizes you did something too much for example スポーツをするのがすきです, This emphasizes the speaker likes to play sports.')
                } else {
                    message.reply('Sorry that is not correct/ごめんね、その答えは正しくなりません。 This one might be a little more ambigous to answer, the answer was nogasuki in this case.')
                }
            })

    } else if (command === 'challenge4') {

        message.channel.send('I will ask a grammar point. Good Luck!/質問聞いている、頑張てください。\n \n')

        message.channel.send('Question 3: What is thre grammar point for even though/ despite/ even though?) (I can also take answer in English or Japanese.)')

        const msg_filter = (m) => m.author.id === message.author.id;

        message.channel.awaitMessages(msg_filter, { max: 1, time: 30000 })

            .then(collected => {


                if (collected.first().content == ('くせに')) {
                    message.reply('Correct!/正しい for this grammar pont it emphasizes you like to do something for example このへやはせまいくせにやちんがすごくたかい。 Even though the room is small, the rent is high.');
                } else if (collected.first().content == ('kuseni')) {
                    message.reply('Correct!/正しい for this grammar pont it emphasizes you like to do something for example このへやはせまいくせにやちんがすごくたかい。 Even though the room is small, the rent is high.')
                } else {
                    message.reply('Sorry that is not correct/ごめんね、その答えは正しくなりません。')
                }
            })

    } else if (command === 'challenge5') {

        message.channel.send('I will ask a grammar point. Good Luck!/質問聞いている、頑張てください。\n \n')

        message.channel.send('Question 3: What is thre grammar point for this place/item is full of/covered with?) (I can also take answer in English or Japanese.)')

        const msg_filter = (m) => m.author.id === message.author.id;

        message.channel.awaitMessages(msg_filter, { max: 1, time: 30000 })

            .then(collected => {


                if (collected.first().content == ('だらけ')) {
                    message.reply('Correct!/正しい! for this grammar pont it emphasizes that something or someplace is full of something or covered  with, it uses a noun right before the grammar point. For example, つくえのうえはほこりだらけです the table is full of dust.');
                } else if (collected.first().content == ('darake')) {
                    message.reply('Correct!/正しい! for this grammar pont it emphasizes that something or someplace is full of something or covered  with, it uses a noun right before the grammar point. For example, つくえのうえはほこりだらけです the table is full of dust.')
                } else {
                    message.reply('Sorry that is not correct/ごめんね、その答えは正しくなりません。')
                }
            })

        } else if (command == 'showmethenumbers') {
            let 一 = 1;
            let 二 = 2;
            let 三 = 3;
            let 四 = 4;
            let 五 = 5;
            let japaneseSymbols = ['一 One', '二 Two', '三 Three', '四 Four', '五 Five', '六 Six' , '七 Seven' , '八 Eight' , '九 Nine' , '十 Ten' , '百 Hundered' , '千 Thousand' ];
            let result = '';
            for (let i = 0; i < japaneseSymbols.length; i++) {
                result += japaneseSymbols[i];
                if (i < japaneseSymbols.length - 1) {
                    result += ' + ';
                }
            }
            message.channel.send('I will start by showing the basic numbers in Japanese \n'  + result)
        }

    //  else if(command === 'challenge2'){
    //     let questions = ['test question', 'test2', 'test3']
    //     q = questions [Math.floor(Math.random() * questions.length)]    

    //     message.channel.send('I will ask a question. Good Luck!/質問聞いている、頑張てください。\n \n')

    //     message.channel.send(q);


    //  if(message.author.bot) return;
    //  if(message.content.toLowerCase().startsWith("-challenge")){
    //     const response = await fetch('https://opentdb.com/api.php?amount=1&difficulty=medium');
    //     const data = await response.json();
    //     console.log("Data");

    // }




});

client.login(process.env.BOTTOKEN); "From here, the key for the bot would be placed here."

