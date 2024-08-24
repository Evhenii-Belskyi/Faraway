import { BrowserContext, expect, Page } from "@playwright/test";
import { AuthPage } from "../page-object/sign-up";
let newPage: Page
let authP: AuthPage
export const login = async (page: Page, context: BrowserContext)=> {
 // Open the demo page
 await page.goto('https://sandbox-platform.faraway.com/demo/');
 await page.waitForTimeout(3000)

 //Click the "Connect in new tab" button
 await expect(async () => {
   const pagePromise = context.waitForEvent('page');
   await page.getByRole('button', { name: 'Connect in new tab' }).click();
   newPage = await pagePromise;
   authP = new AuthPage(newPage);
   await newPage.bringToFront()
   await expect(authP.emailInput).toBeVisible();
 }).toPass()

   const logged  = await authP.login('ta.test.assignment@faraway.com','378934')
   return logged
}