import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private BoardLink(boardName: string): Locator {
        return this.page.locator(`:text-is("${boardName}")`)
    }

    public HomeLink(): Locator {
        return this.page.locator('[aria-label="Home"]');
    }

    public async navigateToBoard(boardName: string): Promise<void> {
        await this.BoardLink(boardName).click();
    }

}
