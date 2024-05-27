import { expect, test } from '@playwright/test';
import cs from 'convert-stream';
import pdf from 'pdf-parse';

import { createPad, keyCloakSignIn } from './common';

test.beforeEach(async ({ page, browserName }) => {
  await page.goto('/');
  await keyCloakSignIn(page, browserName);
});

test.describe('Pad Tools', () => {
  test('it converts the pad to pdf with a template integrated', async ({
    page,
    browserName,
  }) => {
    const downloadPromise = page.waitForEvent('download', (download) => {
      return download.suggestedFilename().includes('impress-document.pdf');
    });

    const [randomPad] = await createPad(page, 'pad-editor', browserName, 1);
    await expect(page.locator('h2').getByText(randomPad)).toBeVisible();

    await page.locator('.ProseMirror.bn-editor').click();
    await page.locator('.ProseMirror.bn-editor').fill('Hello World');

    await page.getByLabel('Open the document options').click();
    await page
      .getByRole('button', {
        name: 'Generate PDF',
      })
      .click();

    await page
      .getByRole('button', {
        name: 'Download',
      })
      .click();

    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe('impress-document.pdf');

    const pdfBuffer = await cs.toBuffer(await download.createReadStream());
    const pdfText = (await pdf(pdfBuffer)).text;

    expect(pdfText).toContain('Monsieur le Premier Ministre'); // This is the template text
    expect(pdfText).toContain('La directrice'); // This is the template text
    expect(pdfText).toContain('Hello World'); // This is the pad text
  });

  test('it updates the pad', async ({ page, browserName }) => {
    const [randomPad] = await createPad(
      page,
      'pad-update',
      browserName,
      1,
      true,
    );
    await expect(page.locator('h2').getByText(randomPad)).toBeVisible();

    await page.getByLabel('Open the document options').click();
    await page
      .getByRole('button', {
        name: 'Update document',
      })
      .click();

    await expect(
      page.locator('h2').getByText(`Update document "${randomPad}"`),
    ).toBeVisible();

    await expect(
      page.getByRole('checkbox', { name: 'Is it public ?' }),
    ).toBeChecked();

    await page.getByText('Document name').fill(`${randomPad}-updated`);
    await page.getByText('Is it public ?').click();

    await page
      .getByRole('button', {
        name: 'Validate the modification',
      })
      .click();

    await expect(
      page.getByText('The document has been updated.'),
    ).toBeVisible();

    const panel = page.getByLabel('Documents panel').first();
    await expect(
      panel.locator('li').getByText(`${randomPad}-updated`),
    ).toBeVisible();

    await page.getByLabel('Open the document options').click();
    await page
      .getByRole('button', {
        name: 'Update document',
      })
      .click();

    await expect(
      page.getByRole('checkbox', { name: 'Is it public ?' }),
    ).not.toBeChecked();
  });

  test('it deletes the pad', async ({ page, browserName }) => {
    const [randomPad] = await createPad(page, 'pad-delete', browserName, 1);
    await expect(page.locator('h2').getByText(randomPad)).toBeVisible();

    await page.getByLabel('Open the document options').click();
    await page
      .getByRole('button', {
        name: 'Delete document',
      })
      .click();

    await expect(
      page.locator('h2').getByText(`Deleting the document "${randomPad}"`),
    ).toBeVisible();

    await page
      .getByRole('button', {
        name: 'Confirm deletion',
      })
      .click();

    await expect(
      page.getByText('The document has been deleted.'),
    ).toBeVisible();

    await expect(
      page.getByRole('button', { name: 'Create a new document' }),
    ).toBeVisible();

    const panel = page.getByLabel('Documents panel').first();
    await expect(panel.locator('li').getByText(randomPad)).toBeHidden();
  });

  test('it cannot update or delete if not the owner', async ({
    page,
    browserName,
  }) => {
    const [padName] = await createPad(
      page,
      'pad-tools-right-management',
      browserName,
      1,
      true,
    );

    await page.getByText('My account').click();
    await page.getByText('Logout').first().click();

    await page.getByLabel('Restart login').click();

    const browserNames = ['chromium', 'webkit'];
    const newBrowserName = browserNames.find((name) => name !== browserName)!;

    await keyCloakSignIn(page, newBrowserName);

    const panel = page.getByLabel('Documents panel').first();
    await panel.getByText(padName).click();

    await page.getByLabel('Open the document options').click();

    await expect(
      page.getByRole('button', { name: 'Generate PDF' }),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Update document' }),
    ).toBeHidden();
    await expect(
      page.getByRole('button', { name: 'Delete document' }),
    ).toBeHidden();
  });
});