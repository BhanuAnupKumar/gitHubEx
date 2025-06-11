import http from 'http';
import {createTextEvent,createDoneEvent} from '@copilot-extensions/preview-sdk'

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is a GET response!');
  } else {
    res.write(createTextEvent('Hello world!'));
    res.write(createTextEvent('Hello world! from bhanu, first extesnion'));
    res.end(createDoneEvent());
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});