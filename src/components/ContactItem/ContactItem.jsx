import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Avatar,
  Text,
  Flex,
  Button,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { PhoneIcon, DeleteIcon } from '@chakra-ui/icons';
import { deleteContact } from 'redux/contacts/contactOperations';
import { selectIsLoading } from 'redux/contacts/contactSelectors';
import { LoaderDelete } from 'utils/loader';

export const ContactItem = ({ contacts }) => {
  const { colorMode } = useColorMode();
  const { id, name, number } = contacts;
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  return (
    <Flex
      p={3}
      gap={7}
      boxShadow="lg"
      w="280px"
      bg={colorMode === 'dark' ? 'gray.600' : 'gray.100'}
    >
      <Avatar name={name} />
      <Flex flexDirection="column" justify="space-between" gap={2}>
        <Text fontSize="xl" fontWeight="semibold">
          {name}
        </Text>
        <Text as="samp" fontSize="lg">
          {
            <IconButton
              variant="outline"
              colorScheme="gray"
              aria-label="Call Sage"
              fontSize="lg"
              icon={<PhoneIcon />}
            />
          }{' '}
          {number}
        </Text>
        <Button
          type="button"
          colorScheme="gray"
          size="sm"
          onClick={() => dispatch(deleteContact(id))}
          disabled={isLoading}
        >
          {isLoading && <LoaderDelete />}
          {!isLoading && 'Delete contact'}
          {!isLoading && <DeleteIcon ml={2} />}
        </Button>
      </Flex>
    </Flex>
  );
};

ContactItem.proTypes = {
  contacts: PropTypes.object.isRequired,
};