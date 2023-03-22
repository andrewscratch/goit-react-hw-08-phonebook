import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Flex, Container, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from 'utils/ColorModeSwitcher';
import { Logo } from 'images';
import { Loader } from 'utils/loader';
import UserMenu from 'components/UserMenu';
import { NavItem } from './NavItem';
import { useAuth } from 'components/hooks';

export const NavBar = () => {
  const { isLoggedIn } = useAuth();
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        as="header"
        p={3}
        bg={colorMode === 'dark' ? 'orange.500' : 'orange.200'}
        boxShadow="xl"
        w="100%"
      >
        <Container maxW={'container.2xl'}>
          <Flex align="center">
            <Logo boxSize="40px" objectFit="cover" pointerEvents="none" />
            <Flex as="nav" ml={10}>
              {!isLoggedIn && <NavItem title="Home" to="/" />}
              {isLoggedIn && <NavItem title="Contacts" to="/contacts" />}
              {!isLoggedIn && (
                <Flex gap={10} pos="absolute" right={32}>
                  <NavItem title="Log In" to="/login" />
                  <NavItem title="Register" to="/register" />
                </Flex>
              )}
              {isLoggedIn && <UserMenu />}
            </Flex>
            <ColorModeSwitcher pos="absolute" right={6} />
          </Flex>
        </Container>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};