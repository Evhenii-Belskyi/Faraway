import { expect, Page } from '@playwright/test';
import { AuthPage } from '../page-object/sign-up';
import { test } from '../fixture/base-test';
import { login } from '../fixture/helpers';

test.describe('Purchase Item',()=>{
  let logged: boolean
  test.beforeEach('Login', async ({page, context})=>{
     logged = await login(page, context);
  })

  test.only('Purchase Item', async ({ page, context}) => {
    await page.bringToFront()
    if(logged){
      const selectCur = page.locator('#blockchain')
      const img = page.locator('//img')
      const imgURL = await img.getAttribute('src')
      const purchaseInput = page.locator('#purchase-image-url')
      const purchaseBtn = page.locator('#purchase')
  
  
      await selectCur.selectOption('Ethereum')
      await purchaseInput.fill(`https://sandbox-platform.faraway.com${imgURL}`)
      await page.waitForTimeout(3000)
      await purchaseBtn.click()
  
      const frame = page.frameLocator('iframe')
      const frameContent = frame.getByTestId('content')
      const connectWallet = frame.getByTestId('payrow')
      const detectedWallet = frame.getByText('Detected')

      const pagePromise = context.waitForEvent('page');
      await expect(frameContent).toBeVisible({timeout: 10000})
      await connectWallet.click()
      await detectedWallet.click()
      const newPage = await pagePromise;
      await expect(newPage).toHaveURL('chrome-extension://nanpjhkemgnnajbacnamjjamboennndf/notification.html')
    }
  });
})
