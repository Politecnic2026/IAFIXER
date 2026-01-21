import puppeteer from 'puppeteer';
import fs from 'fs';

const url = 'https://confident-standards-000951.framer.app/';

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto(url, { waitUntil: 'networkidle0' });

const html = await page.content();

fs.writeFileSync('pagina_renderizada4.html', html, 'utf-8');

console.log('✅ pagina_renderizada.html creada');

await browser.close();
