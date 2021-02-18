const request = require('request');
const cheerio = require('cheerio');

request('https://javascript.info/async-await', (error, response, html) =>{
    if(!error && response.statusCode === 200){
        const $ = cheerio.load(html);

        const content = $('.content');
        console.log(content.html());

    }
});



