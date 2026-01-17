import { test } from "@playwright/test"
import { AlertsPage } from "./support/pages/AlertsPage"

test.describe("Alerts", () => {
  test.beforeEach(async ({ page }) => {
    // Usa baseURL do playwright.config.ts
    await page.goto("/alerts")
  })

  test("confirmar alerta", async ({ page }) => {
    const alertsPage = new AlertsPage(page)

    // A Page Object já espera o dialog e aceita (OK) no momento do clique
    await alertsPage.confirmBoxOk()

    // Valida o resultado exibido na tela
    await alertsPage.assertConfirmResult("You selected Ok")
  })

  test("recusar alerta", async ({ page }) => {
    const alertsPage = new AlertsPage(page)

    // A Page Object já espera o dialog e cancela (Cancel) no momento do clique
    await alertsPage.confirmBoxCancel()

    // Valida o resultado exibido na tela
    await alertsPage.assertConfirmResult("You selected Cancel")
  })

  test("escrever no alerta", async ({ page }) => {
    const alertsPage = new AlertsPage(page)

    const texto = "textTeste"

    // A Page Object já espera o prompt, digita o texto e confirma (OK)
    await alertsPage.promptOkWithText(texto)

    // Valida o texto exibido no resultado do prompt
    await alertsPage.assertPromptResult(texto)
  })
})
