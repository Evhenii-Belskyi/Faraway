import { Locator, Page } from 'playwright';
import { BasePage } from './base-page';
import { expect } from '@playwright/test';

export class AuthPage implements BasePage{
    private page: Page;

    // Selectors for elements
    public emailInput : Locator
    private codeInput : Locator
    private continueBtn: Locator
    private successMessage: Locator

    constructor(page: Page) {
        this.page = page;
        this.successMessage = page.getByText('Success')
        this.continueBtn = page.getByTestId('email-form-submit-button')
        this.emailInput = page.getByTestId('email-form-email-input')
        this.codeInput = page.locator('//div[@data-testid="verify-email-form-code-input"]')
    }

    // Method to navigate to the page
    async navigateTo() {
        await this.page.goto('https://connect-sandbox-v2.faraway.com/auth/email');
    }

    // Method to enter email
    private async enterEmail(email: string) {
        await this.emailInput.fill(email)
    }

    // Method to submit the form
    private async clickContinue() {
        await this.continueBtn.click()
    }

    private async enterCode(code: string){
        //const inputs = await this.codeInput.all()
        let i = 1
        for (const char of code) {
            await this.page.locator(`input:nth-child(${i})`).fill(char)
            i++
        }
    }

    // Example method to perform the complete login action
    async login(email: string, code: string) {
        await this.enterEmail(email)
        await this.clickContinue()
        await expect(this.codeInput).toBeVisible()
        await this.enterCode(code)
        return true
        //await expect(this.successMessage).toBeVisible()
    }
}
