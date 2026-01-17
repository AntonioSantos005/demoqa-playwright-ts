import { expect, type Locator, type Page } from "@playwright/test"
import { Utils } from "../utils/Utils"

export class DragPage {
  private readonly page: Page

  private readonly droppable: Locator

  constructor(page: Page) {
    this.page = page

    // Usa um seletor mais específico para evitar conflito no DemoQA existem vários elementos com id="droppable" em abas diferentes
    this.droppable = page.locator("#simpleDropContainer #droppable")
  }

  async dragAndDrop(): Promise<void> {
    // Executa o drag and drop do elemento #draggable para o alvo #simpleDropContainer #droppable
    await Utils.dragAndDrop(this.page, "#draggable", "#simpleDropContainer #droppable")
  }

  async assertDroppedText(texto: string): Promise<void> {
    // Valida o texto do elemento droppable após o drop.
    await expect(this.droppable).toHaveText(texto)
  }
}
