import { expect, type Locator, type Page } from "@playwright/test"

export class MenuPage {

  private readonly mainItem2: Locator
  private readonly subSubList: Locator
  private readonly subSubItem1: Locator

  constructor(page: Page) {

    // Item do menu principal (nível 1) que abre o submenu ao passar o mouse
    this.mainItem2 = page.locator("xpath=//a[.='Main Item 2']")

    // Item do submenu (nível 2) que abre o nível 3 ao passar o mouse
    this.subSubList = page.locator("xpath=//a[.='SUB SUB LIST »']")

    // Item do nível 3 que deve aparecer após navegar pelos hovers
    this.subSubItem1 = page.locator("xpath=//a[.='Sub Sub Item 1']")
  }

  async checkLevel3Item(): Promise<void> {
    // Faz hover no item principal para abrir o submenu
    await this.mainItem2.hover()

    // Faz hover no item do submenu para abrir o nível 3
    await this.subSubList.hover()
  }

  async assertLevel3Item(): Promise<void> {
    // Valida se o item do nível 3 está visível na tela
    await expect(this.subSubItem1).toBeVisible()
  }
}
