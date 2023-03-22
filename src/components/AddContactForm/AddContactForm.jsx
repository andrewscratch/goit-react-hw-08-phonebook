import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { addContact } from 'redux/contacts/contactOperations';
import { selectContacts } from 'redux/contacts/contactSelectors';
import { alreadyInContact } from 'utils/notification';

export const AddContactForm = () => {
  const schema = yup
    .object({
      name: yup.string().required(),
      number: yup.string().required(),
    })
    .required();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onFormSubmit = ({ name, number }) => {
    const isFindName = contacts.find(state => state.name === name);
    if (isFindName) {
      alreadyInContact(name);
      reset();
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  const { colorMode } = useColorMode();
  const shadow = colorMode === 'dark' ? 'dark-lg' : 'md';

  return (
    <Flex
      w="100%"
      alignItems="center"
      flexDirection="column"
      my={8}
      p={7}
      shadow={shadow}
    >
      <Text fontSize="xl" fontWeight="semibold">
        Add contacts as you wish
      </Text>
      <FormControl
        as="form"
        display="flex"
        alignItems="center"
        gap={8}
        pt={4}
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <FormLabel
          htmlFor="name"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          Name
          <Input
            w="md"
            shadow={shadow}
            {...register('name', { required: true })}
          />
          <FormHelperText fontSize="small" color="gray.500" mt={1}>
            May contain only letters, apostrophe and spaces
          </FormHelperText>
        </FormLabel>
        <FormLabel
          htmlFor="number"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          Phone Number
          <Input
            w="xs"
            type="number"
            shadow={shadow}
            {...register('number', { required: true })}
          />
          <FormHelperText fontSize="small" color="gray.500" mt={1}>
            Phone number must be only digits
          </FormHelperText>
        </FormLabel>
        <Button
          type="submit"
          w={10}
          m={0}
          p={0}
          fontSize={24}
          shadow={shadow}
          borderRadius="full"
          bg={colorMode === 'dark' ? 'gray.500' : 'gray.200'}
        >
          +
        </Button>
      </FormControl>
    </Flex>
  );
};