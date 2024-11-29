import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class BoardPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // UI Elements
    private TaskCard(taskCardName: string): Locator {
        return this.page.locator(`:text-is("${taskCardName}")`);
    }

    private BoardColumn(columnName: string): Locator {
        return this.page.locator('.CommentOnlyBoardColumn', { hasText: columnName });
    }

    private TaskCardInSpecificColumn(columnName: string, taskCardName: string): Locator {
        return this.BoardColumn(columnName).filter({ hasText: taskCardName });
    }

    private TagCard(columnName: string, taskCardName: string, tagName: string): Locator {
        return this.TaskCardInSpecificColumn(columnName, taskCardName).filter({ hasText: tagName });
    }

    // Verification Methods
    public async verifyTaskCardIsPresent(taskCardName: string): Promise<void> {
        await expect(this.TaskCard(taskCardName)).toBeVisible();
    }

    public async verifyTaskCardIsPresentInSpecificColumn(columnName: string, taskCardName: string): Promise<void> {
        await expect(this.TaskCardInSpecificColumn(columnName, taskCardName)).toBeVisible();
    }

    public async verifyTagsArePresentInCard(columnName: string, taskCardName: string, tagNames: string[]): Promise<void> {
        for (const tag of tagNames) {
            await expect(this.TagCard(columnName, taskCardName, tag)).toBeVisible();
        }
    }

}
