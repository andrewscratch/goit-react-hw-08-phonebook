import { useDispatch } from 'react-redux';
import { Image, Flex, Text, Button, useColorMode } from '@chakra-ui/react';
import authOperations from 'redux/auth/authOperations';
import avatar from 'images/user.png';
import { useAuth } from 'components/hooks';
import { setContactsValue } from 'redux/contacts/contactSlice';
import { setFilterValue } from 'redux/contacts/filterSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(authOperations.logOut());
    dispatch(setContactsValue([]));
    dispatch(setFilterValue(''));
  };

  const { colorMode } = useColorMode();

  return (
    <>
      <Flex align="center" pos="absolute" right={24}>
        <Image src={avatar} alt="Avatar" w={8} mr={2} />
        <Text mr={16} fontSize="18px">
          Welcome, {user.name}
        </Text>
        <Button
          type="button"
          w={24}
          shadow={colorMode === 'dark' ? 'dark-lg' : 'md'}
          bg={colorMode === 'dark' ? 'gray.500' : 'gray.500'}
          onClick={handleLogOut}
        >
          Log Out
        </Button>
      </Flex>
    </>
  );
};