import { test } from "@playwright/test"
import { ToolTipPage } from "./support/pages/ToolTipPage"

test.describe("ToolTip", () => {
  test.beforeEach(async ({ page }) => {
    // Usa baseURL do playwright.config.ts
    await page.goto("/tool-tips")
  })

  test("view tooltip", async ({ page }) => {
    const toolTipPage = new ToolTipPage(page)

    // Faz hover no botão para exibir o tooltip
    await toolTipPage.mouseButtonHover()

    // Valida o texto exibido no tooltip
    await toolTipPage.assertToolTipText("You hovered over the Button")
  })
})
