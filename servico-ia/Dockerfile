# /servico-ia/Dockerfile

# 1. Imagem Base: Usamos uma imagem oficial e leve do Python
FROM python:3.9-slim

# 2. Diretório de Trabalho
WORKDIR /usr/src/app

# 3. Copiar e Instalar Dependências: Copia primeiro o arquivo de dependências
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# 4. Copiar o Restante do Código
COPY . .

# 5. Expor a Porta: Nosso serviço FastAPI roda na porta 8000
EXPOSE 8000

# 6. Comando de Inicialização: Inicia o servidor Uvicorn
# O '--host 0.0.0.0' é crucial para que o serviço seja acessível de fora do contêiner
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]