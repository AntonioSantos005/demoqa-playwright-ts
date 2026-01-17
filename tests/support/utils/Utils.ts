import { expect, type Locator, type Page } from "@playwright/test"

export class Utils {
  static normalize(text: string): string {
    // Normaliza o texto:
    // - troca qualquer sequência de espaços/quebras de linha/tab por um único espaço
    // - remove espaços extras no início/fim
    // Isso ajuda quando o site quebra texto em várias linhas e o assert precisa ser “estável”.
    return text.replace(/\s+/g, " ").trim()
  }

  static async expectNormalizedText(locator: Locator, expected: string): Promise<void> {
    // Lê o texto real exibido no elemento (innerText considera o que está visível/renderizado).
    const actual = Utils.normalize(await locator.innerText())

    // Compara o texto real com o esperado, ambos normalizados,
    // evitando falhas por quebra de linha ou múltiplos espaços.
    expect(actual).toBe(Utils.normalize(expected))
  }

  static async dragAndDrop(page: Page, fromSelector: string, toSelector: string): Promise<void> {
    // Executa drag and drop de um seletor de origem para um seletor de destino.
    // Playwright faz isso nativamente com page.dragAndDrop().
    // Importante: os seletores precisam ser únicos (senão pode dar strict mode violation).
    await page.dragAndDrop(fromSelector, toSelector)
  }
}
