const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });
  server.listen(port, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(
      `> Server listening at http://0.0.0.0:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    );
  });

  process.on('SIGTERM', () => {
    server.close(() => {
      console.log('Server closed');
    });
  });
});
