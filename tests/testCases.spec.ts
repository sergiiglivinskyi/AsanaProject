import { test } from "@playwright/test";
import { LoginPage } from "../pageObjects/LoginPage.ts";
import { config } from "../config.ts";
import { HomePage } from "../pageObjects/HomePage.ts";
import { BoardPage } from "../pageObjects/BoardPage.ts";
import testData from "../testData/testData.json";

test.describe("Asana Tests", () => {

    testData.forEach(({ board, taskCard, column, tags, }) => {

        test(`Verify task's card "${taskCard}" in column "${column}"`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            const homePage = new HomePage(page);
            const boardPage = new BoardPage(page);

            //Login to the Asana product
            await loginPage.navigateTo(config.url);
            await loginPage.login(config.email!, config.password!);
            await homePage.HomeLink().waitFor({ state: "visible" });

            //Navigate to the specific Project's Board
            await homePage.navigateToBoard(board);

            //Verify Task's Card data
            await boardPage.verifyTaskCardIsPresentInSpecificColumn(column, taskCard);
            await boardPage.verifyTagsArePresentInCard(column, taskCard, tags);
        });

    });

});
