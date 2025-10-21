# Tech Store: Pipeline de CI/CD com Docker e GitHub Actions 🚀🐳

![Badge](https://img.shields.io/badge/status-concluído-green)
![Badge](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Badge](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Badge](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)


<br>

> **Demonstração:** Este repositório implementa um pipeline de CI/CD completo para uma aplicação de microsserviços. A imagem abaixo mostra o workflow do GitHub Actions construindo e publicando com sucesso as imagens Docker para cada serviço após um `git push`.

---

## 📖 Sobre o Projeto

Este projeto demonstra a aplicação de práticas de DevOps para automatizar o processo de build e publicação de uma aplicação web de microsserviços. O foco não é a aplicação em si (uma loja de tecnologia com um sistema de recomendação), mas sim a **infraestrutura, containerização e o pipeline de integração e entrega contínua (CI/CD)**.

O objetivo é simular um ambiente de desenvolvimento profissional onde cada alteração no código principal dispara um processo automatizado que prepara o software para o deploy.

---

## ✨ Principais Conceitos de DevOps Aplicados

- **Containerização:** Cada serviço da aplicação (Frontend, API Principal, Serviço de IA) é encapsulado em seu próprio contêiner Docker, garantindo consistência e isolamento entre os ambientes de desenvolvimento e produção.
- **Orquestração de Contêineres:** O `Docker Compose` é utilizado para definir e gerenciar a aplicação multi-contêiner localmente, permitindo que todo o sistema seja iniciado com um único comando.
- **Integração Contínua (CI):** A cada `push` para a branch `main`, o GitHub Actions automaticamente executa o processo de build das três imagens Docker.
- **Entrega Contínua (CD):** Após o build, o workflow faz o push das novas imagens para o Docker Hub, tornando-as disponíveis para serem implantadas em um ambiente de produção.

---

## 🏗️ Arquitetura e Fluxo de CI/CD

O fluxo de automação é o coração deste projeto e segue 4 passos principais:

**1. 👨‍💻 Desenvolvedor → `git push`**
> Tudo começa quando o desenvolvedor envia o novo código (`git push`) para a branch `main` do repositório no GitHub.

**2. 🤖 GitHub → GitHub Actions**
> O push aciona automaticamente o workflow definido em `.github/workflows/`. Uma máquina virtual é iniciada para executar os próximos passos.

**3. 📦 Ação → Build & Push**
> O workflow executa o build de cada um dos três serviços (`api`, `ia`, `frontend`), criando imagens Docker otimizadas para cada um. Após o build, ele faz o push dessas imagens para o Docker Hub.

**4. 🐳 Docker Hub → Armazenamento**
> O Docker Hub recebe e armazena as novas versões das imagens, que agora estão prontas para serem baixadas e implantadas em qualquer ambiente de produção.

---

## 🚀 Tecnologias Utilizadas

**DevOps & Infraestrutura:**
- **Docker** & **Docker Compose**
- **GitHub Actions** (CI/CD)
- **Docker Hub** (Container Registry)

**Stack da Aplicação:**
- **Frontend:** React, TypeScript, Vite, Nginx
- **Backend (API):** Node.js, Express, TypeScript, Prisma
- **Backend (IA):** Python, FastAPI, Pandas

-----

## ⚙️ Como Executar Localmente

Com Docker e Docker Compose instalados, basta um comando na raiz do projeto:

```bash
# Constrói as imagens (se não existirem) e inicia todos os serviços
docker-compose up
```

A aplicação estará disponível em `http://localhost:3000`.

Para parar e remover os contêineres, use:

```bash
docker-compose down
```

-----

## 📞 Contato

**Vinicius Cordeiro Ribeiro**

  - **Email:** viniciuscordeiroribeiro@gmail.com
  - **LinkedIn:** [https://www.linkedin.com/in/viniciuscordeiroribeiro/](https://www.linkedin.com/in/viniciuscordeiroribeiro/)
  - **GitHub:** [https://github.com/viniciuscribeiro](https://github.com/viniciuscribeiro)
