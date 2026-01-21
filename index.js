import puppeteer from 'puppeteer';
import fs from 'fs';

const url = 'https://warmhearted-guides-382935.framer.app/';

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto(url, { waitUntil: 'networkidle0' });

const html = await page.content();

fs.writeFileSync('entrenamientoasesorias.html', html, 'utf-8');

console.log('✅ pagina_renderizada5.html creada');

await browser.close();
