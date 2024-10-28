// Card.tsx
import React from 'react';
import { Box, Heading, Text, Input, Button } from '@chakra-ui/react';

interface ICard {
  id: number;
  paragraph: string;
  details: string;
  onSubmit: (e: React.FormEvent) => void;
}

export const Card: React.FC<ICard> = ({ id, paragraph, details, onSubmit }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p="6"
      boxShadow="lg"
      width="100%"
      maxWidth="400px"
      textAlign="center"
      backgroundColor="#e0f7fa" // Cor de fundo do card
    >
      <Heading size="md" mb="4">DIO BANK</Heading>
      <Text mb="2">{paragraph}</Text>
      <Text mb="4">{details}</Text>

      {/* Formulário de Login */}
      <form onSubmit={onSubmit}>
        <Input placeholder="Email" mb="3" type="email" required />
        <Input placeholder="Senha" mb="3" type="password" required />
        <Button colorScheme="teal" type="submit">Login</Button>
      </form>
    </Box>
  );
};

export default Card;
