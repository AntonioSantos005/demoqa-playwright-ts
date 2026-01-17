import { type Locator, type Page } from "@playwright/test"

export class SelectPage {
  private readonly page: Page

  private readonly oldSelect: Locator
  private readonly dynamicSelect: Locator

  constructor(page: Page) {
    this.page = page

    // Select "antigo" (HTML <select>) onde dá para escolher opção via selectOption()
    this.oldSelect = page.locator("#oldSelectMenu")

    // Select dinâmico (estilo React Select), que abre um menu ao clicar
    this.dynamicSelect = page.locator("#withOptGroup")
  }

  async clickOldSelect(opcao: string): Promise<void> {
    // Seleciona uma opção pelo texto visível (label) no <select> tradicional
    await this.oldSelect.selectOption({ label: opcao })
  }

  async clickDynamicSelect(opcao: string): Promise<void> {
    // Abre o dropdown dinâmico (ele não é um <select> nativo)
    await this.dynamicSelect.click()

    // Localiza a opção dentro do menu que aparece ao abrir o select dinâmico
    // Aqui buscamos o item cujo texto seja igual ao valor passado em "opcao"
    const opcaoDinamica = this.page.locator(
      "xpath=//div[@class=' css-26l3qy-menu']//*[.='" + opcao + "']"
    )

    // Clica na opção escolhida para selecionar
    await opcaoDinamica.click()
  }
}
