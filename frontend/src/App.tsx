// ARQUIVO COMPLETO: /frontend/src/App.tsx

// --- 1. IMPORTAÇÕES ---
// React e hooks
import { useState, useEffect } from 'react';
// Ferramenta para chamar a API
import axios from 'axios';
// Componentes do Chakra UI que estamos usando
import { Box, Container, Heading, SimpleGrid, Text, Image, VStack, Center } from '@chakra-ui/react';
// Nosso novo componente de esqueleto
import { ProductCardSkeleton } from './components/ProductCardSkeleton';


// --- 2. DEFINIÇÃO DE TIPOS ---
// Define a "forma" de um objeto de produto para o TypeScript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}


// --- 3. O COMPONENTE PRINCIPAL ---
function App() {
  // --- 4. DECLARAÇÃO DOS ESTADOS ---
  // << ONDE VOCÊ BOTA O CÓDIGO DOS ESTADOS >>
  // Estados para guardar a lista de produtos, o status de carregamento e erros
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  // --- 5. LÓGICA PARA BUSCAR DADOS (EFEITOS COLATERAIS) ---
  // useEffect é usado para executar uma ação quando o componente é montado
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3333/api/products');
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError("Falha ao carregar os produtos. O servidor backend está rodando?");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // O array vazio [] significa que este efeito roda apenas uma vez


  // --- 6. O QUE O COMPONENTE RENDERIZA (JSX) ---
  // << SEU BLOCO DE CÓDIGO ENTRA AQUI >>
  return (
    <Box bg="gray.900" minH="100vh" color="white">
      <Container maxW="container.xl" py={10}>
        <VStack spacing={4} mb={10}>
          <Heading as="h1" size="2xl">Tech Store Inteligente</Heading>
          <Text fontSize="lg" color="gray.400">Produtos disponíveis</Text>
        </VStack>

        {/* --- SEÇÃO DE LOADING ATUALIZADA --- */}
        {loading && (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {/* Cria um array de 6 posições para mostrar 6 esqueletos */}
            {Array.from({ length: 6 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </SimpleGrid>
        )}
        
        {/* Mostra uma mensagem de erro se a busca falhar */}
        {error && (
          <Center h="200px">
            <Text color="red.400">{error}</Text>
          </Center>
        )}
        
        {/* Mostra a grade de produtos quando os dados forem carregados com sucesso */}
        {!loading && !error && (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {products.map((product) => (
              <Box
                key={product.id}
                bg="gray.800"
                p={6}
                borderRadius="lg"
                border="1px"
                borderColor="gray.700"
                transition="all 0.2s"
                _hover={{ transform: 'scale(1.05)', borderColor: 'purple.400' }}
              >
                <VStack spacing={4}>
                  <Image src={product.imageUrl} alt={product.name} borderRadius="md" boxSize="200px" objectFit="cover" />
                  <Heading as="h3" size="md">{product.name}</Heading>
                  <Text color="gray.400" textAlign="center">{product.description}</Text>
                  <Text fontSize="2xl" fontWeight="bold" color="purple.300">
                    R$ {product.price.toFixed(2)}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Container>
    </Box>
  );
}

export default App;