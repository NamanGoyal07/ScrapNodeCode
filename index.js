const request = require('request');
const cheerio = require('cheerio');

request('https://codeforces.com/blog/entry/87934', (error, response, html) =>{
    if(!error && response.statusCode === 200){
        const $ = cheerio.load(html);

        const content = $('.content');
        // console.log(content.html());
        // console.log(content.text());

        const output = content.find('h1').text();
        console.log(output);

    }
});



