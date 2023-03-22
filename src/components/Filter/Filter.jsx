import { useDispatch } from 'react-redux';
import { Text, Flex, Input, useColorMode } from '@chakra-ui/react';
import { setFilterValue } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = evt =>
    dispatch(setFilterValue(evt.currentTarget.value.toLocaleLowerCase()));

  const { colorMode } = useColorMode();
  const shadow = colorMode === 'dark' ? 'dark-lg' : 'md';

  return (
    <Flex w="100%" flexDirection="column" mb={8} p={7} shadow={shadow}>
      <Text fontSize="xl" fontWeight="semibold" pb={2}>
        Find contacts by Name:
      </Text>
      <Input
        shadow={shadow}
        placeholder="Start typing a name..."
        onChange={changeFilter}
      />
    </Flex>
  );
};