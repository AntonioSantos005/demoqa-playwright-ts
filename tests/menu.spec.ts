import { test } from "@playwright/test"
import { MenuPage } from "./support/pages/MenuPage"

test.describe("Menu", () => {
  test.beforeEach(async ({ page }) => {
    // Usa baseURL do playwright.config.ts
    await page.goto("/menu")
  })

  test("check level 3 item", async ({ page }) => {
    const menuPage = new MenuPage(page)

    // Navega pelo menu usando hover (nível 1 -> nível 2) para exibir o nível 3
    await menuPage.checkLevel3Item()

    // Valida se o item do nível 3 ficou visível
    await menuPage.assertLevel3Item()
  })
})
