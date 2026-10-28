// Exports banner.html to banner.png at 2x (2400×1174), losslessly.
// Usage: node export.cjs   (needs the `playwright` package and Google Chrome)
const path = require('path')
const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch({ channel: 'chrome' })
  const page = await browser.newPage({
    viewport: { width: 1300, height: 700 },
    deviceScaleFactor: 2,
  })
  await page.goto('file://' + path.resolve(__dirname, 'banner.html'))
  const fit = await page.evaluate(() => window.bannerReady)
  console.log('name fit:', fit)
  await page.locator('#banner').screenshot({
    path: path.resolve(__dirname, 'banner.png'),
    omitBackground: true,
    type: 'png',
  })
  await browser.close()
})()
