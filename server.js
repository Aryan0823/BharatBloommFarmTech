/**
 * BharatBloomm FarmTech — mPanel Node.js Gateway Server
 * ────────────────────────────────────────────────────────────────
 * This is a lightweight Express.js server that serves the pre-built
 * Next.js static files from the `out/` directory.
 *
 * HOW IT WORKS:
 *  1. You build Next.js on your Mac → generates the `out/` folder
 *  2. You upload THIS file + the `out/` folder + package.json to mPanel
 *  3. mPanel runs this server as the Node.js application
 *  4. Express serves all the static pages at high speed
 *
 * MILSWEB mPanel SETUP:
 *  - Startup file : server.js
 *  - Node.js version : 18.x or 20.x
 *  - After upload: click "Run NPM Install" then "Restart"
 */

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const STATIC_DIR = path.join(__dirname, 'out');

// ── Serve static Next.js output ──────────────────────────────────
app.use(express.static(STATIC_DIR, {
    extensions: ['html'],   // allows /admin → /admin.html automatically
    index: 'index.html',
    maxAge: '1d',           // cache static assets for 1 day
}));

// ── Handle clean URLs (Next.js-style) ────────────────────────────
// e.g. /products/oll-340 → out/products/oll-340.html
app.get('*', (req, res) => {
    // Try: out/[path].html
    const safePath = req.path.replace(/\.\./g, ''); // prevent path traversal
    const htmlFile = path.join(STATIC_DIR, `${safePath}.html`);
    const indexFile = path.join(STATIC_DIR, safePath, 'index.html');
    const notFound = path.join(STATIC_DIR, '404.html');

    if (fs.existsSync(htmlFile)) {
        return res.sendFile(htmlFile);
    }
    if (fs.existsSync(indexFile)) {
        return res.sendFile(indexFile);
    }
    // Fallback to 404 page
    if (fs.existsSync(notFound)) {
        return res.status(404).sendFile(notFound);
    }
    res.status(404).send('Page not found');
});

// ── Start server ─────────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`✅ BharatBloomm FarmTech running on port ${PORT}`);
    console.log(`   Serving static files from: ${STATIC_DIR}`);
});
