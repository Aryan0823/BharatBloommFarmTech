/**
 * server.js — Custom Next.js server for Phusion Passenger (cPanel/mPanel Node.js App)
 *
 * USE THIS ONLY for the "Node.js Application" option in mPanel.
 * For static export (shared hosting), you don't need this file.
 *
 * mPanel Setup:
 *   - Node.js version: 18.x or higher
 *   - Application startup file: server.js
 *   - Application root: (your app directory on the server)
 *   - After upload, click "Run NPM Install" then "Restart"
 */

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

// When using `output: 'standalone'` in next.config, replace 'next' import path
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            const parsedUrl = parse(req.url, true);
            await handle(req, res, parsedUrl);
        } catch (err) {
            console.error('Error occurred handling', req.url, err);
            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    })
        .once('error', (err) => {
            console.error(err);
            process.exit(1);
        })
        .listen(port, () => {
            console.log(`> BharatBloomm FarmTech ready on http://${hostname}:${port}`);
        });
});
