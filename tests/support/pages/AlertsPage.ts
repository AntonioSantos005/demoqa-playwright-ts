import { expect, type Locator, type Page } from "@playwright/test"

export class AlertsPage {
  private readonly page: Page

  private readonly buttonConfirm: Locator
  private readonly result: Locator

  private readonly buttonPrompt: Locator
  private readonly resultPrompt: Locator

  constructor(page: Page) {
    this.page = page

    // Confirm box
    this.buttonConfirm = page.locator("#confirmButton")
    this.result = page.locator("#confirmResult")

    // Prompt (no DemoQA o id é "promtButton" mesmo)
    this.buttonPrompt = page.locator("#promtButton")
    this.resultPrompt = page.locator("#promptResult")
  }

  // Clica no Confirm Box e aceita (OK)
  async confirmBoxOk() {
    await Promise.all([
      this.page.waitForEvent("dialog").then(async (d) => {
        console.log(`Dialog message: ${d.message()}`)
        await d.accept()
      }),
      this.buttonConfirm.click()
    ])
  }

  // Clica no Confirm Box e cancela (Cancel)
  async confirmBoxCancel() {
    await Promise.all([
      this.page.waitForEvent("dialog").then(async (d) => {
        console.log(`Dialog message: ${d.message()}`)
        await d.dismiss()
      }),
      this.buttonConfirm.click()
    ])
  }

  // Clica no Prompt e preenche com texto + OK
  async promptOkWithText(text: string) {
    await Promise.all([
      this.page.waitForEvent("dialog").then(async (d) => {
        console.log(`Dialog message: ${d.message()}`)
        await d.accept(text)
      }),
      this.buttonPrompt.click()
    ])
  }

  // Assertions
  async assertConfirmResult(msg: string) {
    await expect(this.result).toHaveText(msg)
  }

  async assertPromptResult(text: string) {
    await expect(this.resultPrompt).toHaveText(`You entered ${text}`)
  }
}
