# Miles Scraping Study

Projeto desenvolvido com foco em **estudo de web scraping e backend**, explorando a coleta automatizada de promoções relacionadas a programas de milhas.

A aplicação realiza o scraping de sites parceiros, armazena as promoções encontradas em um banco de dados e disponibiliza esses dados através de uma API.

## 🎯 Objetivo

O principal objetivo do projeto é estudar e praticar:

* Web scraping
* Desenvolvimento de APIs REST
* Persistência de dados
* Execução de tarefas automatizadas
* Organização de uma aplicação backend em TypeScript

## 🛠️ Tecnologias

* **Node.js** — ambiente de execução
* **TypeScript** — desenvolvimento da aplicação
* **Express** — criação da API
* **Axios** — requisições HTTP
* **Cheerio** — extração e processamento de dados HTML
* **MongoDB + Mongoose** — armazenamento das promoções
* **Node-Cron** — execução automática dos scrapers
* **dotenv** — gerenciamento de variáveis de ambiente

## 📌 Funcionamento

De forma geral, a aplicação segue este fluxo:

```text
Sites parceiros
      ↓
   Scraping
      ↓
Processamento das promoções
      ↓
     MongoDB
      ↓
      API
```

Os scrapers são executados automaticamente através de uma tarefa agendada, enquanto a API permite consultar as promoções armazenadas.

## 🚀 Executando o projeto

### Instalação

```bash
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env` com as configurações necessárias para a aplicação e conexão com o MongoDB.

### Desenvolvimento

```bash
npm run dev
```

O servidor será iniciado em modo de desenvolvimento utilizando `tsx`.

---

> Projeto criado para fins de estudo e prática de backend, web scraping e automação com Node.js.
