import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { AtSignIcon, LockIcon } from '@chakra-ui/icons';
import authOperations from 'redux/auth/authOperations';

const LogIn = () => {
  const schema = yup
    .object({
      email: yup.string().email().nullable().required(),
      password: yup.string().required(),
    })
    .required();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const { colorMode } = useColorMode();
  const shadow = colorMode === 'dark' ? 'dark-lg' : 'md';
  const dispatch = useDispatch();

  const onFormSubmit = ({ email, password }) => {
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  return (
    <FormControl
      as="form"
      display="flex"
      flexDirection="column"
      w="lg"
      gap={5}
      p={7}
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <FormLabel htmlFor="email">
        <AtSignIcon color="gray.600" mb={1} /> E-mail
        <Input
          type="email"
          shadow={shadow}
          {...register('email', { required: true })}
        />
        <FormHelperText fontSize={12} color="gray.500" mt={1}>
          Email must be valid and contain @
        </FormHelperText>
      </FormLabel>
      <FormLabel htmlFor="password">
        <LockIcon color="gray.600" mb={1} /> Password
        <Input
          type="password"
          shadow={shadow}
          {...register('password', { required: true })}
        />
        <FormHelperText fontSize={12} color="gray.500" mt={1}>
          Password must be at least 7 characters long
        </FormHelperText>
      </FormLabel>
      <Button
        type="submit"
        w={48}
        shadow={shadow}
        bg={colorMode === 'dark' ? 'gray.500' : 'gray.200'}
      >
        LOG IN
      </Button>
    </FormControl>
  );
};

export default LogIn;