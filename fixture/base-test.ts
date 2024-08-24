import { test as base, chromium, Page, type BrowserContext } from '@playwright/test';
import path from 'path';

export const test = base.extend<{
  context: BrowserContext;
  page: Page
}>({
  context: async ({ }, use) => {
    const pathToExtension = path.join(__dirname, 'metamask-chrome-12.0.6');
    console.log(pathToExtension)
    const context = await chromium.launchPersistentContext('', {
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });
    await use(context);
    await context.close();
  },
  page: async ({context},use) => {
    const page = await context.newPage()
    await use(await context.newPage())
    await page.close()
  }
});
export const expect = test.expect;