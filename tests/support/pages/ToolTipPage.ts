import { expect, type Locator, type Page } from "@playwright/test"

export class ToolTipPage {
  private readonly buttonHover: Locator
  private readonly toolTip: Locator

  constructor(page: Page) {

    // Botão que, ao passar o mouse (hover), exibe o tooltip
    this.buttonHover = page.locator("#toolTipButton")

    // Elemento do tooltip (texto exibido dentro do tooltip quando ele aparece)
    this.toolTip = page.locator("xpath=//div[@class='tooltip-inner']")
  }

  async mouseButtonHover(): Promise<void> {
    // Realiza hover no botão para disparar a exibição do tooltip
    await this.buttonHover.hover()
  }

  async assertToolTipText(text: string): Promise<void> {
    // Valida o texto exibido no tooltip
    await expect(this.toolTip).toHaveText(text)
  }
}
