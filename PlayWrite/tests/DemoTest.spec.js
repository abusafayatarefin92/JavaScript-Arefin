import {test, expect} from '@playwright/test';

test.skip(
    "My First Test",
    async ({page}) => {
        // await page.goto("/");
        // await page.pause();
        await page.goto("https://www.saucedemo.com/v1/");
        await page.waitForTimeout(5000);

        await page.locator("#user-name").fill("standard_user");
        // await page.locator("#password").fill("secret_sauce");
        await page.getByRole("textbox", {name : "Password"}).fill("secret_sauce");
        // await page.getByText("LOGIN").click();
        await page.getByRole("button", {name: "LOGIN"}).click();
        // await page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click();
        await page.locator("(//button[@class='btn_primary btn_inventory'][normalize-space()='ADD TO CART'])[1]").click({timeout: 5000});
        // await page.pause();
    }
);

test.skip(
    "User can successfully register",
    async ({page}) => {
        await page.goto("/register");

        const element = page.locator("//input[@type='text']");
        const count = element.count();
        console.log(count);

        await element.first().fill("Abu Safayat");
        await element.nth(1).fill("Arefin");
        await element.nth(2).fill("+8801788857672");
        await element.last().fill("Jhigatola, Dhanmondi");

        await page.pause();
    }
);

test(
    "Handling Web Table",
    async ({page}) => {
        await page.goto("/");
        await page.locator("#email").fill("admin@test.com");
        await page.locator("#password").fill("admin123");
        await page.locator("button[type='submit']").click();
        await page.waitForTimeout(5000);

        expect(page.getByRole("heading", {name: "Admin Dashboard"})).toBeVisible();

        // const actualText = page.getByRole("heading", {name: "Admin Dashboard"}).textContent();
        // await page.waitForTimeout(2000);
        // const expectedText = "Admin Dashboard";

        // expect(actualText).toBe(expectedText);
        // expect(actualText).toContain(expectedText);

        await page.locator("tbody tr").first().waitFor();
        const firstRow = page.locator("tbody tr").first();
        const cells = await firstRow.locator("td").allTextContents();

        console.log(cells);

        await page.pause();
    }
);