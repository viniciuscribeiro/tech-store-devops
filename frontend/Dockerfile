# /frontend/Dockerfile

# --- Estágio 1: O Ambiente de Build ---
FROM node:18-alpine AS builder

WORKDIR /app

# Copia e instala as dependências
COPY package*.json ./
RUN npm install

# Copia o resto do código-fonte
COPY . .

# Roda o comando de build para gerar a pasta 'dist'
RUN npm run build


# --- Estágio 2: O Servidor de Produção ---
FROM nginx:stable-alpine

# Copia os arquivos da pasta 'dist' do estágio 'builder' para a pasta pública do nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80, que é a porta padrão do nginx
EXPOSE 80

# Comando para iniciar o servidor nginx
CMD ["nginx", "-g", "daemon off;"]