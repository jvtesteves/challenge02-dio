// Header.tsx
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <Box as="header" className="header" padding="4" textAlign="center">
      <Heading size="lg" color="white">
        DIO BANK
      </Heading>
    </Box>
  );
};

export default Header;
