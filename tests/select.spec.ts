import { test, expect } from "@playwright/test"
import { SelectPage } from "./support/pages/SelectPage"

test.describe("Select", () => {
  test.beforeEach(async ({ page }) => {
    // Usa baseURL do playwright.config.ts
    await page.goto("/select-menu")
  })

  test("select option Yellow", async ({ page }) => {
    const selectPage = new SelectPage(page)

    // Seleciona a opção "Yellow" no select HTML tradicional
    await selectPage.clickOldSelect("Yellow")

    // Valida que a opção marcada no <select> é "Yellow"
    await expect(page.locator("#oldSelectMenu option:checked")).toHaveText("Yellow")

    // Screenshot do estado final (obs: esse arquivo será sobrescrito se rodar mais testes)
    await page.screenshot({ path: "screenshot.png", fullPage: true })
  })

  test("select option Blue", async ({ page }) => {
    const selectPage = new SelectPage(page)

    // Seleciona a opção "Blue" no select HTML tradicional
    await selectPage.clickOldSelect("Blue")

    // Valida que a opção marcada no <select> é "Blue"
    await expect(page.locator("#oldSelectMenu option:checked")).toHaveText("Blue")

    // Screenshot do estado final (obs: esse arquivo será sobrescrito se rodar mais testes)
    await page.screenshot({ path: "screenshot.png", fullPage: true })
  })

  test("dynamic select - Group 2, option 2", async ({ page }) => {
    const selectPage = new SelectPage(page)

    // Seleciona uma opção no select dinâmico (React Select)
    await selectPage.clickDynamicSelect("Group 2, option 2")

    // Valida que o componente contém o texto da opção selecionada
    await expect(page.locator("#withOptGroup")).toContainText("Group 2, option 2")
  })

  test("dynamic select - A root option", async ({ page }) => {
    const selectPage = new SelectPage(page)

    // Seleciona uma opção no select dinâmico (React Select)
    await selectPage.clickDynamicSelect("A root option")

    // Valida que o componente contém o texto da opção selecionada
    await expect(page.locator("#withOptGroup")).toContainText("A root option")
  })
})
