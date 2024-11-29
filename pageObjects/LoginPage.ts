import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private async PutEmail(email: string): Promise<void> {
        return this.page.fill('[type="email"]', email);
    }

    private async PutPassword(password: string): Promise<void> {
        return this.page.fill('[type="password"]', password);
    }

    private get ContinueButton(): Locator {
        return this.page.locator(':text-is("Continue")');
    }

    private get LoginButton(): Locator {
        return this.page.locator(':text-is("Log in")');
    }

    public async login(email: string, password: string): Promise<void> {
        await this.PutEmail(email);
        await this.ContinueButton.click();
        await this.PutPassword(password);
        await this.LoginButton.click();
    }

}
