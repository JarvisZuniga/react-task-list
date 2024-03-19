import { Link } from 'react-router-dom';
import { Box, VStack, IconButton, useDisclosure, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Menu = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();

  const bgColor = { light: 'white', dark: 'gray.800' };
  const textColor = { light: 'black', dark: 'white' };

  return (
    <Box position="fixed" left="0" top="0">
      <IconButton
        aria-label="Toggle Menu"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={onToggle}
        variant="outline"
      />
      {isOpen && (
        <VStack
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
          bg={bgColor[colorMode]}
          color={textColor[colorMode]}
          p={4}
        >
          <NavItem to="/HomePage" text="Home" />
          <NavItem to="/Tareas" text="Tareas" />
          <NavItem to="/SobreNosotros" text="Sobre Nosotros" />
        </VStack>
      )}
    </Box>
  );
};

const NavItem = ({ to, text }) => (
  <Link to={to}>
    <Box p={2}>
      {text}
    </Box>
  </Link>
);

export default Menu;