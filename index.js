// index.js
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';
let Parser = require('rss-parser');
let parser = new Parser();

async function getBlogPosts() {
  var md = '';
  let feed = await parser.parseURL('https://deeemm.com/feed.xml');
    console.log(feed.title);
    
    feed.items.forEach(item => {
          console.log(item.title + ':' + item.link)
          md += `[` + item.title + `](` + item.link + `)  
          `
          ;        
    });        
    DATA.blog_feed = md; 
}



let DATA = {
  name: 'DeeEmm',
  date: new Date().toLocaleDateString('en-GB', {
	weekday: 'long',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	timeZoneName: 'short',
	timeZone: 'Australia/Adelaide',
  }),
};



async function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
	if (err) throw err;
	const output = Mustache.render(data.toString(), DATA);
	fs.writeFileSync('README.md', output);
  });
}

async function action() {
  await getBlogPosts(); 
  await generateReadMe();  
}

action();