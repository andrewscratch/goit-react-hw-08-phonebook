import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Box, useColorMode } from '@chakra-ui/react';

export const NavItem = ({ title, to }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as={NavLink}
      fontSize="2xl"
      _activeLink={
        colorMode === 'dark'
          ? { color: 'gray.200', borderBottom: '2px' }
          : { color: 'gray.500', borderBottom: '2px' }
      }
      to={to}
    >
      {title}
    </Box>
  );
};

NavItem.proTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};