import { test } from "@playwright/test"
import { ButtonsPage } from "./support/pages/ButtonsPage"

test.describe("Buttons", () => {
  test.beforeEach(async ({ page }) => {
    // Usa baseURL do playwright.config.ts
    await page.goto("/buttons")
  })

  test("double click", async ({ page }) => {
    const buttons = new ButtonsPage(page)

    // Executa duplo clique no botão
    await buttons.doubleClick()

    // Valida a mensagem exibida após o duplo clique
    await buttons.assertDoubleClickMessage("You have done a double click")
  })

  test("right click", async ({ page }) => {
    const buttons = new ButtonsPage(page)

    // Executa clique com botão direito no botão
    await buttons.rightClick()

    // Valida a mensagem exibida após o clique direito
    await buttons.assertRightClickMessage("You have done a right click")
  })
})
