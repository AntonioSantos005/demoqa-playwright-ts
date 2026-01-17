import { type Locator, type Page } from "@playwright/test"
import { Utils } from "../utils/Utils"

export class CheckboxPage {

  private readonly homeToggle: Locator
  private readonly downloadsToggle: Locator

  private readonly wordFileCheckbox: Locator
  private readonly excelFileCheckbox: Locator

  private readonly result: Locator

  constructor(page: Page) {

    // Expande/colapsa o nó "Home" na árvore
    this.homeToggle = page.locator("xpath=//span[.='Home']//button")

    // Expande/colapsa o nó "Downloads" dentro da árvore
    this.downloadsToggle = page.locator("xpath=//span[.='Downloads']//button")

    // Marca o item "Word File"
    this.wordFileCheckbox = page.locator("xpath=//label[@for='tree-node-wordFile']")

    // Marca o item "Excel File"
    this.excelFileCheckbox = page.locator("xpath=//label[@for='tree-node-excelFile']")

    // Resultado exibido após selecionar itens
    this.result = page.locator("#result")
  }

  async clickExpandHome() {
    // Abre a seção "Home" para exibir itens filhos
    await this.homeToggle.click()
  }

  async clickExpandDownloads() {
    // Abre a seção "Downloads" para exibir os arquivos
    await this.downloadsToggle.click()
  }

  async clickCheckWordFile() {
    // Seleciona o checkbox do Word
    await this.wordFileCheckbox.click()
  }

  async clickCheckExcelFile() {
    // Seleciona o checkbox do Excel
    await this.excelFileCheckbox.click()
  }

  async assertSelectedFiles(expected: string) {
    // Valida o texto do resultado normalizando espaços/quebras de linha
    await Utils.expectNormalizedText(this.result, expected)
  }
}
