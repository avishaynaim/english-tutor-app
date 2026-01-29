const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const FILE = path.join(__dirname, 'english-tutor.html');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  fs.createReadStream(FILE).pipe(res);
});

server.listen(PORT, () => {
  console.log('');
  console.log('  English Tutor is running!');
  console.log('  Open this in Chrome:');
  console.log('');
  console.log('  http://localhost:' + PORT);
  console.log('');
  console.log('  Press Ctrl+C to stop.');
  console.log('');
});
