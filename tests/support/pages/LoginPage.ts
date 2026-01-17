import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  private readonly inputUserName: Locator;
  private readonly inputPassword: Locator;
  private readonly buttonLogin: Locator;
  private readonly textUserName: Locator;
  private readonly textInvalidLogin: Locator;

  constructor(page: Page) {
    // Campo de username (input)
    this.inputUserName = page.locator("#userName");

    // Campo de senha (input)
    this.inputPassword = page.locator("#password");

    // Botão de login
    this.buttonLogin = page.locator("#login");

    // Texto exibido após login com sucesso (mostra o username logado)
    this.textUserName = page.locator("#userName-value");

    // Texto exibido quando o login é inválido (mensagem/label de erro)
    this.textInvalidLogin = page.locator("#name");
  }

  async typeInputUserName(userName: string): Promise<void> {
    // Preenche o campo de username
    await this.inputUserName.fill(userName);
  }

  async typeInputPassword(password: string): Promise<void> {
    // Preenche o campo de senha
    await this.inputPassword.fill(password);
  }

  async clickButtonLogin(): Promise<void> {
    // Clica no botão Login para submeter o formulário
    await this.buttonLogin.click();
  }

  async assertUserNameText(userName: string): Promise<void> {
    // Valida se o username exibido na tela é o esperado (login com sucesso)
    await expect(this.textUserName).toHaveText(userName);
  }

  async assertInvalidLoginText(txtInvalidLogin: string): Promise<void> {
    // Valida a mensagem exibida quando o login falha
    await expect(this.textInvalidLogin).toHaveText(txtInvalidLogin);
  }
}
