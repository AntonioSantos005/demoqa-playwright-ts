import { expect, type Locator, type Page } from "@playwright/test"

export class ButtonsPage {

  // Botões
  private readonly doubleClickBtn: Locator
  private readonly rightClickBtn: Locator

  // Mensagens de resultado
  private readonly doubleClickMessage: Locator
  private readonly rightClickMessage: Locator

  constructor(page: Page) {

    this.doubleClickBtn = page.locator("#doubleClickBtn")
    this.rightClickBtn = page.locator("#rightClickBtn")

    this.doubleClickMessage = page.locator("#doubleClickMessage")
    this.rightClickMessage = page.locator("#rightClickMessage")
  }

  // Actions
  async doubleClick() {
    await this.doubleClickBtn.dblclick()
  }

  async rightClick() {
    await this.rightClickBtn.click({ button: "right" })
  }

  // Assertions
  async assertDoubleClickMessage(expected: string) {
    await expect(this.doubleClickMessage).toHaveText(expected)
  }

  async assertRightClickMessage(expected: string) {
    await expect(this.rightClickMessage).toHaveText(expected)
  }
}
