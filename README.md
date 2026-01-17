# DemoQA - Playwright + TypeScript (Page Object Model)

Projeto de testes automatizados usando **Playwright Test** com **TypeScript** e **Page Object Model (POM)**, focado em um padrão limpo e fácil de manter.

## Destaques

- **POM (Page Objects)**: locators e ações centralizados em classes.
- **Specs no padrão Playwright**: testes em `*.spec.ts` (sem Cucumber/BDD).
- **Screenshots sempre**: o projeto está configurado para **gerar prints em todos os testes**.
- **Vídeo ao falhar**: gravação habilitada e **mantida somente quando o teste falha**.
- **Trace no primeiro retry**: quando um teste falha e é reexecutado, gera **trace** para investigação.

> Configurações ficam em `playwright.config.ts`:
> - `screenshot: "on"`
> - `video: "retain-on-failure"`
> - `trace: "on-first-retry"`

## Requisitos

- Node.js **18+**

## Instalação

```bash
npm install
npx playwright install
```

## Como executar

### Rodar todos os testes

```bash
npm test
```

### Rodar em modo headed (com browser aberto)

```bash
npm run test:headed
```

### Rodar com UI Mode

```bash
npm run test:ui
```

### Rodar em modo debug

```bash
npm run test:debug
```

### Rodar apenas um arquivo

```bash
npx playwright test tests/alerts.spec.ts
```

### Rodar um teste específico pelo nome

```bash
npx playwright test -g "confirmar alerta"
```

### Rodar por projeto/navegador

```bash
npx playwright test --project=chromium
```

## Relatórios e evidências

### HTML Report

Após a execução:

```bash
npm run report
```

O relatório HTML abre com todos os testes, steps e anexos.

### Onde ficam os arquivos gerados?

- `playwright-report/` -> relatório HTML
- `test-results/` -> evidências por teste (screenshots, vídeos e traces quando aplicável)

### Screenshots (sempre)

O projeto está configurado para tirar **screenshots automaticamente** em todos os testes (`screenshot: "on"`).

### Vídeos (somente em falha)

A gravação está habilitada e o Playwright **mantém o vídeo apenas quando o teste falha** (`video: "retain-on-failure"`).

### Trace (no primeiro retry)

Quando um teste falha e é reexecutado, o Playwright gera **trace no primeiro retry** (`trace: "on-first-retry"`), facilitando a análise no report.

## Estrutura do projeto (resumo)

- `tests/` -> specs (`*.spec.ts`)
- `tests/support/pages/` -> Page Objects (POM)
- `tests/support/utils/` -> utilitários (ex.: normalização de texto, drag and drop)

## Base URL (opcional)

O projeto usa `baseURL` via config. Você pode sobrescrever com variável de ambiente:

```bash
BASE_URL=https://demoqa.com npm test
```
