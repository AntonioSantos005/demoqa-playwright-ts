import { test } from "@playwright/test"
import { DragPage } from "./support/pages/DragPage"

test.describe("Drag and Drop", () => {
  test.beforeEach(async ({ page }) => {
    // Usa baseURL do playwright.config.ts
    await page.goto("/droppable")
  })

  test("sucess drag and drop", async ({ page }) => {
    const dragPage = new DragPage(page)

    // Executa o drag and drop do elemento "Drag me" para a área "Drop here"
    await dragPage.dragAndDrop()

    // Valida se o texto do alvo mudou para "Dropped!" após soltar
    await dragPage.assertDroppedText("Dropped!")
  })
})
