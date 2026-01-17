import { test } from "@playwright/test"
import { LoginPage } from "./support/pages/LoginPage"

test.describe("Login", () => {
  test.beforeEach(async ({ page }) => {
    // Usa baseURL do playwright.config.ts
    await page.goto("/login")
  })

  test("login successfully", async ({ page }) => {
    const loginPage = new LoginPage(page)

    const userName = "antonioSantos"

    // Preenche usuário e senha válidos e realiza o login
    await loginPage.typeInputUserName(userName)
    await loginPage.typeInputPassword("Teste0**")
    await loginPage.clickButtonLogin()

    // Valida se o username foi exibido na tela (login com sucesso)
    await loginPage.assertUserNameText(userName)
  })

  test("invalid username or password", async ({ page }) => {
    const loginPage = new LoginPage(page)

    // Preenche credenciais inválidas e tenta realizar login
    await loginPage.typeInputUserName("adsa")
    await loginPage.typeInputPassword("sdfsdf")
    await loginPage.clickButtonLogin()

    // Valida a mensagem de erro exibida no login inválido
    await loginPage.assertInvalidLoginText("Invalid username or password!")
  })
})
