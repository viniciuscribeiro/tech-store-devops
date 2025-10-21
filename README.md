# Tech Store Inteligente 🧠✨

<br>

## 📖 Sobre o Projeto

A **Tech Store Inteligente** é uma vitrine de e-commerce full-stack desenvolvida como um projeto de portfólio para demonstrar habilidades em arquitetura de microsserviços e desenvolvimento de interfaces modernas.

O grande diferencial deste projeto é a sua arquitetura desacoplada, composta por três serviços independentes:

1.  **Frontend em React:** Uma interface de usuário reativa, visualmente atraente e com animações fluidas.
2.  **API Principal em Node.js:** Um gateway que gerencia os dados dos produtos e se comunica com os outros serviços.
3.  **Serviço de IA em Python:** Um microsserviço especializado que fornece recomendações de produtos com base em um algoritmo de filtragem colaborativa simples.

Este projeto simula um ambiente de desenvolvimento moderno e demonstra a capacidade de integrar diferentes tecnologias para criar uma solução coesa e funcional.

-----

## ✨ Principais Funcionalidades

  - **Interface Moderna:** Design com tema escuro, gradientes e efeitos de "Glassmorphism" para uma estética sofisticada.
  - **Animações Fluidas:** Efeitos de carregamento em "esqueleto" (skeleton loading) e animações de entrada e hover nos cards de produto, proporcionando uma experiência de usuário (UX) superior.
  - **Arquitetura de Microsserviços:** Backend desacoplado, facilitando a manutenção e escalabilidade.
  - **Comunicação Inter-serviços:** O frontend consome dados da API Node.js, que por sua vez consulta o serviço de IA em Python para obter inteligência de negócio.
  - **Backend Inteligente:** Lógica de recomendação simples ("usuários que viram X também viram Y") implementada em Python com Pandas.

-----

## 🏗️ Arquitetura do Sistema

O sistema é dividido em três componentes principais que se comunicam via API REST:

```
┌──────────────────┐      ┌─────────────────────────┐      ┌─────────────────────────┐
│                  │      │                         │      │                         │
│   Frontend       │──────▶   API Principal         │──────▶   Serviço de IA        │
│   (React @ 5173) │      │   (Node.js @ 3333)      │      │   (Python @ 8000)       │
│                  │◀──────   (com Banco de Dados)  │◀──────                        │
│                  │      │                         │      │                         │
└──────────────────┘      └─────────────────────────┘      └─────────────────────────┘
```

1.  **Frontend (React):** Responsável por toda a apresentação visual e interação com o usuário.
2.  **API Principal (Node.js):** Atua como um *API Gateway*, centralizando as regras de negócio, gerenciando os dados dos produtos no banco de dados (SQLite via Prisma) e orquestrando a comunicação com o serviço de IA.
3.  **Serviço de IA (Python):** Um microsserviço focado e especializado. Recebe o histórico de interações e um ID de produto, e devolve uma lista de produtos recomendados.

-----

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

**Frontend:**

  - **React** com **Vite**
  - **TypeScript**
  - **Chakra UI** (Biblioteca de Componentes)
  - **Framer Motion** (Animações)
  - **Axios** (Cliente HTTP)

**Backend:**

  - **API Principal:**
      - **Node.js**
      - **Express.js**
      - **TypeScript**
      - **Prisma ORM** (Comunicação com o Banco de Dados)
  - **Serviço de IA:**
      - **Python**
      - **FastAPI** (Framework da API)
      - **Pandas** (Manipulação de Dados)

**Banco de Dados:**

  - **SQLite**

-----

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente local.

**Pré-requisitos:**

  - [Node.js](https://nodejs.org/en/) (v18 ou superior)
  - [Python](https://www.python.org/downloads/) (v3.8 ou superior)

**1. Clone o repositório:**

```bash
git clone https://github.com/viniciuscribeiro/projeto-recomendacao.git
cd projeto-recomendacao
```

**2. Execute o Backend (API Principal - Node.js):**

```bash
cd api-ecommerce
npm install
npx prisma migrate dev
npm run dev
# O servidor estará rodando em http://localhost:3333
```

**3. Execute o Backend (Serviço de IA - Python):**

```bash
# Em um novo terminal
cd servico-ia
python -m venv venv
# No Windows:
.\venv\Scripts\Activate.ps1
# No Linux/macOS:
source venv/bin/activate
pip install -r requirements.txt # (Você precisará criar este arquivo)
uvicorn main:app --reload
# O servidor estará rodando em http://localhost:8000
```

> **Nota:** Para o passo `pip install`, crie um arquivo `requirements.txt` na pasta `servico-ia` e adicione as dependências: `fastapi`, `uvicorn`, `pandas`.

**4. Execute o Frontend (React):**

```bash
# Em um terceiro terminal
cd frontend
npm install
npm run dev
# A aplicação estará disponível em http://localhost:5173
```

-----

## 📞 Contato

**Vinicius Cordeiro Ribeiro**

  - **Email:** viniciuscordeiroribeiro@gmail.com
  - **LinkedIn:** [https://www.linkedin.com/in/viniciuscordeiroribeiro/](https://www.linkedin.com/in/viniciuscordeiroribeiro/)
  - **GitHub:** [https://github.com/viniciuscribeiro](https://github.com/viniciuscribeiro)