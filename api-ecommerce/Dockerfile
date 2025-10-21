# /api-ecommerce/Dockerfile

# 1. Imagem Base: Começamos com uma imagem oficial do Node.js
FROM node:18-alpine

# 2. Diretório de Trabalho: Define a pasta onde nosso código ficará dentro do contêiner
WORKDIR /usr/src/app

# 3. Copiar Arquivos: Copia o package.json e package-lock.json para o contêiner
# Usamos '*' para copiar ambos os arquivos
COPY package*.json ./

# 4. Instalar Dependências: Roda o npm install dentro do contêiner
RUN npm install

# 5. Copiar o Prisma: O Prisma precisa de um passo extra
COPY prisma ./prisma/

# 6. Gerar o Cliente Prisma: Roda o comando para gerar o cliente Prisma dentro do contêiner
RUN npx prisma generate

# 7. Copiar o Restante do Código: Copia todo o resto do nosso código-fonte
COPY . .

# 8. Expor a Porta: Informa ao Docker que nosso app roda na porta 3333
EXPOSE 3333

# 9. Comando de Inicialização: O comando que será executado quando o contêiner iniciar
CMD [ "npm", "run", "dev" ]