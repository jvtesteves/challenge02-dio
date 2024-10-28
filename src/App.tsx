// App.tsx
import React from 'react';
import { ChakraProvider, Box, Center } from '@chakra-ui/react';
import Card from './components/Card';

function App() {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    welcomeMessage();
  };

  const welcomeMessage = () => {
    alert('Bem-vindo ao sistema!');
  };

  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#f0f4f8" padding="25px">
        <Center>
          <Card 
            id={1} 
            paragraph="Bem-vindo ao sistema" 
            details="Faça login para continuar" 
            onSubmit={handleLogin} 
          />
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
