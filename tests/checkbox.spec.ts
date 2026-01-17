import { test } from "@playwright/test"
import { CheckboxPage } from "./support/pages/CheckboxPage"

test.describe("Checkbox", () => {
  test.beforeEach(async ({ page }) => {
    // Usa baseURL do playwright.config.ts
    await page.goto("/checkbox")
  })

  test("select checkbox", async ({ page }) => {
    const checkboxPage = new CheckboxPage(page)

    // Expande "Home" para visualizar os nós internos
    await checkboxPage.clickExpandHome()

    // Expande "Downloads" para mostrar os arquivos
    await checkboxPage.clickExpandDownloads()

    // Seleciona os checkboxes de Word e Excel
    await checkboxPage.clickCheckWordFile()
    await checkboxPage.clickCheckExcelFile()

    // Valida o texto exibido com os itens selecionados
    await checkboxPage.assertSelectedFiles(
      "You have selected : downloads wordFile excelFile"
    )
  })
})
