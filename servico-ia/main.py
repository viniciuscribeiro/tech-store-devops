# /servico-ia/main.py
from fastapi import FastAPI
from pydantic import BaseModel, Field
from typing import List
import pandas as pd

# --- Modelos de Dados (Pydantic) ---
# Pydantic nos ajuda a validar os dados que chegam na API

class InteractionEvent(BaseModel):
    """Define a estrutura de um evento de interação."""
    eventType: str
    productId: str
    userId: str

class RecommendationRequest(BaseModel):
    """Define o corpo da requisição para o endpoint de recomendação."""
    product_id: str = Field(..., alias='productId') # 'productId' no JSON -> 'product_id' no Python
    interactions: List[InteractionEvent]

# --- Inicialização da Aplicação FastAPI ---
app = FastAPI(
    title="Serviço de Recomendação Inteligente",
    description="Uma API para gerar recomendações de produtos com base nas interações dos usuários.",
    version="1.0.0"
)

# --- Lógica de Recomendação ---

def get_recommendations(product_id: str, interactions: List[InteractionEvent]):
    """
    Lógica de recomendação baseada em "Usuários que viram/compraram X também viram/compraram Y".
    """
    # Se não houver interações, não há como recomendar
    if not interactions:
        return []

    # Converte a lista de interações em um DataFrame do Pandas para fácil manipulação
    df = pd.DataFrame([vars(interaction) for interaction in interactions])

    # 1. Encontrar todos os usuários que interagiram com o produto de referência (product_id)
    users_who_interacted_with_product = df[df['productId'] == product_id]['userId'].unique()

    # 2. Obter todas as interações desses usuários
    interactions_from_relevant_users = df[df['userId'].isin(users_who_interacted_with_product)]

    # 3. Contar a ocorrência de todos os produtos com os quais esses usuários interagiram
    product_counts = interactions_from_relevant_users['productId'].value_counts()

    # 4. Remover o produto original da lista de recomendações
    product_counts = product_counts.drop(product_id, errors='ignore')

    # 5. Pegar os 5 produtos mais populares como recomendação
    recommended_product_ids = product_counts.head(5).index.tolist()

    return recommended_product_ids


# --- Endpoints da API ---

@app.get("/")
def read_root():
    """Endpoint inicial para verificar se o serviço está no ar."""
    return {"status": "Serviço de recomendação está operacional"}


@app.post("/recommendations", response_model=List[str])
def recommend_products(request: RecommendationRequest):
    """
    Recebe o ID de um produto e uma lista de todas as interações,
    e retorna uma lista de IDs de produtos recomendados.
    """
    recommended_ids = get_recommendations(request.product_id, request.interactions)
    return recommended_ids