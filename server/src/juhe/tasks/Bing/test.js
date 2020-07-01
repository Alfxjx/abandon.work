const axios = require('axios');

let idx = 0;
let number = 1;
const url = `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=${idx}&n=${number}`;
let linkUrl = axios.get(url).then(res => {
  console.log(res.data);
  return res.data;
});

console.log(linkUrl);
