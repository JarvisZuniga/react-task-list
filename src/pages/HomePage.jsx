import { Text, Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import image from '../image/TL.jpg'; 

const HomePage = () => {
  return (  
    <Flex direction="column" alignItems="center">
      <Link to="/Tareas">
        <img src={image} alt="Imagen de inicio" style={{ cursor: 'pointer' }} />
      </Link>
      
      <Box bg='gray' w='100%' p={4} color='white' borderRadius='md' marginTop="20px">
        <Text fontSize="2xl" mb={4}>
          Bienvenido a la Página de Inicio
        </Text>      
        <Text fontSize="lg" mb={4}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quo at iste voluptas vitae, 
          adipisci, tempora esse iure quaerat vel nostrum beatae. Ea, dolor tempore debitis facilis 
          inventore nobis natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste 
          mollitia numquam! Omnis, nisi ea! Quas quos libero odio quibusdam perspiciatis, nisi facere 
          fugit in aspernatur dignissimos hic architecto tenetur.  
        </Text>  
      </Box> 
    </Flex>
  );
};

export default HomePage;
