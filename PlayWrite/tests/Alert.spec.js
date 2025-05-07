import {test, expect} from '@playwright/test';

test(
    "Handle Normal ALert",
    async ({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.waitForTimeout(2000);

        page.on(
            "dialogue",
            async dialogue => {
                expect(dialogue.type()).toContain("alert");
                expect(dialogue.message()).toContain("I am an alert box");
                await dialogue.accept();
            }
        );

        await page.locator("#alertBtn").click();

        await page.pause();
    }
);

test.only(
    "Confirmation Dialogue / Alert with ok & cancel button",
    async ({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.waitForTimeout(2000);

        page.on(
            "dialogue",
            async dialogue => {
                expect(dialogue.type()).toContain("confirm");
                expect(dialogue.message()).toContain("Press a button");
                // await dialogue.accept();// for ok
                await dialogue.dismiss();// for cancel
            }
        );

        await page.locator("#confirmBtn").click();

        // const text = await page.locator("#demo").textContent();
        // expect(text).toContain("You pressed OK!");// for ok
        const text = await page.locator("#demo").textContent();
        expect(text).toContain("You pressed Cancel!");// for Cancel

        // await expect(page.locator("#demo")).toHaveText("You pressed OK!");// for ok
        await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");// for calcel

        await page.pause();
    }
);